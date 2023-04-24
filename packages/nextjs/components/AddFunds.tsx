import React, { useState } from "react";
import { useYourContractAddFunds, yourContractABI } from "~~/generated/contractHooks";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";

interface Props {
    address: string;
  }

const AddFunds: React.FC<Props> = ( address ) => {
  const [funds, setFunds] = useState("");
  const [score, setScore] = useState("0");
  const [signature, setSignature] = useState("0x3de6b65781d0b1f8dd2d71697f8affc7ee613f5fe9cfcd77d6fa3df0537a9030146e93090ded104ab353d08f173901afeaffd764548ed6ac33184af6dcd0b1dc1c");
  

  const { data: contractInfo } = useDeployedContractInfo("YourContract");

  const { isLoading: isAddingFunds, write } = useYourContractAddFunds({
    mode: "recklesslyunprepared",
    address: contractInfo?.address,
    abi: yourContractABI,
    functionName: "addFunds",
    args: [score, signature],
    value: funds,
  });

  const handleAddFunds = async () => {
    if (!funds) {
      alert("Please enter the funds amount");
      return;
    }

    try {
      const response = await write();
      console.log("Funds added successfully", response);
    } catch (error) {
      console.error("Failed to add funds", error);
    }
  };

  return (
    <div className="bg-black-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold mb-2">Add Funds</h3>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Score (optional)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="w-full p-2 bg-black-200 rounded-md"
        />
        <input
          type="text"
          placeholder="Signature (optional)"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          className="w-full p-2 bg-black-200 rounded-md"
        />
        <input
          type="text"
          placeholder="Funds"
          value={funds}
          onChange={(e) => setFunds(e.target.value)}
          className="w-full p-2 bg-black-200 rounded-md"
        />
        <button
          onClick={handleAddFunds}
          disabled={isAddingFunds}
          className="w-full p-2 bg-blue-500 rounded-md text-white"
        >
          {isAddingFunds ? "Adding funds..." : "Add Funds"}
        </button>
      </div>
    </div>
  );
};

export default AddFunds;
