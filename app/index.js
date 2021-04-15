const Web3 = require('web3');
let web3 = new Web3('ws://localhost:9545');
web3.eth.getChainId().then(function(chainId){
	console.log(chainId);
});
