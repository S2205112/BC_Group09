// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CredentialNFT is ERC721 {
    address public credentialContractAddress;
    uint256 public credentialId;
    uint256 public tokenIdCounter;
    string private baseTokenURI;
    mapping(uint256 => string) private tokenURIs;

    constructor(address _credentialContractAddress)
        ERC721("Credential NFT", "CNFT")
    {
        credentialContractAddress = _credentialContractAddress;
    }

    event NFTMinted(address indexed to, uint256 tokenId, string tokenURI);

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }
    
    
    function setBaseTokenURI(string memory _newBaseTokenURI) external {
        require(
            msg.sender == credentialContractAddress,
            "Only the credential contract can set base URI"
        );
        baseTokenURI = _newBaseTokenURI;
    }

   

    function mintNFT(address _to, string memory _tokenURI) external {
        require(
            msg.sender == credentialContractAddress,
            "Only the credential contract can mint NFTs"
        );
        tokenIdCounter++;
        _safeMint(_to, tokenIdCounter);
        tokenURIs[tokenIdCounter] = _tokenURI;
        emit NFTMinted(_to, tokenIdCounter, _tokenURI);
    }

    function getTokenURI(uint256 _tokenId)
        external
        view
        returns (string memory)
    {
        return tokenURIs[_tokenId];
    }
}