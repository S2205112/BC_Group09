// Address and ABI of the Voting.sol contract
const contractAddress = '0x3039160294B2d5bB2F7FEC2d5Ff5EB450F31bad6'; //PÅ GÅNG
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "StudentAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newDuration",
				"type": "uint256"
			}
		],
		"name": "CredentialDurationChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "CredentialFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "CredentialReset",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startTimestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endTimestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "CredentialStarted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "candidateId",
				"type": "uint256"
			}
		],
		"name": "VoteCast", //KOLLA PÅ DENNA 
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "students",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "numberOfCredentials",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newDuration",
				"type": "uint256"
			}
		],
		"name": "changeCredentialDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkCredentialPeriod",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialFinalized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialNFTContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialStarted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialTimer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialTitle",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "eligibleStudents",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endCredential",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "generateMetadata",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "credentialID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
				],
				"internalType": "struct Credential.CredentialMetadata",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	/* {
		"inputs": [],
		"name": "getWinnerInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "candidateID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "numberOfVotes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "electionID",
						"type": "uint256"
					}
				],
				"internalType": "struct Voting.Winner",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, */
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_participant",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			}
		],
		"name": "mintResult", //KOLLA CONTRACTEN
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			}
		],
		"name": "mintResultNFTs", //KOLLA CONTRACTEN
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view", //KOLLA
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_eligibleStudent",
				"type": "address"
			}
		],
		"name": "registerStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_eligibleStudents",
				"type": "address[]"
			}
		],
		"name": "registerStudents",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resetAllStudentStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resetCredential",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieveCredentials",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "numberOfCredentials",
						"type": "uint256"
					}
				],
				"internalType": "struct Student.NumberOfCredentials[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_credentialNFTContract",
				"type": "address"
			}
		],
		"name": "setCredentialNFTContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_credentialTitle",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_students",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "_credentialDuration",
				"type": "uint256"
			}
		],
		"name": "startCredentialPeriod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
    {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "voteTo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_voter",
				"type": "address"
			}
		],
		"name": "voterStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialEndTimeStamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialStartTimeStamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Address and ABI of the ElectionNFT contract
const credentialNFTAddress = '0x043661C9A659f465D7C01Ae7eAcdc6168f9cB061'; // HAR EJ, Address of the deployed ElectionNFT contract
const credentialNFTABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_credentialContractAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tokenURI",
				"type": "string"
			}
		],
		"name": "NFTMinted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialContractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "credentialId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getTokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			}
		],
		"name": "mintNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseTokenURI",
				"type": "string"
			}
		],
		"name": "setBaseTokenURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenIdCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const connectWalletMsg = document.querySelector("#connectWalletMessage");
const connectWalletBtn = document.querySelector("#connectWalletbutton");
const credentialStation = document.querySelector("#credentialStation");
const timerTime = document.querySelector("#time");
const timerMessage = document.querySelector("#timerMessage");
const mainBoard = document.querySelector("#mainBoard");
const gradeForm = document.querySelector("#gradeForm");
const grade = document.querySelector("#grade");
const gradeBtn = document.querySelector("#sendGrade");
const result = document.querySelector("#result");
const admin = document.querySelector("#admin");
const addStudentInput4 = document.querySelector("#addStudentInput4");
const specifyDuration = document.querySelector("#specifyDuration");
const startCredentialPeriodButton = document.querySelector("#startCredentialPeriodButton");
const addStudentInput = document.querySelector("#addStudentInput");
const addStudentButton = document.querySelector("#addStudentButton");
const resetBtn = document.querySelector("#resetCredentialButton");
const changeCredentialDurationInput = document.querySelector("#changeCredentialDurationInput");
const changeCredentialDurationButton = document.querySelector("#changeCredentialDurationButton");
const addStudentInputArray = document.querySelector("#addStudentInputArray");
const addStudentButtonArray = document.querySelector("#addStudentButtonArray");
const connectWalletMessageSpan = document.querySelector("#connectWalletMessageSpan");
const generateAndUploadMetadataButton = document.querySelector("#generateAndUploadMetadataButton");

let contract;
let signer;
let credentialNFTContract;
let metadata;

// Function to initialize provider, signer and contract
function initializeProvider() {
    // Create a new Web3Provider with the window.ethereum object
    provider = new ethers.providers.Web3Provider(window.ethereum, 1311);

    // Request user accounts and set up the signer and contract
    return provider.send("eth_requestAccounts", []).then(() => {
        return provider.listAccounts().then((accounts) => {
            signer = provider.getSigner(accounts[0]);
            contract = new ethers.Contract(contractAddress, contractABI, signer);
        });
    });
}

