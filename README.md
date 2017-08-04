# Token Sale Contracts

A collection of contracts used for typical token sales.
They are based on Consensys' standard implementation of ERC20.

## Overview

The token sales contract implements the HumanStandardToken and inherits the following properties:

## Token Distribution

  * 20% will be distributed to owner's wallet
  * 10% will be sold during the pre-sale (capped @ configurable value)
  * 50% will be sold during the official sale (capped @ configurable value)
  * 20% will held in a time-locked wallet, distributed to the owner after a configurable vesting period

## Handling contractors during pre-sale period

It is recommended that contractors are paid by transferring tokens from the owner's wallet to the contractor.

## Development

### Install Dependencies

```
npm install
```


## Launch testrpc

```
testrpc \
  --account="0xb44d5ae914d16e93972f70a4a73d87420e0150173bef79d9945b736d69825247,10000000000000000000000000" \
  --account="0x72fc90dc0ec9bc20efd2c47791605406564a6b25b3b479bca53134fe6c2dd2aa,10000000000000000000000000" \
  --gasPrice 40000000000
```

## Testing

```
truffle test
```

## Verifying w/ Oyente

```
docker pull everconfusedguy/oyente
docker run -it -v `echo $PWD`:/data everconfusedguy/oyente
python oyente.py -dl 500 -ll 500 -s /data/contracts/Sales.sol
```
## Deploying to TestNet

Edit `truffle.js` if necessary to point to Ethereum RPC node connected to the Ethereum testnet.
Also, make sure you have some test ether in the account to deploy contracts.

During development we used the revived Ropstent, testnet and the following faucet to send Ether to it:

http://ipfs.b9lab.com:8080/ipfs/QmTHdYEYiJPmbkcth3mQvEQQgEamFypLhc9zapsBatQW7Y/throttled_faucet.html

```
truffle deploy --network live
```
