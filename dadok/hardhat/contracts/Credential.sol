// contracts/Credential.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Credential {
    struct Student {
        uint id;
        string name;
        uint grade;
        bool exists;
    }

    mapping(uint => Student) public students;
    uint public studentCount;

    event StudentAdded(uint indexed id, string name);
    event StudentRemoved(uint indexed id);
    event GradeUpdated(uint indexed id, uint grade);

    function addStudent(uint _id, string memory _name) public {
        require(!students[_id].exists, "Student already exists");
        students[_id] = Student(_id, _name, 0, true);
        studentCount++;
        emit StudentAdded(_id, _name);
    }

    function removeStudent(uint _id) public {
        require(students[_id].exists, "Student does not exist");
        delete students[_id];
        studentCount--;
        emit StudentRemoved(_id);
    }

    function setGrade(uint _id, uint _grade) public {
        require(students[_id].exists, "Student does not exist");
        students[_id].grade = _grade;
        emit GradeUpdated(_id, _grade);
    }
}