// Function to connect Metamask
async function connectToWallet() {
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.providers.Web3Provider(window.ethereum, 1311);

        provider.send("eth_requestAccounts", []).then(() => {
            console.log("Accounts requested");

            provider.listAccounts().then((accounts) => {
                console.log("List of accounts:", accounts);

                signer = provider.getSigner(accounts[0]);
                contract = new ethers.Contract(contractAddress, contractABI, signer);

                console.log("Signer and Contract set up");

                // Update UI elements and display messages
                connectWalletBtn.textContent = "Connected";
                connectWalletBtn.style.backgroundColor = "#019B83ff"; // Change the background color to light green

                // Display address connected
                connectWalletMessageSpan.innerHTML = `${accounts[0]}`;
                getCredentialID();
                fetchCredentialTitle();
                                
            });
        });

        credentialStation.style.display = "block";
    } catch (error) {
        console.error(error);
        console.log("Error connecting to Metamask. Please make sure it's installed and unlocked.");
    }
}

// Add an event listener to the connectWalletBtn
connectWalletBtn.addEventListener("click", connectToWallet);

// Function to toggle admin panel visibility
function toggleAdminPanel() {
    const adminDiv = document.getElementById('admin');
    adminDiv.style.display = (adminDiv.style.display === 'block') ? 'none' : 'block';
}

// Function to toggle admin panel visibility
function toggleCredentialPanel() {
    const voteDiv = document.getElementById('credentialPanel');
    voteDiv.style.display = (voteDiv.style.display === 'block') ? 'none' : 'block';
}

// Event listener for admin panel button click
document.getElementById('adminPanelButton').addEventListener('click', async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length > 0) {
        const connectedAddress = accounts[0];
        const ownerAddress = await contract.owner();

        if (connectedAddress.toLowerCase() === ownerAddress.toLowerCase()) {
            toggleAdminPanel();
            if (document.getElementById('credentialPanel').style.display === 'block') {
                toggleCredentialPanel();
            }
        } else {
            alert("You are not the administrator of this credential session.");
        }
    } else {
        alert("Please connect with administrator wallet address.");
    }
});

// Event listener for vote panel button click
document.getElementById('credentialPanelButton').addEventListener('click', () => {
    toggleCredentialPanel();
    if (document.getElementById('admin').style.display === 'block') {
        toggleAdminPanel();
    }
    displayStudents();
    showTimer();
});

// Function to fetch and display the election title
async function fetchCredentialTitle() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 1311);

    try {
        await provider.send("eth_requestAccounts", []);

        const accounts = await provider.listAccounts();

        const signer = provider.getSigner(accounts[0]);
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        
        const title = await contract.credentialTitle();
        console.log('Credential Title:', title);

        document.getElementById('courseTitleSpan').textContent = title;
    } catch (error) {
        console.error('Error fetching credential title:', error);
        // Handle the error appropriately, e.g., display a default title or show an error message
    }
}

// Function to call the election ID
async function getCredentialID() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 1311);

    try {
        await provider.send("eth_requestAccounts", []);

        const accounts = await provider.listAccounts();

        const signer = provider.getSigner(accounts[0]);
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        const startTimestamp = await contract.credentialStartTimeStamp();
        if (startTimestamp.toNumber() === 0) {
            document.getElementById('credentialID').textContent = "Not started yet";
            return;
        }

        const credentialID = await contract.credentialID();
        console.log('Credential ID:', credentialID.toString());

        document.getElementById('credentialID').textContent = credentialID.toString();
    } catch (error) {
        console.error('Error:', error);
        const errorMessage = "Error generate metadata: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
}

