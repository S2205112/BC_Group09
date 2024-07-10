// test/Credential.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Credential", function () {
  let Credential;
  let credential;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    Credential = await ethers.getContractFactory("Credential");
    credential = await Credential.deploy();
  });

  it("should add a student", async function () {
    await credential.addStudent(1, "Alice");
    const student = await credential.students(1);
    expect(student.name).to.equal("Alice");
    expect(student.exists).to.equal(true);
  });

  it("should set and get grade", async function () {
    await credential.addStudent(1, "Alice");
    await credential.setGrade(1, 85);
    const student = await credential.students(1);
    expect(student.grade).to.equal(85);
  });

  it("should remove a student", async function () {
    await credential.addStudent(1, "Alice");
    await credential.removeStudent(1);
    const student = await credential.students(1);
    expect(student.exists).to.equal(false);
  });

  it("should emit StudentAdded event", async function () {
    await expect(credential.addStudent(1, "Alice"))
      .to.emit(credential, "StudentAdded")
      .withArgs(1, "Alice");
  });

  it("should emit GradeUpdated event", async function () {
    await credential.addStudent(1, "Alice");
    await expect(credential.setGrade(1, 85))
      .to.emit(credential, "GradeUpdated")
      .withArgs(1, 85);
  });

  it("should emit StudentRemoved event", async function () {
    await credential.addStudent(1, "Alice");
    await expect(credential.removeStudent(1))
      .to.emit(credential, "StudentRemoved")
      .withArgs(1);
  });
});
