const { ethers } = require("hardhat");
const fs = require('fs');

async function deployCredentialContract() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying Credential contract with the account:", deployer.address);
 
  const credentialContract = await ethers.getContractFactory("Credential");
  
  const deployedCredentialContract = await credentialContract.deploy();

  const deploymentInfo = `Deployer Address: ${deployer.address}\nCredential Factory Address: ${deployedCredentialContract.target}`;
  console.log(`Credential Factory Address deployed: ${deployedCredentialContract.target}`);
  fs.writeFileSync("deploymentCredentialInfo.txt", deploymentInfo);

  return deployedCredentialContract;
}

async function main() {
  try {
    const credentialContract = await deployCredentialContract();
    console.log("Deployment completed successfully!");
  } catch (error) {
    console.error("Error deploying contracts:", error);

    console.log("Deployment completed successfully!");
  } 
}

main();
