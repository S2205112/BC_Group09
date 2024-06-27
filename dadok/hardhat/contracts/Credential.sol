pragma solidity ^0.8.22;

import "./CredentialsSystem.sol";

contract Credential {
    // Owner's address
    address public credentialNFTContract;

    // Struct to represent a student
    struct Student {
        uint256 id;
        string name;
        uint256 numberOfCredentials;
    }

    // Array of students
    Student[] public students;

    // Credential ID
    uint256 public credentialID = 0;

    // Credential title
    string public credentialTitle;

    // Mapping to check if an address is a registered student
    mapping(address => bool) public credentialStudent;
    mapping(address => bool) public eligibleStudents;

    // Timestamps for credential period
    uint256 public credentialStartTimeStamp;
    uint256 public credentialEndTimeStamp;

    // Credential status flags
    bool public credentialStarted;
    bool public credentialFinalized;

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier credentialOngoing() {
        require(credentialStarted && !credentialFinalized, "Credential not ongoing");
        _;
    }

    // Events
    event CredentialStarted(address indexed owner, uint256 startTimestamp, uint256 endTimestamp, string title);
    event CredentialGranted(address indexed student, uint256 studentId);
    event StudentAdded(uint256 indexed id, string name);
    event CredentialDurationChanged(uint256 newDuration);
    event CredentialFinished(address indexed owner);
    event CredentialReset(address indexed owner);

    // Constructor to initialize the contract owner
    constructor() {
        owner = msg.sender;
    }

    // Function to start the credential period
    function startCredentialPeriod(string memory _credentialTitle, string[] memory _students, uint256 _credentialDuration) public onlyOwner {
        require(!credentialStarted, "Credential period is currently ongoing");
        require(!credentialFinalized, "Credential not yet reinitialized");

        // Increment credentialID
        credentialID += 1;

        // Clear existing students
        delete students;

        // Add new students
        for (uint256 i = 0; i < _students.length; i++) {
            students.push(Student({id: i, name: _students[i], numberOfCredentials: 0}));
            credentialStudent[address(uint160(i))] = true;
        }

        // Set the credential title
        credentialTitle = _credentialTitle;

        // Set timestamps and status
        credentialStarted = true;
        credentialStartTimeStamp = block.timestamp;
        credentialEndTimeStamp = block.timestamp + (_credentialDuration * 1 minutes);

        // Emit the event
        emit CredentialStarted(owner, credentialStartTimeStamp, credentialEndTimeStamp, credentialTitle);
    }

    // Function to grant a credential
    function grantCredential(uint256 _id) public credentialOngoing {
        require(credentialStudent[msg.sender], "You are not a registered student.");
        require(_id < students.length, "Invalid student ID");

        students[_id].numberOfCredentials++;
        
        emit CredentialGranted(msg.sender, _id);
    }

    // Function to retrieve all students
    function retrieveCredentials() public view returns (Student[] memory) {
        return students;
    }

    // Function to monitor the credential period time
    function credentialTimer() public view returns (uint256) {
        if (block.timestamp >= credentialEndTimeStamp) {
            return 0;
        }
        return (credentialEndTimeStamp - block.timestamp);
    }

    // Check if credential period is still ongoing
    function checkCredentialPeriod() public view returns (bool) {
        return credentialTimer() > 0;
    }

    // Reset all student status
    function resetAllStudentStatus() public onlyOwner {
        for (uint256 i = 0; i < students.length; i++) {
            students[i].numberOfCredentials = 0;
        }

        emit CredentialReset(owner);
    }

    // Completely resetting the entire credential process
    function resetCredential() public onlyOwner {
        require(!credentialStarted, "Credential is currently ongoing");

        // Reset student mappings
        for (uint256 i = 0; i < students.length; i++) {
            credentialStudent[address(uint160(i))] = false;
        }

        // Clear students array
        delete students;

        // Reset credential status and timers
        credentialStarted = false;
        credentialStartTimeStamp = 0;
        credentialEndTimeStamp = 0;
        credentialFinalized = false;

        // Reset the credential title to the default value
        credentialTitle = "No title yet";

        // Emit Credential Reset
        emit CredentialReset(owner);
    }

    function endCredential() public onlyOwner credentialOngoing {
        credentialStarted = false;
        credentialEndTimeStamp = block.timestamp;
        credentialFinalized = true;

        emit CredentialFinished(owner);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid new owner address");
        owner = newOwner;
    }

    function changeCredentialDuration(uint256 _newDuration) public onlyOwner credentialOngoing {
        require(_newDuration > 0, "Invalid duration");

        credentialEndTimeStamp = credentialStartTimeStamp + (_newDuration * 1 minutes);

        emit CredentialDurationChanged(_newDuration);
    }

    function addStudent(string memory _name) public onlyOwner credentialOngoing {
        students.push(Student({id: students.length, name: _name, numberOfCredentials: 0}));
        
        emit StudentAdded(students.length - 1, _name);
    }

    function registerStudent(address _eligibleStudent) public onlyOwner {
        credentialStudent[_eligibleStudent] = true;
        eligibleStudents[_eligibleStudent] = true;
    }

    function registerStudents(address[] memory _eligibleStudents) public onlyOwner {
        for (uint256 i = 0; i < _eligibleStudents.length; i++) {
            credentialStudent[_eligibleStudents[i]] = true;
            eligibleStudents[_eligibleStudents[i]] = true;
        }
    }

    // Function to set CredentialNFT contract address
    function setCredentialNFTContract(address _credentialNFTContract) public onlyOwner {
        credentialNFTContract = _credentialNFTContract;
    }

    struct CredentialMetadata {
        uint256 credentialID;
        string title;
        uint256 startTime;
        uint256 endTime;
    }

    function generateMetadata() public view returns (CredentialMetadata memory) {
        require(!credentialStarted, "Credential period is still ongoing");

        CredentialMetadata memory metadata = CredentialMetadata({
            credentialID: credentialID,
            title: credentialTitle,
            startTime: credentialStartTimeStamp,
            endTime: credentialEndTimeStamp
        });

        return metadata;
    }
}

