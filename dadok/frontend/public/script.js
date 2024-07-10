const contractAddress = "0x09EbF0F46F0644f73fb67807279816E4F343837f";

const contractABI = [
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
          "internalType": "uint256",
          "name": "grade",
          "type": "uint256"
        }
      ],
      "name": "GradeUpdated",
      "type": "event"
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
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "StudentRemoved",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
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
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "removeStudent",
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
        },
        {
          "internalType": "uint256",
          "name": "_grade",
          "type": "uint256"
        }
      ],
      "name": "setGrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "studentCount",
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
          "name": "grade",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "exists",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

const addStudentFrm = document.querySelector("#addStudentForm");
const removeStudentFrm = document.querySelector("#removeStudentForm");
const setGradeFrm = document.querySelector("#setGradeForm");
const connectWalletMsg = document.querySelector("#connectWalletMessage");
const connectWalletBtn = document.querySelector("#connectWalletbutton");
const connectWalletMessageSpan = document.querySelector("#connectWalletMessageSpan");
const connectWalletFrm = document.querySelector("#connectWalletForm");

let signer;
let credentialContract;
let provider;


async function initializeProvider() {
  provider = new ethers.providers.Web3Provider(window.ethereum, 1311);
  await provider.send("eth_requestAccounts", []);
  const accounts = await provider.listAccounts();
  signer = provider.getSigner(accounts[0]);
  credentialContract = new ethers.Contract(contractAddress, contractABI, signer);
}

async function connectToWallet() {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    await initializeProvider();
    connectWalletBtn.textContent = "Connected";
    connectWalletBtn.style.backgroundColor = "#019B83ff";
    const accounts = await provider.listAccounts();
    connectWalletMessageSpan.innerHTML = `${accounts[0]}`;
    credentialStation.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

connectWalletBtn.addEventListener("click", connectToWallet);

async function getNextStudentId() {
  const studentCount = await credentialContract.studentCount();
  return studentCount.toNumber() + 1;
}

async function addStudent(name) {
  try {
    const id = await getNextStudentId();
    const tx = await credentialContract.addStudent(id, name);
    await tx.wait();
    console.log("Student added successfully:", tx);
  } catch (error) {
    console.error("Error adding student:", error);
    alert("Error adding student: " + error.message);
  }
}

async function removeStudent(id) {
  try {
    const tx = await credentialContract.removeStudent(id);
    await tx.wait();
    console.log("Student removed successfully:", tx);
  } catch (error) {
    console.error("Error removing student:", error);
    alert("Error removing student: " + error.message);
  }
}

async function setGrade(id, grade) {
  try {
    const tx = await credentialContract.setGrade(id, grade);
    await tx.wait();
    console.log("Grade set successfully:", tx);
  } catch (error) {
    console.error("Error setting grade:", error);
    alert("Error setting grade: " + error.message);
  }
}

async function getStudentById(id) {
  try {
    const student = await credentialContract.students(id);
    if (student.exists) {
      console.log(`Student ID: ${student.id}, Name: ${student.name}, Grade: ${student.grade}`);
      alert(`Student ID: ${student.id}, Name: ${student.name}, Grade: ${student.grade}`);
    } else {
      alert(`Student with ID ${id} does not exist.`);
    }
  } catch (error) {
    console.error("Error fetching student:", error);
    alert("Error fetching student: " + error.message);
  }
}


addStudentFrm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = addStudentFrm.querySelector("#studentName").value;
  await addStudent(name);
});

removeStudentFrm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = removeStudentFrm.querySelector("#studentId").value;
  await removeStudent(id);
});

setGradeFrm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = setGradeFrm.querySelector("#studentId").value;
  const grade = setGradeFrm.querySelector("#grade").value;
  await setGrade(id, grade);
});

const getStudentFrm = document.querySelector("#getStudentForm");
getStudentFrm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = getStudentFrm.querySelector("#fetchStudentId").value;
  await getStudentById(id);
});

