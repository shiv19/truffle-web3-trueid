const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

let web3;
let contractInstance;

window.getProvider = function(mnemonic) {
    return new HDWalletProvider(mnemonic, "http://192.168.0.105:9545");
}

window.initWeb3 = function(mnemonic) {
    const provider = window.getProvider(mnemonic);
    web3 = new Web3(provider);

    const contractInstance = new web3.eth.Contract([
        {
            "constant": true,
            "inputs": [],
            "name": "last_completed_migration",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "completed",
                    "type": "uint256"
                }
            ],
            "name": "setCompleted",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "new_address",
                    "type": "address"
                }
            ],
            "name": "upgrade",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ], '0x8cdaf0cd259887258bc13a92c0a6da92698644c0');

    return new Promise((resolve, reject) => {
        web3.eth.accounts[0].then((account) => {
            resolve(account);
        })
    });
}