// Function to set grade
gradeBtn.addEventListener("click", async () => {
    try {
        const studentId = grade.value;
        await contract.voteTo(studentId);
        console.log("Grade cast successfully!");
    } catch (error) {
        console.error(error);
        console.log("Error casting grade: " + error.message);
        const errorMessage = "Error casting grade: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
});

// Function to display main voting board with candidate and timer
async function displayStudents() {
    if (contract) {
        const students = await contract.retrieveCredentials();
        const studentBoard = document.querySelector("#studentBoard");
        const rows = studentBoard.querySelectorAll("tr");

        for (let i = 1; i < rows.length; i++) {
            studentBoard.removeChild(rows[i]);
        }

        if (students.length === 0) {
            const noStudentsRow = document.createElement("tr");
            noStudentsRow.innerHTML = `
        <td colspan="3">No students yet</td>
      `;
            studentBoard.appendChild(noStudentsRow);
        } else {
            students.forEach(student => {
                const row = document.createElement("tr");
                row.innerHTML = `
            <th style="word-break: break-all;">${student.id || "No ID yet"}</th>
            <th style="word-break: break-all;">${student.name || "No name yet"}</th>
            <th style="word-break: break-all;">${student.numberOfCredentials || "No grade yet"}</th>
            <th><button class="credentialBtnRow">Pass</button></th>
        `;
                studentBoard.appendChild(row);

                const credentialRowButton = row.querySelector('.credentialBtnRow');
                credentialRowButton.addEventListener('click', async () => {
                    try {
                        const studentId = student.id;
                        await contract.voteTo(studentId);
                        console.log("Grade cast successfully!");
                    } catch (error) {
                        console.error(error);
                        console.log("Error casting grade: " + error.message);
                        const errorMessage = "Error casting grade: " + extractErrorMessage(error);
                        console.log(errorMessage);
                        alert(errorMessage);

                    }
                });
                getCredentialID();
            });
        }
    }
}

// Event listening button to Display Candidate
showStudentList.addEventListener("click", async () => {
    try {

        displayStudents();
        console.log("display successfully!");

    } catch (error) {
        console.error(error);
        console.log("Error display: " + error.message);
    }
});

// Function to check if account is already connected
async function checkAccountConnection() {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            connectWalletBtn.textContent = "Connected";
            connectWalletBtn.style.backgroundColor = "var(--persian-green)";
            credentialStation.style.display = "block";
            connectWalletMessageSpan.innerHTML = `${accounts[0]}`;


        } else {
            connectWalletMessageSpan.textContent = "Click connect button please";

            // Account is not connected
            // Wait for the user to connect the wallet
        }
    } catch (error) {
        console.error(error);
        alert("Error checking account connection. Please make sure Metamask is installed and unlocked.");
    }
}

// Function to update the timer message
function updateTimerMessage(seconds) {
    const timerMessage = document.getElementById("time");
    timerMessage.textContent = seconds;
    timerMessage.innerHTML = `<span id="time">${seconds}</span> left`;
}

// Function to call the timer value
async function showTimer() {
    try {
        let secondsLeft = await contract.credentialTimer();
        console.log("Seconds left:", secondsLeft);
        let formattedDuration = formatDuration(secondsLeft); // <-- Corrected this line
        console.log("Formatted Duration:", formattedDuration);
        updateTimerMessage(formattedDuration);

        // ...
    } catch (error) {
        console.error("Error:", error); // Added console.error
        // Handle errors
    }
}

// Function to format the timer value in more readeable values
function formatDuration(seconds) {
    let years = Math.floor(seconds / (60 * 60 * 24 * 365));
    let days = Math.floor((seconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24));
    let hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((seconds % (60 * 60)) / 60);
    let remainingSeconds = seconds % 60;

    let result = "";

    if (years > 0) {
        result += years + (years === 1 ? " year" : " years") + " ";
    }

    if (days > 0) {
        result += days + (days === 1 ? " day" : " days") + " ";
    }

    if (hours > 0) {
        result += hours + (hours === 1 ? " h" : " h") + " ";
    }

    if (minutes > 0) {
        result += minutes + (minutes === 1 ? " min" : " min") + " ";
    }

    if (remainingSeconds > 0 || result === "") { // Added condition to always show seconds
        result += remainingSeconds + (remainingSeconds === 1 ? " s" : " s");
    }

    return result.trim();
}

