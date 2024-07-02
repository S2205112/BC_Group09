// contracts/CredentialNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract CredentialNFT is ERC721Enumerable {
    address public admin;

    constructor() ERC721("CredentialNFT", "CREDNFT") {
        admin = msg.sender;
    }

    function mint(address to, uint tokenId) external {
        require(msg.sender == admin, "Only admin can mint tokens");
        _safeMint(to, tokenId);
    }
}
