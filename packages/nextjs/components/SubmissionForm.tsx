import React, { useState } from "react";
import { IntegerInput } from "./scaffold-eth";

import { useAccount } from "wagmi";
import { useYourContractAddSubmission, yourContractABI } from "~~/generated/contractHooks";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";

interface Props {
  address: string;
}

const SubmissionForm: React.FC<Props> = ({}) => {
  const [submissionText, setSubmissionText] = useState("");
  //use state for threshhold will be a number type and will be converted to wei
  const [threshold, setThreshold] = useState("");
  const [_response, setResponse] = useState();

  const { address } = useAccount();

  const { data: contractInfo, isLoading: isContractInfoLoading } = useDeployedContractInfo("YourContract");
  const { write } = useYourContractAddSubmission({
    mode: "recklesslyUnprepared",
    address: contractInfo?.address,
    abi: yourContractABI,
    functionName: "addSubmission",
    args: [address, submissionText, threshold],
  });

  const handleChange = newValue => {
    setThreshold(newValue);
  };

  const inputProps = {
    value: threshold,
    name: "threshold",
    placeholder: "Input amount in ETH",
    onChange: handleChange,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submissionText || !threshold) return;

    try {
      setSubmissionText("");
      setThreshold("");
      const response = await write();
      console.log("Submission response:", response);
      setResponse(response);
    } catch (error) {
      console.error("Failed to add submission:", error);
    }
  };

  const { value, name, onChange } = inputProps;

  return (
    <div className="bg-black-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold mb-2">Add Submission</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="submissionText" className="block text-sm font-medium text-white-700">
          Submission Text
        </label>
        <input
          id="submissionText"
          type="text"
          className="mt-1 block w-full rounded-md bg-gray-100  focus:ring-gray-500"
          value={submissionText}
          onChange={e => setSubmissionText(e.target.value)}
          required
        />
        <label htmlFor="threshold" className="block text-sm font-medium text-white-700">
          Threshold (in ETH)
        </label>
        <IntegerInput value={value} name={name} placeholder={"convert to ETH ---> "} onChange={onChange} />
        <button
          type="submit"
          className="mt-4 px-4 py-2 text-sm font-medium text-white-700 bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm focus:ring-blue-500"
          disabled={isContractInfoLoading}
        >
          {_response ? "Adding submission..." : "Add submission"}
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;
