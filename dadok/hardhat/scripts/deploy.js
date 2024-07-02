const hre = require("hardhat");
const fs = require('fs');

async function deployCredentialContract() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying Credential contract with the account:", deployer.address);
 
  const credentialContract = await hre.ethers.getContractFactory("Credential");
  
  const deployedCredentialContract = await credentialContract.deploy();

  const deploymentInfo = `Deployer Address: ${deployer.address}\nCredential Factory Address: ${deployedCredentialContract.address}`;
  console.log(`Credential Factory Address deployed: ${deployedCredentialContract.address}`);
  fs.writeFileSync("deploymentCredentialInfo.txt", deploymentInfo);

  return deployedCredentialContract;

}

async function deployCredentialNFTContract(credentialContract) {

    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying Credential system contract with the account:", deployer.address);
  
    const credentialNFTContract = await hre.ethers.getContractFactory("CredentialNFT");
    
    const deployedCredentialNFTContract = await credentialNFTContract.deploy(credentialContract.address);
  
    const deploymentInfo = `Deployer Address: ${deployer.address}\nCredentialNFT Contract Address: ${deployedCredentialNFTContract.address}`;
    console.log(`CredentialNFT Contract Address deployed: ${deployedCredentialNFTContract.address}`);
    fs.writeFileSync('deploymentInfoNFT.txt', deploymentInfo);
  
    await credentialContract.setCredentialNFTContract(deployedCredentialNFTContract.address);

 }

 async function main() {

    const credentialContract = await deployCredentialContract();
  
    await deployCredentialNFTContract(credentialContract);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });