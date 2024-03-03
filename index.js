// index.js
require('dotenv').config();
const Web3 = require('web3');
const axios = require('axios');
const Big = require('big.js');
const etherscanApi = require('etherscan-api').init(process.env.ETHERSCAN_API_KEY);

class WalletInsights {
    constructor(web3Provider, etherscanApiKey) {
        this.web3 = new Web3(web3Provider);
        this.etherscan = etherscanApi.init(etherscanApiKey);
    }

    async getBalance(walletAddress) {
        const balanceWei = await this.web3.eth.getBalance(walletAddress);
        return this.web3.utils.fromWei(balanceWei, 'ether');
    }

    async getTransactionCount(walletAddress) {
        return await this.web3.eth.getTransactionCount(walletAddress);
    }

    async getGasSpent(walletAddress) {
        const transactions = await this.etherscan.account.txlist(walletAddress, 1, 'latest', 1, 10000, 'desc');
        let totalGas = new Big(0);
        transactions.result.forEach(tx => {
            const gasUsed = new Big(tx.gasUsed);
            const gasPrice = new Big(tx.gasPrice);
            totalGas = totalGas.plus(gasUsed.times(gasPrice));
        });
        return this.web3.utils.fromWei(totalGas.toString(), 'ether');
    }
}

module.exports = WalletInsights;
