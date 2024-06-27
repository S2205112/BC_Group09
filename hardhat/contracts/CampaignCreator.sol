pragma solidity ^0.8.22;

import "./CrowdCollab.sol";

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