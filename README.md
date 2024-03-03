# Web3 Wallet Insights

A Node.js module for crypto enthusiasts to gain deep insights into their Ethereum wallets. Analyze transactions, calculate portfolio balances, estimate gas fees, and more.

## Features

- Get wallet balance in ETH.
- Count transactions made by the wallet.
- Calculate total gas fees spent.

## Installation

```bash
npm install web3-wallet-insights

## Usage

const WalletInsights = require('web3-wallet-insights');
const insights = new WalletInsights('<WEB3_PROVIDER>', '<ETHERSCAN_API_KEY>');

async function main() {
    const balance = await insights.getBalance('<WALLET_ADDRESS>');
    console.log(`Balance: ${balance} ETH`);

    const transactionsCount = await insights.getTransactionCount('<WALLET_ADDRESS>');
    console.log(`Transactions: ${transactionsCount}`);

    const gasSpent = await insights.getGasSpent('<WALLET_ADDRESS>');
    console.log(`Gas Spent: ${gasSpent} ETH`);
}

main();
