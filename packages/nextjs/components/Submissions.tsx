import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import {
  useSubmissionAvlTreeGetSubmission,
  useYourContractGetAllSubmissions,
  useYourContractGetNumberOfSubmissions,
  yourContractABI,
} from "~~/generated/contractHooks";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { CopyIcon } from "./example-ui/assets/CopyIcon";
import Link from "next/link";

interface Props {
  contract: any;
}

const Submissions: React.FC<Props> = ({}) => {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const { data: contractInfo, isLoading: isContractInfoLoading } = useDeployedContractInfo("YourContract");
  const { data: AvlInfo } = useDeployedContractInfo("SubmissionAVLTree");
  const [toastMessage, setToastMessage] = useState("");

  const { data: numberOfSubmissions, isLoading: isNumberOfSubmissionsLoading } = useYourContractGetAllSubmissions({
    address: contractInfo?.address,
  });

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!numberOfSubmissions) {
        return;
      }
      const submissionPromises = [];
      for (let i = 0; i < numberOfSubmissions.length; i++) {
        submissionPromises.push(numberOfSubmissions[i]);
      }
      const fetchedSubmissions = await Promise.all(submissionPromises);
      setSubmissions(fetchedSubmissions);
    };

    fetchSubmissions();
  }, [contractInfo, numberOfSubmissions]);

  const truncate = {
    maxWidth: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setToastMessage("Copied to clipboard!");
        setTimeout(() => {
          setToastMessage("");
        }, 1500);
      },
      (err) => {
        console.error("Could not copy text:", err);
      }
    );
  };

  return (
    <div className="bg-black-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold mb-2">Submissions</h3>
      {isContractInfoLoading || isNumberOfSubmissionsLoading ? (
        <p className="text-gray-400">Loading submissions...</p>
      ) : (
        <>
        <div
        className={`fixed top-4 left-100 bg-black-100 p-2 rounded-md shadow-md transition-all ${
          toastMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        {toastMessage}
      </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {submissions.map((submission, index) => (
            <div key={index} className="bg-white-100 p-4 rounded-md shadow-md">

                  <h4 className="text-md font-bold mb-2">Submission {index + 1}</h4>
                  <p>IPFS Text: {submission[1]}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold" style={truncate}>Hash: {submission[0]}</span>
                    <button
                      className="text-blue-500 hover:text-blue-700 underline"
                      onClick={() => copyToClipboard(submission[0])}
                    >
              <CopyIcon className="ml-1 cursor-pointer h-4 w-4" />
                    </button>
                  </div>
                  <p>Votes: {Number(submission[2]._hex)}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold" style={truncate}>Submitter: {submission[3]}</span>
                    <button
                      className="text-blue-500 hover:text-blue-700 underline"
                      onClick={() => copyToClipboard(submission[3])}
                    >
              <CopyIcon className="ml-1 cursor-pointer h-4 w-4" />
                    </button>
                  </div>
                  <p>Threshold: {Number(submission[4]._hex) / 1e18} ETH</p>
                  <p>Funded: {submission[5] ? "Yes" : "No"}</p>

            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default Submissions;

