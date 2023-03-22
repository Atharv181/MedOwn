// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, ERC721URIStorage, Ownable {

    uint256 private _totalSupply;
    string[] public minted;
    

    constructor() ERC721("HEALTH NFT", "NFT") {}

    function mint(string memory _tokenURI, uint256 _tokenId, string memory IpfsHash) public {
        
        _safeMint(msg.sender, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
        _totalSupply++;
        minted.push(IpfsHash);
        
    }

     function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }


      function getAllMinted( ) external view returns(string[] memory){

         return minted;
    }

     function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}



