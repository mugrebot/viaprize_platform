import { useMemo, useState, useEffect } from "react";
import { Abi } from "abitype";
import { useContract, useProvider } from "wagmi";
import { Spinner } from "~~/components/Spinner";
import {
  Address,
  Balance,
  getAllContractFunctions,
  getContractReadOnlyMethodsWithParams,
  getContractVariablesAndNoParamsReadMethods,
  getContractWriteMethods,
} from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useNetworkColor } from "~~/hooks/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth";
import { ContractName } from "~~/utils/scaffold-eth/contract";

type ContractUIProps = {
  contractName: ContractName;
  functionName: string;
  className?: string;
};

export const SpecificContractUI = ({ contractName, functionName, className = "" }: ContractUIProps) => {
  const provider = useProvider();
  const [refreshDisplayVariables, setRefreshDisplayVariables] = useState(false);
  const [methods, setMethods] = useState([]);
  const configuredNetwork = getTargetNetwork();

  const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo(contractName);
  const networkColor = useNetworkColor();

  const contract = useContract({
    address: deployedContractData?.address,
    abi: deployedContractData?.abi as Abi,
    signerOrProvider: provider,
  });

  const displayedContractFunctions = useMemo(() => getAllContractFunctions(contract), [contract]);

  const contractVariablesDisplay = useMemo(() => {
    return getContractVariablesAndNoParamsReadMethods(contract, displayedContractFunctions, refreshDisplayVariables);
  }, [contract, displayedContractFunctions, refreshDisplayVariables]);

  const functionDisplay = useMemo(() => {
    const readFunction = getContractReadOnlyMethodsWithParams(contract, displayedContractFunctions);
    const writeFunction = getContractWriteMethods(contract, displayedContractFunctions, setRefreshDisplayVariables);
    return { readFunction, writeFunction };
  }, [contract, displayedContractFunctions, functionName]);


  //display the function name and the input fields, if a function name is passed in as a prop and matches the function name in the contract then display the input fields for that function
  //it comes from the writeFunction.methods[i].props.functionFragment.name 
  //display the function name and the input fields
    const beans_2 = useMemo(() => {

        const functionLookup = (functionName: string) => {
            for (let i = 0; i < functionDisplay.writeFunction.methods.length; i++) {
                if (functionDisplay?.writeFunction?.methods[i].props.functionFragment.name === functionName) {
                    setMethods(functionDisplay.writeFunction.methods[i])
                    return functionDisplay.writeFunction.methods[i]?.props.functionFragment.name;
                }}}

            functionLookup(functionName);
        }, [functionName, functionDisplay.writeFunction.methods]);








  if (deployedContractLoading) {
    return (
      <div className="mt-14">
        <Spinner width="50px" height="50px" />
      </div>
    );
  }

  if (!deployedContractData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of "${contractName}" on chain "${configuredNetwork.name}"!`}
      </p>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>

        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
          <div className="z-10">
            <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
              <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                <div className="flex items-center justify-center space-x-2">
                  <p className="my-0 text-sm">Function</p>
                </div>
              </div>
              <div className="p-5 divide-y divide-base-300">
                {functionDisplay.readFunction || functionDisplay.writeFunction ? (
                  <>
                    {functionDisplay.writeFunction && methods}
                  </>
                ) : (
                  "No matching function"
                )}
              </div>
            </div>
          </div>
        </div>


    </div>
  );
};