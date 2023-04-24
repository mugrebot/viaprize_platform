import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Web3Provider } from "@ethersproject/providers";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultProvider } from "ethers";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { useDarkMode } from "usehooks-ts";
import { useAccount, useConnect, useDisconnect, useProvider, useSignTypedData, useSigner } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useEthPrice } from "~~/hooks/scaffold-eth";
import { useAppStore } from "~~/services/store/store";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";

import { signTypedData_v4 } from "eth-sig-util";

import { ethers } from "ethers";

import { EIP712 } from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import { ECDSA } from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";


// these lines read the API key and scorer ID from your .env.local file
const APIKEY = "716FoKqX.jZD7WuTQhn4pbiEv1cjMsbZEdQqVJemv";
const SCORER_ID = "188";

// endpoint for submitting passport
const SUBMIT_PASSPORT_URI = "https://api.scorer.gitcoin.co/registry/submit-passport";
// endpoint for getting the signing message
const SIGNING_MESSAGE_URI = "https://api.scorer.gitcoin.co/registry/signing-message";
// score needed to see hidden message
const THRESHOLD_NUMBER = 0;

const headers = APIKEY
  ? {
      "Content-Type": "application/json",
      "X-API-Key": APIKEY,
    }
  : undefined;

export default function Passport() {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const provider = useProvider();

  console.log(provider.getSigner());

  const { address, isConnected, connector: activeConnector } = useAccount();

  const { data: signer } = useSigner();

  // here we deal with any local state we need to manage
  const [score, setScore] = useState<string>("");
  const [noScoreMessage, setNoScoreMessage] = useState<string>("");

  /* todo check user's connection when the app loads */
  async function _connect() {
    try {
      connect({ activeConnector });
      checkPassport(address);
    } catch (err) {
      console.log("error connecting...");
    }
  }

  useEffect(() => {
    checkConnection();
    async function checkConnection() {
      try {
        // if the user is connected, set their account and fetch their score
        if (address) {
          checkPassport(address);
        }
      } catch (err) {
        console.log("not connected...");
      }
    }
  }, []);

  /* todo connect user's wallet */

  /* todo check user's passport */
  async function checkPassport(currentAddress = address) {
    setScore("");
    setNoScoreMessage("");
    //
    console.log("Checking passport for address:", currentAddress);
    const GET_PASSPORT_SCORE_URI = `https://api.scorer.gitcoin.co/registry/score/${188}/${currentAddress}`;
    try {
      const response = await fetch(GET_PASSPORT_SCORE_URI, {
        headers,
      });
      const passportData = await response.json();
      if (passportData.score) {
        // if the user has a score, round it and set it in the local state
        console.log("rounding score");
        const roundedScore = Math.round(passportData.score);
        setScore(roundedScore.toString());
      } else {
        // if the user has no score, display a message letting them know to submit thier passporta
        console.log("No score available, please add stamps to your passport and then resubmit.");
        setNoScoreMessage("No score available, please submit your passport after you have added some stamps.");
      }
    } catch (err) {
      console.log("error: ", err);
    }
  }

  /* todo get signing message from API */

  /* todo submit passport for scoring */
  async function getSigningMessage() {
    try {
      const response = await fetch(SIGNING_MESSAGE_URI, {
        headers,
      });
      const json = await response.json();
      return json;
    } catch (err) {
      console.log("error: ", err);
    }
  }

  async function GetSignedScore() {
    if (!address) {
      console.log("no address");
      return;
    }

    if (!score) {
      console.log("no score");
      return;
    }

    console.log(score, address);

    //construct a message with the score from the current query to be signed using wagmi methods
    const domain = {
      name: "Viaprize",
      version: "1",
      chainId: 11155111,
      verifyingContract: "0x682886bB67ff19db20B70B1F859E40aae3ce36A7",
    };

    const types = {
      Message: [
        { name: "score", type: "uint16" },
        { name: "account", type: "address" },
        { name: "_contract", type: "address" },
      ],
    };

    const message = {
      score: score,
      account: address,
      _contract: "0x682886bB67ff19db20B70B1F859E40aae3ce36A7",
    };

    const messageHash = ethers.utils._TypedDataEncoder.hash(domain, types, message);
    console.log(messageHash);

    const signature = await signer?._signTypedData(domain, types, message);

    console.log(domain, types, message);
    console.log(signature);
  }

  async function submitPassport() {
    setNoScoreMessage("");
    try {
      // call the API to get the signing message and the nonce
      const { message, nonce } = await getSigningMessage();
      console.log(message);
      // ask the user to sign the message
      const signature = await signer?.signMessage(message);
      console.log(signature);

      // call the API, sending the signing message, the signature, and the nonce
      const response = await fetch(SUBMIT_PASSPORT_URI, {
        method: "POST",
        headers,
        body: JSON.stringify({
          address,
          scorer_id: SCORER_ID,
          signature,
          nonce,
        }),
      });

      const data = await response.json();
      console.log("data:", data);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  const styles = {
    main: {
      width: "900px",
      margin: "0 auto",
      paddingTop: 90,
    },
    heading: {
      fontSize: 60,
    },
    intro: {
      fontSize: 18,
      color: "rgba(0, 0, 0, .55)",
    },
    configurePassport: {
      marginTop: 20,
    },
    linkStyle: {
      color: "#008aff",
    },
    buttonContainer: {
      marginTop: 20,
    },
    buttonStyle: {
      padding: "10px 30px",
      outline: "none",
      border: "none",
      cursor: "pointer",
      marginRight: "10px",
      borderBottom: "2px solid rgba(0, 0, 0, .2)",
      borderRight: "2px solid rgba(0, 0, 0, .2)",
    },
    hiddenMessageContainer: {
      marginTop: 15,
    },
    noScoreMessage: {
      marginTop: 20,
    },
  };

  return (
    /* this is the UI for the app */
    <div style={styles.main}>
      <h1 style={styles.heading}>Gitcoin Passport Scorer 🫶</h1>
      <p style={styles.configurePassport}>
        Configure your passport{" "}
        <a style={styles.linkStyle} target="_blank" href="https://passport.gitcoin.co/#/dashboard" rel="noreferrer">
          here
        </a>
      </p>
      <p style={styles.configurePassport}>
        Once you've added more stamps to your passport, submit your passport again to recalculate your score.
      </p>

      <button onClick={() => GetSignedScore()}>Get signed score</button>

      <div style={styles.buttonContainer}>
        {!isConnected && (
          <button style={styles.buttonStyle} onClick={_connect}>
            Connect Wallet
          </button>
        )}
        {score && (
          <div>
            <h1>Your passport score is {score} 🎉</h1>
            <div style={styles.hiddenMessageContainer}>
              {Number(score) >= THRESHOLD_NUMBER && <h2>Congratulations, you can view this secret message!</h2>}
              {Number(score) < THRESHOLD_NUMBER && (
                <h2>Sorry, your score is not high enough to view the secret message.</h2>
              )}
            </div>
          </div>
        )}
        {isConnected && (
          <div style={styles.buttonContainer}>
            <button style={styles.buttonStyle} onClick={submitPassport}>
              Submit Passport
            </button>
            <button style={styles.buttonStyle} onClick={() => checkPassport()}>
              Check passport score
            </button>
          </div>
        )}
        {noScoreMessage && <p style={styles.noScoreMessage}>{noScoreMessage}</p>}
      </div>
    </div>
  );
}
