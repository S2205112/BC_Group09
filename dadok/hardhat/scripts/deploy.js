const hre = require("hardhat");
const fs = require('fs');

async function deployCredentialContract() {
    const [deployer] = await hre.ethers.getSigner();
    console.log("Deploying Credential contract with the account:", deployer.address);
 
  const CredentialFactory = await hre.ethers.getContractFactory("Credential");
  
  const deployedCredentialContract = await CredentialFactory.deploy();

  const deploymentInfo = `Deployer Address: ${deployer.address}\nCredential Factory Address: ${deployedCredentialContract.address}`;
  console.log(`Credential Factory Address deployed: ${deployedCredentialContract.address}`);
  fs.writeFileSync('deploymentCredentialInfo.txt', deploymentInfo);

  return deployedCredentialContract;

}

async function deployCredentialNFTContract(CredentialFactory) {

    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying Credential system contract with the account:", deployer.address);
  
    const CredentialNFTContract = await hre.ethers.getContractFactory("CredentialNFT");
    
    const deployedCredentialNFTContract = await CredentialNFTContract.deploy(CredentialFactory.address);
  
    const deploymentInfo = `Deployer Address: ${deployer.address}\nElectionNFT Contract Address: ${deployedCredentialNFTContract.address}`;
    console.log(`ElectionNFT Contract Address deployed: ${deployedCredentialNFTContract.address}`);
    fs.writeFileSync('deploymentInfoNFT.txt', deploymentInfo);
  
    await CredentialFactory.setCredentialNFTContract(deployedCredentialNFTContract.address);

 }

 async function main() {

    const CredentialFactory = await deployCredentialContract();
  
    await deployCredentialNFTContract(CredentialFactory);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });