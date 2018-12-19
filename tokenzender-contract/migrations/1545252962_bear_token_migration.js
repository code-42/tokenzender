// *{timestamp}_bear_token_migration.js*

let BearToken = artifacts.require("./BearToken.sol");  
  
module.exports = function(deployer) {  
  deployer.deploy(BearToken);  
};