// Function to start the election
startCredentialButton.addEventListener("click", async () => {
    try {

        const credentialTitle = document.querySelector("#credentialTitleInput").value;

        const students = [
            addStudentInput.value,
            addStudentInput2.value,
            addStudentInput3.value,
            ...addStudentInput4.value.split(",")
        ].filter(Boolean);
        console.log(students);

        const credentialDuration = specifyDuration.value;

        const provider = new ethers.providers.Web3Provider(window.ethereum, 1311);


        provider.send("eth_requestAccounts", []).then(() => {

            provider.listAccounts().then((accounts) => {
                console.log("List of accounts:", accounts);

                signer = provider.getSigner(accounts[0]);
                contract = new ethers.Contract(contractAddress, contractABI, signer);

            });
        });

        await contract.startCredential(credentialTitle, students, credentialDuration);
        console.log("Credential is starting, wait for blockchain confirmation");
    } catch (error) {
        console.error(error);
        console.log("Error starting the election: " + error.message);
        const errorMessage = "Error starting the election: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
});

// Function to change election duration
changeCredentialDurationButton.addEventListener("click", async () => {
    try {
        const duration = changeCredentialDurationInput.value;
        await contract.changeCredentialDuration(duration);
        console.log("Duration changed successfully!");
    } catch (error) {
        const errorMessage = "Error change duration: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
});

// Function to reset Election
resetBtn.addEventListener("click", async () => {
    try {
        await contract.resetCredential();
        console.log("Reset successfully!");
    } catch (error) {
        console.error(error);
        console.log("Error reseting: " + error.message);
        const errorMessage = "Error reseting: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
});

// Function to add candidate after election start but before anyone voted
addStudentButton.addEventListener("click", async () => {
    try {
        const studentName = addStudentInput.value;
        await contract.addStudent(studentName);
        console.log("Added successfully!");
    } catch (error) {
        console.error(error);
        console.log("Error adding student: " + error.message);
        const errorMessage = "Error adding student: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
});

// Aim to provide usefull 'Alert' error message
function extractErrorMessage(error) {
    const match = /"execution reverted: ([^"]*)/.exec(error.message);
    if (match && match.length > 1) {
        return match[1];
    }
    return "Unknown error";
}

// Event listening election end
endCredentialButton.addEventListener("click", async () => {
    try {
        await contract.endCredential();
        console.log("Credential ending in progress and called to the blockchain");
    } catch (error) {
        // console.error(error);
        const errorMessage = "Error ending the credential: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
});

// Function to connect to the ElectionNFT contract
async function connectToCredentialNFTContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 1311);

    provider.send("eth_requestAccounts", []).then(() => {

        provider.listAccounts().then((accounts) => {

            signer = provider.getSigner(accounts[0]);
            credentialNFTContract = new ethers.Contract(credentialNFTAddress, credentialNFTABI, signer);

            console.log("CredentialNFT Contract connected");
        });
    });
}

// Function to mint the results as an NFT by interacting with ElectionNFT contract
async function mintResultNFTs(tokenURI) {
    try {
        // Assuming you've already set up the connection to the Election contract and the ElectionNFT contract

        const ListOfCredentials = await contract.ListOfCredentials(); // Assuming ListOfVoters is a public state variable
        for (let i = 0; i < ListOfCredentials.length; i++) {
            const studentAddress = ListOfCredentials[i];
            const isEligible = await contract.eligibleStudents(studentAddress);

            if (isEligible) {
                await credentialNFTContract.mintNFT(studentAddress, tokenURI);
                console.log(`NFT minted for voter at address ${studentAddress}`);
            }
        }
    } catch (error) {
        console.error(error);
        console.log("Error minting NFT: " + error.message);
        const errorMessage = "Error minting NFT: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
}

// Event listening to registering of voter
addStudentButtonArray.addEventListener("click", async () => {
    try {
        const studentAddresses = addStudentInputArray.value.split(',').map(address => address.trim());
        await contract.registerStudents(studentAddresses);
        console.log(`Students registered successfully!`);
    } catch (error) {
        console.error(error);
        console.log(`Error registering students: ${error.message}`);
        const errorMessage = "Error registering students: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
});

// Function to generate the metadata of the NFT
async function generateAndUploadMetadata2() {
    try {
        const title = await contract.credentialTitle();
        const startTimestamp = await contract.credentialStartTimeStamp();
        const endTimestamp = await contract.credentialEndTimeStamp();
        
        metadata = {
            credentialTitle: title,
            credentialID: parseInt(credentialID._hex, 16),
            numberOfCredentials: parseInt(numberOfCredentials._hex, 16),
            startTime: parseInt(startTimestamp._hex, 16),
            endTime: parseInt(endTimestamp._hex, 16)
        };

        console.log("Metadata generated successfully!", metadata);

        // Convert metadata to string and set it as the tokenURI
        const tokenURI = JSON.stringify(metadata);

        // Assuming you have a function to mint NFTs, update it to use tokenURI
        await contract.mintResultNFTs(tokenURI);

        console.log("NFT mint initialized, work in progress...");
    } catch (error) {
        console.error('Error:', error);
        const errorMessage = "Error generate metadata: " + extractErrorMessage(error);
        console.log(errorMessage);
        alert(errorMessage);
    }
}

// Event mint button clicked
generateAndUploadMetadataButton.addEventListener("click", async () => {
    await getCredentialID();
    console.log("Button clicked!");
    generateAndUploadMetadata2();
    console.log("Metadata generated successfully!", metadata);
});


  