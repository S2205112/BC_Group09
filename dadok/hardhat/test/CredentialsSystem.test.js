const { expect } = require("chai");

describe("Credential Contract", function () {
    let Credential;
    let credential;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        const CredentialFactory = await ethers.getContractFactory("Credential");
        credential = await CredentialFactory.deploy();
        Credential = await CredentialFactory.connect(owner);
    });

    it("should have the correct owner after deployment", async function () {
        expect(await credential.owner()).to.equal(owner.address);
    });

    it("should start a credential period with the correct parameters", async function () {
        const credentialTitle = "Test credential";
        const students = ["Student1", "Student2"];
        const credentialDuration = 10;

        await credential.startCredentialPeriod(credentialTitle, students, credentialDuration);

        expect(await credential.credentialStarted()).to.be.true;
        expect(await credential.credentialStartTimeStamp()).to.not.equal(0);
        expect(await credential.credentialEndTimeStamp()).to.not.equal(0);
        expect(await credential.credentialTitle()).to.equal(credentialTitle);
    });

    it("should handle credentials grading and acknowledgment", async function () {
        const credentialTitle = "Test credential";
        const students = ["Student1", "Student2"];
        const credentialDuration = 10;
        await credential.startCredentialPeriod(credentialTitle, students, credentialDuration);

        await credential.registerStudent(addr1.address);
        await credential.registerStudent(addr2.address);
        await credential.registerStudent(owner.address);

        await credential.connect(addr1).grantCredential(0);
        await credential.connect(addr2).grantCredential(0);
        await credential.connect(owner).grantCredential(0);

        const student0 = (await credential.retrieveCredentials())[0];
        const credentialCountStudent0 = student0.numberOfCredentials;

        expect(credentialCountStudent0).to.equal(3);
    });

    it("should end the credential period correctly", async function () {
        const credentialTitle = "Test credential";
        const students = ["Student1", "Student2"];
        const credentialDuration = 10;
        await credential.startCredentialPeriod(credentialTitle, students, credentialDuration);

        await credential.endCredential();

        expect(await credential.credentialStarted()).to.be.false;
        expect(await credential.credentialFinalized()).to.be.true;
    });

    it("should reset the credential process correctly", async function () {
        const credentialTitle = "Test credential";
        const students = ["Student1", "Student2"];
        const credentialDuration = 10;
        await credential.startCredentialPeriod(credentialTitle, students, credentialDuration);

        await credential.endCredential();
        await credential.resetCredential();

        expect(await credential.credentialStarted()).to.be.false;
        expect(await credential.credentialFinalized()).to.be.false;
        expect(await credential.credentialTitle()).to.equal("No title yet");
        expect((await credential.retrieveCredentials()).length).to.equal(0);
    });

    it("should transfer ownership correctly", async function () {
        await credential.transferOwnership(addr1.address);
        expect(await credential.owner()).to.equal(addr1.address);
    });

    it("should add a new student correctly", async function () {
        const credentialTitle = "Test credential";
        const students = ["Student1"];
        const credentialDuration = 10;
        await credential.startCredentialPeriod(credentialTitle, students, credentialDuration);

        await credential.addStudent("Student2");

        const allStudents = await credential.retrieveCredentials();
        expect(allStudents.length).to.equal(2);
        expect(allStudents[1].name).to.equal("Student2");
    });

    it("should register multiple students correctly", async function () {
        await credential.registerStudents([addr1.address, addr2.address]);

        expect(await credential.credentialStudent(addr1.address)).to.be.true;
        expect(await credential.credentialStudent(addr2.address)).to.be.true;
    });

    it("should generate correct metadata after credential period", async function () {
        const credentialTitle = "Test credential";
        const students = ["Student1", "Student2"];
        const credentialDuration = 10;
        await credential.startCredentialPeriod(credentialTitle, students, credentialDuration);

        await credential.endCredential();

        const metadata = await credential.generateMetadata();
        expect(metadata.credentialID).to.equal(1);
        expect(metadata.title).to.equal(credentialTitle);
        expect(metadata.startTime).to.not.equal(0);
        expect(metadata.endTime).to.not.equal(0);
    });
});