import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useContract } from "wagmi";

// Import your new components
import SubmissionTime from "../components/SubmissionTime";
import { useYourContract } from "~~/generated/contractHooks";
import VotingTime from "../components/VotingTime";
import Submissions from "../components/Submissions";
import SubmissionForm from "../components/SubmissionForm";
//import AddFunds from "../components/AddFunds";
//import VoteOnSubmission from "../components/VoteOnSubmission";

const Home: NextPage = () => {

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

        {/* Include your new components */}
        <SubmissionTime />
        <VotingTime />
        <Submissions />
        <SubmissionForm address={"0xcd258fCe467DDAbA643f813141c3560FF6c12518"} />
      </div>
    </>
  );
};

export default Home;
