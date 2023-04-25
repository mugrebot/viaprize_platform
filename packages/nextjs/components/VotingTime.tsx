import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { useYourContractGetVotingTime } from "~~/generated/contractHooks";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";

const VotingTime: React.FC = ({}) => {
  const [currentTimestamp, setCurrentTimestamp] = useState(Math.floor(Date.now() / 1000));

  const { data: contractInfo, isLoading: isContractInfoLoading } = useDeployedContractInfo("YourContract");
  const { data: votingTV, isLoading: isVotingTimeLoading } = useYourContractGetVotingTime({
    address: contractInfo?.address,
  });

  const remainingTimeInSeconds = votingTV?.sub(currentTimestamp).toNumber() || 0;
  const remainingTime =
    remainingTimeInSeconds > 0
      ? formatDistanceToNow(Date.now() + remainingTimeInSeconds * 1000)
      : "Voting period has ended";

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
      <h3 className="text-lg font-bold mb-2">Voting Time</h3>
      {isContractInfoLoading || isVotingTimeLoading ? (
        <p className="text-gray-400">Loading voting time...</p>
      ) : (
        <p className="text-white-700">
          <span className="font-semibold">{remainingTime}</span>
        </p>
      )}
    </div>
  );
};

export default VotingTime;
