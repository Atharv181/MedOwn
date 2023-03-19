// SPDX-License-Identifier: MIT 

pragma solidity 0.8.19;


contract addContent{


    mapping(address => bool) public hasReports;
    // bytes[] public IpfsHash;
    mapping(address => string[]) public Reports;


    function addReports(address _addr, string memory _IpfsHash) external {

    
        if(!hasReports[_addr]){
            hasReports[_addr] = true;
        }

         Reports[_addr].push(_IpfsHash);
     

    }



    function getAllReports(address _addr) external view returns(string[] memory){

        return Reports[_addr];
    }
}