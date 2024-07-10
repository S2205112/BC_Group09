// contracts/CredentialNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract CredentialNFT is ERC721Enumerable {
   address private _owner;
   uint public nextStudentID;
   uint public studentCount;
   mapping(uint => Student) public students;

   struct Student {
       uint id;
       string name;
       uint grade;
       bool exists;
   }

   event StudentAdded(uint indexed id, string name);
   event StudentRemoved(uint indexed id);
   event GradeUpdated(uint indexed id, uint grade);

   modifier onlyOwner() {
       require(msg.sender == _owner, "Caller is not the owner");
       _;
   }

   constructor() ERC721("CredentialNFT", "CNFT") {
       _owner = msg.sender;
       nextStudentID = 1;
       studentCount = 0;
   }

    function addStudent(string memory _name) public onlyOwner {
       students[nextStudentID] = Student(nextStudentID, _name, 0, true);
       emit StudentAdded(nextStudentID, _name);
       nextStudentID++;
       studentCount++;
   }

   function removeStudent(uint _id) public onlyOwner {
       require(students[_id].exists, "Student does not exist");
       delete students[_id];
       emit StudentRemoved(_id);
       studentCount--;
   }

  

   function setGrade(uint _id, uint _grade) public onlyOwner {
       require(students[_id].exists, "Student does not exist");
       students[_id].grade = _grade;
       emit GradeUpdated(_id, _grade);
   }

   function mintCredential(uint _id) public onlyOwner {
       require(students[_id].exists, "Student does not exist");
       _safeMint(_owner, _id);
   }

   function owner() public view returns (address) {
       return _owner;
   }
}


