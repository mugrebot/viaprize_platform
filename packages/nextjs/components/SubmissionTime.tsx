import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { useYourContractGetSubmissionTime, yourContractABI } from "~~/generated/contractHooks";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { formatDistanceToNow } from 'date-fns';


interface Props {
  contract: any;
}

const SubmissionTime: React.FC<Props> = ({}) => {
  const [submissionTime, setSubmissionTime] = useState<number | null>(null);
  const [currentTimestamp, setCurrentTimestamp] = useState(Math.floor(Date.now() / 1000));

const { data: contractInfo, isLoading: isContractInfoLoading } = useDeployedContractInfo('YourContract');
const { data: submissionTV, isLoading: isSubmissionTimeLoading } = useYourContractGetSubmissionTime({
        address: contractInfo?.address,
    });

const remainingTimeInSeconds = submissionTV?.sub(currentTimestamp).toNumber() || 0;
const remainingTime = remainingTimeInSeconds > 0 ? formatDistanceToNow(Date.now() + remainingTimeInSeconds * 1000) : 'Submission period has ended';



useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimestamp(Math.floor(Date.now() / 1000));
    }, 60000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-black-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold mb-2">Submission Time</h3>
      {isContractInfoLoading || isSubmissionTimeLoading? (
        <p className="text-gray-400">Loading submission time...</p>
      ) : (
        <p className="text-white-700">
        <span className="font-semibold">{remainingTime}</span>
      </p>
      )}
    </div>
  );
};

export default SubmissionTime;
