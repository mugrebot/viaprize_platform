// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

contract Eippy is EIP712 {
  using ECDSA for bytes32;

  constructor(string memory name, string memory version)
    EIP712(name, version)
  {
  }

  bytes32 constant private MESSAGE_TYPEHASH = keccak256(
    "Message(uint16 score,address account,address _contract)"
  );

  struct Message {
    uint16 score;
    address account;
    address _contract;
  }

  function createMessage(uint16 score, address account, address _contract) public view returns (bytes32) {
    return _hashTypedDataV4(keccak256(abi.encode(
      MESSAGE_TYPEHASH,
      score,
      account,
      _contract
    )));
  }

  function verifySignature(uint16 score, address account, address _contract, bytes memory signature) public view returns (bool) {
    bytes32 message = createMessage(score, account, _contract);
    return message.recover(signature) == account;
  }
}
