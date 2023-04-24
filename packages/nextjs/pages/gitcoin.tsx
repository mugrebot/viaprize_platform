import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { ethers } from "ethers";
import { useAccount, useConnect, useSignMessage, useSigner } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

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

  const { address, isConnected, connector: activeConnector } = useAccount();

  const { data: signer } = useSigner();

  // here we deal with any local state we need to manage
  const [score, setScore] = useState<string>("");
  const [noScoreMessage, setNoScoreMessage] = useState<string>("");
  const [message, setMessage] = useState<Uint8Array>(new Uint8Array());

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message,
    onError(error) {
      console.log("Error", error);
    },
    onMutate(args) {
      console.log("Mutate", args);
    },
  });

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
  }, [address, checkPassport]);

  /* todo connect user's wallet */

  /* todo check user's passport */
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  async function SetMessage() {
    if (!address) {
      console.log("no address");
      return;
    }

    if (!score) {
      console.log("no score");
      return;
    }

    const _message = ethers.utils.keccak256(
      ethers.utils.defaultAbiCoder.encode(
        ["uint16", "address", "address"],
        [score, address, "0x752976c044F434585c7fA998ec8F63C20097962C"],
      ),
    );

    const arrayified = ethers.utils.arrayify(_message);

    const signature = await signer?.signMessage(arrayified);

    console.log(signature);

    setMessage(arrayified);
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
        Once you have added more stamps to your passport, submit your passport again to recalculate your score.
      </p>

      <button disabled={isLoading} onClick={() => SetMessage()}>
        Set Message
      </button>

      <button disabled={isLoading} onClick={() => signMessage()}>
        Sign typed data
      </button>
      {isSuccess && <div>Signature: {data}</div>}
      {isError && <div>Error signing message</div>}

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
