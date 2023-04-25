const contracts = {
  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        Eippy: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "version",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "score",
                  type: "uint16",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_contract",
                  type: "address",
                },
              ],
              name: "createMessage",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "score",
                  type: "uint16",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_contract",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              name: "verifySignature",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        SubmissionAVLTree: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
              ],
              name: "addVotes",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "submitter",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "submissionText",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "threshold",
                  type: "uint256",
                },
              ],
              name: "add_submission",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
              ],
              name: "findSubmission",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllSubmissions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
              ],
              name: "getSubmission",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "inOrderTraversal",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "root",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
              ],
              name: "setThresholdCrossed",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
              ],
              name: "subVotes",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "submissionFunderBalances",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "submissions",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "submissionText",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "submitter",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "threshhold",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "funded",
                  type: "bool",
                },
                {
                  internalType: "int256",
                  name: "height",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "left",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "right",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
              ],
              name: "thresholdCrossed",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "funder",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "balances",
                  type: "uint256",
                },
              ],
              name: "updateFunderBalance",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "submissionContract",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "verifierContract",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "NotAdmin",
              type: "error",
            },
            {
              inputs: [],
              name: "NotEnoughFunds",
              type: "error",
            },
            {
              inputs: [],
              name: "NotYourVote",
              type: "error",
            },
            {
              inputs: [],
              name: "RefundAlreadyClaimed",
              type: "error",
            },
            {
              inputs: [],
              name: "RefundDoesntExist",
              type: "error",
            },
            {
              inputs: [],
              name: "RewardsAlreadyDistributed",
              type: "error",
            },
            {
              inputs: [],
              name: "RewardsNotDistributed",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionAlreadyMade",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionDoesntExist",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionPeriodActive",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionPeriodNotActive",
              type: "error",
            },
            {
              inputs: [],
              name: "VotingPeriodActive",
              type: "error",
            },
            {
              inputs: [],
              name: "VotingPeriodNotActive",
              type: "error",
            },
            {
              inputs: [],
              name: "PLATFORM_ADDRESS",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "score",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              name: "addFunds",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "submitter",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "submissionText",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "threshold",
                  type: "uint256",
                },
              ],
              name: "addSubmission",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "addressRefunded",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "admins",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_previous_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "_new_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "change_vote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "check_refund_amount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_refundAmount",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "claimRefund",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "distributed",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "end_submission_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "end_voting_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "funderVotes",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "funders",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllSubmissions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "getGitcoinScore",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "get_submission_time",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "get_voting_time",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "gitcoin_scores",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "platform_reward",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "refunded",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_submission_time",
                  type: "uint256",
                },
              ],
              name: "start_submission_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_voting_time",
                  type: "uint256",
                },
              ],
              name: "start_voting_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "total_funds",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "total_rewards",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_submissionHash",
                  type: "bytes32",
                },
              ],
              name: "use_unused_votes",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "vote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      name: "sepolia",
      chainId: "11155111",
      contracts: {
        SubmissionAVLTree: {
          address: "0x2B9770a1Ed8240049c0A2133D98c17BD4D2327AB",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
              ],
              name: "addVotes",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "submitter",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "submissionText",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "threshold",
                  type: "uint256",
                },
              ],
              name: "add_submission",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
              ],
              name: "findSubmission",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllSubmissions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
              ],
              name: "getSubmission",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "inOrderTraversal",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "root",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
              ],
              name: "setThresholdCrossed",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
              ],
              name: "subVotes",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "submissionFunderBalances",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "submissions",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "submissionText",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "submitter",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "threshhold",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "funded",
                  type: "bool",
                },
                {
                  internalType: "int256",
                  name: "height",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "left",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "right",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
              ],
              name: "thresholdCrossed",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "funder",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "balances",
                  type: "uint256",
                },
              ],
              name: "updateFunderBalance",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Eippy: {
          address: "0x2D15480d5002990E4f8D7a1cf879c8DbDdF5e825",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "version",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "score",
                  type: "uint16",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_contract",
                  type: "address",
                },
              ],
              name: "createMessage",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "score",
                  type: "uint16",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_contract",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              name: "verifySignature",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0xa9eE41058E0CCD5837f0613e3662A35c2B875D3E",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "submissionContract",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "verifierContract",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "NotAdmin",
              type: "error",
            },
            {
              inputs: [],
              name: "NotEnoughFunds",
              type: "error",
            },
            {
              inputs: [],
              name: "NotYourVote",
              type: "error",
            },
            {
              inputs: [],
              name: "RefundAlreadyClaimed",
              type: "error",
            },
            {
              inputs: [],
              name: "RefundDoesntExist",
              type: "error",
            },
            {
              inputs: [],
              name: "RewardsAlreadyDistributed",
              type: "error",
            },
            {
              inputs: [],
              name: "RewardsNotDistributed",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionAlreadyMade",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionDoesntExist",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionPeriodActive",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionPeriodNotActive",
              type: "error",
            },
            {
              inputs: [],
              name: "VotingPeriodActive",
              type: "error",
            },
            {
              inputs: [],
              name: "VotingPeriodNotActive",
              type: "error",
            },
            {
              inputs: [],
              name: "PLATFORM_ADDRESS",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "score",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              name: "addFunds",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "submitter",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "submissionText",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "threshold",
                  type: "uint256",
                },
              ],
              name: "addSubmission",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "addressRefunded",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "admins",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_previous_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "_new_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "change_vote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "check_refund_amount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_refundAmount",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "claimRefund",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "distributed",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "end_submission_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "end_voting_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "funderVotes",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "funders",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllSubmissions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "getGitcoinScore",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "get_submission_time",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "get_voting_time",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "gitcoin_scores",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "platform_reward",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "refunded",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_submission_time",
                  type: "uint256",
                },
              ],
              name: "start_submission_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_voting_time",
                  type: "uint256",
                },
              ],
              name: "start_voting_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "total_funds",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "total_rewards",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_submissionHash",
                  type: "bytes32",
                },
              ],
              name: "use_unused_votes",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "vote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
