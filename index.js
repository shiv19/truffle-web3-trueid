const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

let web3;
let contractInstance;

window.getProvider = function(mnemonic) {
    return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/rNW12OZ3OoXoX1Uhcoig");
};

window.initWeb3 = function(mnemonic) {
    const provider = window.getProvider(mnemonic);
    web3 = new Web3(provider);

    const contractInstance = new web3.eth.Contract(
        [
            {
                constant: true,
                inputs: [],
                name: "getUsers",
                outputs: [{ name: "", type: "address[]" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "government",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "uint256" }],
                name: "userIndexes",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "userAddress", type: "address" }],
                name: "isIndian",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "providerAddress", type: "address" },
                    { name: "name", type: "string" },
                    { name: "contactAddress", type: "string" },
                    { name: "email", type: "string" }
                ],
                name: "editProvider",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "providerAddress", type: "address" }],
                name: "getProvider",
                outputs: [
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" }
                ],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "providerAddress", type: "address" }],
                name: "deleteProvider",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "userAddress", type: "address" }],
                name: "deleteUser",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "userAddress", type: "address" }],
                name: "getUser",
                outputs: [
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" }
                ],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "userAddress", type: "address" },
                    { name: "fullName", type: "string" },
                    { name: "fatherName", type: "string" },
                    { name: "motherName", type: "string" },
                    { name: "contactAddress", type: "string" },
                    { name: "gender", type: "string" },
                    { name: "birthdate", type: "string" },
                    { name: "country", type: "string" }
                ],
                name: "editUser",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "getID",
                outputs: [
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" }
                ],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "uint256" }],
                name: "providerIndexes",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "userAddress", type: "address" }],
                name: "getUserDetails",
                outputs: [
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" },
                    { name: "", type: "string" }
                ],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "getProviders",
                outputs: [{ name: "", type: "address[]" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                inputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "constructor"
            }
        ],
        "0x62a0993B649B3ab0388e17d5094B67fde6015e54"
    );

    return new Promise((resolve, reject) => {
        web3.eth.accounts[0].then(account => {
            resolve(account);
        });
    });
};
