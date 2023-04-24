//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import '@openzeppelin/contracts/utils/cryptography/ECDSA.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Eippy is Ownable {
  using ECDSA for bytes32;

  function createMessage(uint16 score, address account, address _contract) public view returns (bytes32) {
    return keccak256(abi.encode(score, account, _contract));
  }

  function verifySignature(uint16 score, address account, address _contract, bytes memory signature) public view returns (bool) {
    bytes32 message = createMessage(score, account, _contract).toEthSignedMessageHash();
    bool beans;

    if (message.recover(signature) != address(account)) {
        beans = false;
    } else { 
        beans = true;
    }
    

    return (beans);



  }
}