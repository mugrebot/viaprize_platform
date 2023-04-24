import { Abi } from "abitype";
import React, { useMemo } from "react";
import { useContract } from "wagmi";
import { getContractWriteMethod } from "~~/components/scaffold-eth";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import { SpecificContractUI } from "~~/components/scaffold-eth";

interface Props {
  contractName: ContractName;
}

const AddVote: React.FC<Props> = ({ contractName }) => {

  console.log(contractName);
  const { data: deployedContractData } = useDeployedContractInfo(contractName);



  return (
    <div className="bg-black-100 p-4 rounded-md shadow-md">
      <SpecificContractUI contractName={contractName} functionName={"vote"} className={contractName} />
    </div>
  );
};

export default AddVote;
