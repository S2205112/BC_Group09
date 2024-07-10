# Dadok -  Decentralized Academic Degree Operation Keeper 

## Blockchain based DApp for verifying academic credentials

Dadok is a decentralized application (DApp) designd to simplify and secure the verification process of academic credentials using blockchain technology. By recording academic degrees and credentials on the blockchain, individuals and institutions can easily verify educational achivements. This approach ensures the authenticity and integrity of academic records, making the verification process more efficient and trustworthy. 

## Functionality
Our DApp creates the possibility for universities and academic institutions to create, store and display students accomplished achevements. The DApp visualises the gradings for the course Blockchain with ethereum and solidity, the examinor grade the students who have completed the course by making a transaction on the Ethereum blockchain. The credentials are automatically verified and published on the blockchain in real time for access. This will ensure the trustworthiness and integrety of the grades. All transactions and results are immuatable and verifiable, making them less vulnerable to fraud and manipualtion. 

## Usage 
Contains a local test folder for local use to run the tests. See file: Credential.test.js 

Firstly, the Dadok DApp must be installed correctly and configured accordingly to the description in the "Installation and configuration" section. Once the application is properly set up, a administator can add a student by entering the relevant information details into the DApp. After a student is added, the administrator can cast a credential by using their wallet software and sending a transaction to the smart contract. The credentials are them automatically registred and published. 

## Installation and configuration
To interact with Dadok, you need an Ethereum compatible wallet software such as MetaMask. You can deploy the application using a Proof of Authority (POA) network. Additionally is the Node, npm and Hardhat framework required. 

To install and configure Dadok:
1. Clone the repository `git clone <repository_url>`
2. Change to the directory `cd dadok/hardhat` and enter `npm install hardhat --save-dev`
3. In the same file path enter `npm install dotenv`
4. Configure Hardhat by entering: 
- The private key of your blockchain network
- The URL of your blockchain network 
- The ChainID of your blockchain network 
5. Run `npx hardhat test` 
6. Run `npx hardhat run scripts/deploy.js --network <`<const key>`> of your blockchain network`
7. Run the application by switching to the directory `cd dadok/frontend` and enter `npm start`


## Dependencies 

The project Dadok uses the following dependencies: 

Frontend
- `ethers`: "^6.13.1"
- `express`: "^4.19.2"

Backend / Hardhad
- `@nomicfoundation/hardhat/tool-box`: "^5.0.0"
- `hardhat`: "^2.22.6"

Backend
- `@openzepplin/contracts`: "^5.0.2"


## Release notes 
Dadok is released in it´s beta version, be aware that that functionalities are not fully developed.

## Authors and contributors 
Dadok is written by Beata Jacobsson, Linnea Korneliussen, Celina Linnerblom Persson & Clara Hansson as a part of the course Blockchains with Ethereum & Solidity at Hochschule München summer semester 2024. 
