import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import {
  useSubmissionAvlTreeGetSubmission,
  useYourContractGetAllSubmissions,
  useYourContractGetNumberOfSubmissions,
  yourContractABI,
} from "~~/generated/contractHooks";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import Link from "next/link";

interface Props {
  contract: any;
}

const Submissions: React.FC<Props> = ({}) => {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const { data: contractInfo, isLoading: isContractInfoLoading } = useDeployedContractInfo("YourContract");
  const { data: AvlInfo } = useDeployedContractInfo("SubmissionAVLTree");
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


  return (
    <div className="bg-black-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold mb-2">Submissions</h3>
      {isContractInfoLoading || isNumberOfSubmissionsLoading ? (
        <p className="text-gray-400">Loading submissions...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {submissions.map((submission, index) => (
            <div key={index} className="bg-white-100 p-4 rounded-md shadow-md">
                <Link href={`/${submission[0]}`}>
              <h4 className="text-md font-bold mb-2">Submission {index + 1}</h4>
              <p>IPFS Text: {submission[1]}</p>
              <span className="font-semibold block mb-2" style={truncate}>Hash{submission[0]}</span> {/* submissionHash */}
              <p>Votes: {Number(submission[2]._hex)}</p>
              <span className="font-semibold block mb-2" style={truncate}>Submitter: {submission[3]}</span>
              <p>Threshold: {Number(submission[4]._hex) / 1e18} ETH</p>
              <p>Funded: {submission[5] ? "Yes" : "No"}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Submissions;
