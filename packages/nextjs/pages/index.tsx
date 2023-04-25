import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useContract } from "wagmi";
import React, { useState } from "react";

import SubmissionTime from "../components/SubmissionTime";
import VotingTime from "../components/VotingTime";
import Submissions from "../components/Submissions";
import SubmissionForm from "../components/SubmissionForm";
import AddFunds from "../components/AddFunds";
import Vote from "../components/AddVote";


const Home: NextPage = () => {
  const [selectedOption, setSelectedOption] = useState("submission");

  return (
    <>
      <Head>
        <title>Viaprize</title>
        <meta name="description" content="Your App Description" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Viaprize</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 w-full">
          <div className="bg-black-100 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold mb-2">Times</h3>
            <SubmissionTime />
            <VotingTime />
          </div>

          <div className="bg-black-100 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold mb-2">
              {selectedOption === "submission"
                ? "Add Submission"
                : selectedOption === "funds"
                ? "Add Funds"
                : "Vote"}
            </h3>
            <div className="flex justify-around mb-2">
              <button
                className={`text-md font-bold ${
                  selectedOption === "submission"
                    ? "text-white"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedOption("submission")}
              >
                Add Submission
              </button>
              <button
                className={`text-md font-bold ${
                  selectedOption === "funds" ? "text-white" : "text-gray-500"
                }`}
                onClick={() => setSelectedOption("funds")}
              >
                Add Funds
              </button>
              <button
                className={`text-md font-bold ${
                  selectedOption === "vote" ? "text-white" : "text-gray-500"
                }`}
                onClick={() => setSelectedOption("vote")}
              >
                Vote
              </button>
            </div>
            {selectedOption === "submission" ? (
              <SubmissionForm />
            ) : selectedOption === "funds" ? (
              <AddFunds />
            ) : (
              <Vote contractName={"YourContract"} />
            )}
          </div>
        </div>

        <div className="bg-black-100 p-4 rounded-md shadow-md w-full">
          <h3 className="text-lg font-bold mb-2">Submissions</h3>
          <Submissions />
        </div>
      </div>
    </>
  );
};

export default Home;
