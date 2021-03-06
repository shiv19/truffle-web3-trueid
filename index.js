const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

let web3;
let contractInstance;
let userAddress;

window.getProvider = function(mnemonic) {
    return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/rNW12OZ3OoXoX1Uhcoig");
};

window.getIdCard = async function() {
    const user = {};
    const result = await contractInstance.methods.getID().call({"from": userAddress});
    user.address = userAddress;
    user.fullName = result[0];
    user.fatherName = result[1];
    user.motherName = result[2];
    user.contactAddress = result[3];
    user.gender = result[4];
    user.birthdate = result[5];
    user.country = result[6];

    return user;
};

window.initWeb3 = function(mnemonic) {
    const provider = window.getProvider(mnemonic);
    web3 = new Web3(provider);

    contractInstance = new web3.eth.Contract(
        [
            {
                "constant": true,
                "inputs": [],
                "name": "getUsers",
                "outputs": [{ "name": "", "type": "address[]" }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "government",
                "outputs": [{ "name": "", "type": "address" }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{ "name": "", "type": "uint256" }],
                "name": "userIndexes",
                "outputs": [{ "name": "", "type": "address" }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{ "name": "userAddress", "type": "address" }],
                "name": "isIndian",
                "outputs": [{ "name": "", "type": "bool" }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    { "name": "providerAddress", "type": "address" },
                    { "name": "name", "type": "string" },
                    { "name": "contactAddress", "type": "string" },
                    { "name": "email", "type": "string" }
                ],
                "name": "editProvider",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{ "name": "providerAddress", "type": "address" }],
                "name": "getProvider",
                "outputs": [
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{ "name": "providerAddress", "type": "address" }],
                "name": "deleteProvider",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{ "name": "userAddress", "type": "address" }],
                "name": "deleteUser",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{ "name": "userAddress", "type": "address" }],
                "name": "getUser",
                "outputs": [
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    { "name": "userAddress", "type": "address" },
                    { "name": "fullName", "type": "string" },
                    { "name": "fatherName", "type": "string" },
                    { "name": "motherName", "type": "string" },
                    { "name": "contactAddress", "type": "string" },
                    { "name": "gender", "type": "string" },
                    { "name": "birthdate", "type": "string" },
                    { "name": "country", "type": "string" }
                ],
                "name": "editUser",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getID",
                "outputs": [
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{ "name": "", "type": "uint256" }],
                "name": "providerIndexes",
                "outputs": [{ "name": "", "type": "address" }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{ "name": "userAddress", "type": "address" }],
                "name": "getUserDetails",
                "outputs": [
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" },
                    { "name": "", "type": "string" }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getProviders",
                "outputs": [{ "name": "", "type": "address[]" }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            }
        ],
        "0x2366dDe15F0dcD06f3604c05C029Fd6C0620a50F"
    );

    return new Promise((resolve, reject) => {
        web3.eth.accounts[0].then(account => {
            userAddress = accounts[0];
            resolve(account);
        });
    });
};
