// test/CredentialNFT.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CredentialNFT", function () {
  let CredentialNFT;
  let credentialNFT;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    CredentialNFT = await ethers.getContractFactory("CredentialNFT");
    credentialNFT = await CredentialNFT.deploy();
  });

  it("should mint a new NFT", async function () {
    await credentialNFT.connect(owner).mint(addr1.address, 1);
    const ownerOfToken = await credentialNFT.ownerOf(1);
    expect(ownerOfToken).to.equal(addr1.address);
  });

  it("should not allow non-admin to mint NFT", async function () {
    await expect(
      credentialNFT.connect(addr1).mint(addr1.address, 2)
    ).to.be.revertedWith("Only admin can mint tokens");
  });
});