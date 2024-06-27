pragma solidity ^0.8.22;

contract CampaignCreator {
    // Declare variables
    address[] public campaigns;

    // Define functions
    /**
     * @dev Create a new campaign
     * @param minContribution The minimum contribution required to participate in the campaign
     * @param description Description of the campaign
     */
    function createCampaign(uint256 minContribution, string memory description) public {
        address newCampaign = address(new CrowdCollab(msg.sender, minContribution, description));
        campaigns.push(newCampaign);
    }

    /**
     * @dev Get all deployed campaigns
     * @return campaigns List of deployed campaign addresses
     */
    function getDeployedCampaigns() public view returns (address[] memory) {
        return campaigns;
    }
}


// ------------------------------------- EXAMPLE FROM WEBSITE 
contract CrowdCollab {
    // Define data structures
    struct Request {
        string description;
        uint256 amount;
        address payable recipient;
        bool complete;
        address[] approvals;
    }

    // Declare variables
    address public manager;
    uint256 public minimumContribution;
    string public campaignDescription;
    mapping(address => bool) public supporters;
    uint256 public numberSupporters;
    Request[] public requests;

    // Define modifiers
    modifier managerOnly() {
        require(msg.sender == manager, "Only manager can call this function");
        _;
    }

    modifier supporterOnly() {
        require(supporters[msg.sender], "Only supporters can call this function");
        _;
    }

    // Define constructor
    constructor(address creator, uint256 minContribution, string memory description) {
        manager = creator;
        minimumContribution = minContribution;
        campaignDescription = description;
    }

    // Define functions
    function contribute() public payable {
        require(msg.value > minimumContribution, "Contribution must be greater than minimum contribution");
        supporters[msg.sender] = true;
        numberSupporters++;
    }

    // Add more functions as needed...
}