// contracts/Credential.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract Credential {

    struct Student {
        uint id;
        string name;
        uint grade;
        bool exists;
    }

    mapping(uint => Student) public students;
    uint[] public studentIds;
    mapping(uint => uint) public studentIndex;

    uint public studentCount;

    event StudentAdded(uint indexed id, string name);
    event StudentRemoved(uint indexed id);
    event GradeUpdated(uint indexed id, uint grade);

    function addStudent(uint _id, string memory _name) public {
        require(!students[_id].exists, "Student already exists");
        students[_id] = Student(_id, _name, 0, true);
        studentIndex[_id] = studentIds.length;
        studentIds.push(_id);
        studentCount++;
        emit StudentAdded(_id, _name);
    }

    function removeStudent(uint _id) public {
        require(students[_id].exists, "Student does not exist");
        uint index = studentIndex[_id];
        uint lastIndex = studentIds.length - 1;
        uint lastId = studentIds[lastIndex];
        studentIds[index] = lastId;
        studentIndex[lastId] = index;
        studentIds.pop();
        delete studentIndex[_id];
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

