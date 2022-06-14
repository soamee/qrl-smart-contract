# qrl-base-contract

# NFT Storefront

The NFT storefront is a general-purpose Cadence 
contract for trading NFTs on Flow.

`NFTStorefront` uses modern Cadence [run-time type](https://docs.onflow.org/cadence/language/run-time-types/)
facilities to implement a marketplace that can take any currency in order to vend any token in a safe and secure way. 
This means that only one instance of the contract is needed (see below for its address on Testnet and Mainnet), 
and its resources, transactions, and scripts can be used by any account to create any marketplace.

## Contract Addresses 

|Name|Testnet|Mainnet|
|----|-------|-------|
|[NFTStorefront](contracts/NFTStorefront.cdc)|[0x94b06cfca1d8a476](https://flow-view-source.com/testnet/account/0x94b06cfca1d8a476/contract/NFTStorefront)|[0x4eb8a10cb9f87357](https://flowscan.org/contract/A.4eb8a10cb9f87357.NFTStorefront)|

## Usage

Each account that wants to offer NFTs for sale installs a `Storefront`,
and then lists individual sales within that `Storefront` as `Listing` resources.

There is one `Storefront` per account that handles sales of all NFT types
for that account.

Each `Listing` can list one or more cut percentages.
Each cut is delivered to a predefined address. 
Cuts can be used to pay listing fees or other considerations.

Each NFT may be listed in one or more `Listing` resources.
The validity of each `Listing` can easily be checked.

Purchasers can watch for `Listing` events and check the NFT type and
ID to see if they wish to buy the offered item.

Marketplaces and other aggregators can watch for `Listing` events
and list items of interest.


## Steps to deploy

1. Generate keys

```
flow keys generate
```

2. Create Test account on https://testnet-faucet-v2.onflow.org/

3. Deploy contracts

```
flow project deploy --network=testnet
```


## Deployt to mainnet

flow accounts add-contract NonFungibleToken ./contracts/NonFungibleToken.cdc --signer mainnet-account --network mainnet
flow accounts add-contract QRLNFT ./contracts/QRLNFT.cdc --signer mainnet-account --network mainnet


## Keys for Testnet

🔴️ Store private key safely and don't share with anyone! 
Private Key      d1cc98ba736a926c896947fcbff4f132a4d74a7db8927f4cca634e6e3a3c917f 
Public Key       d5a618e6babf6640b9f005f8249ae415dd9fab5bfa0a5ea39b4a445a0e8d9ac5d88164733387f38a3acf6e7cadc5304a9176c916eb28002e9462de53a5f70e45 

Address 0x469a53dd5ab9bc85


## Deployment

Some of these ones must be present

```
"deployments": {
    "emulator": {
        "emulator-account": [
            "SwayPartyContract",
            "SwayToken",
            "MarketplaceContract"
        ]
    },
    "testnet": {
        "my-testnet-account": [
            "SwayPartyContract",
            "SwayToken",
            "MarketplaceContract"
        ]
        }
}
```


```
flow project deploy --network=testnet --update

```

## Pinata Test Keys

```
API Key: af01238ac3501287d7e6
API Secret: 20cc312dac2570219521cef43f6ba2f6d9aaf033562cba6a69506cd7d590b651
JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4ODRiOTEyNy0wYWIyLTQxYzMtODNmOC1mZThkY2U2ZGQ0OGQiLCJlbWFpbCI6ImptYW56YW5vQHNvYW1lZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYWYwMTIzOGFjMzUwMTI4N2Q3ZTYiLCJzY29wZWRLZXlTZWNyZXQiOiIyMGNjMzEyZGFjMjU3MDIxOTUyMWNlZjQzZjZiYTJmNmQ5YWFmMDMzNTYyY2JhNmE2OTUwNmNkN2Q1OTBiNjUxIiwiaWF0IjoxNjM1Nzg3NzI2fQ.-MYM83Q2WN7mo9qbSpN-2kNMSV7le3CUwUboBXCS8oU
```

## Sample Pinata Video

```
QmTca4A43f4kEvzTouvYTegtp6KobixRqweV12NrvwwtFP
```

## Emulator

### Terminal 1

```
flow emulator
```

### Terminal 2

Deploy the code

```
flow project deploy
```

Generate keys

```
flow keys generate
```

Send Transaction

```
flow transactions send ./transactions/MintPinataParty.cdc --signer emulator-account
```

Execute Scripts

```
flow scripts execute ./scripts/CheckTokenMetadata.cdc
```



# QRL Token FLOW protocol

playground --> https://play.onflow.org/443d793f-1036-465b-96fc-2475c44dc84f?type=account&id=cf2f3f15-69c5-424b-b538-e2194ea1d003

Fungible token address

    - `0xee82856bf20e2aa6` on emulator
    - `0x9a0766d93b6608b7` on testnet
    - `0xf233dcee88fe0abe` on mainnet

## Deploy to testnet

  create a tesnet account 

  flow keys generate --> keys 

  outputs -->

  🔴️ Store private key safely and don't share with anyone! 
  Private Key  XXXXX
  Public Key  XXXXx

  with the public key you can create and account and fund it in that faucet

  https://testnet-faucet-v2.onflow.org/

  https://docs.onflow.org/dapp-deployment/testnet-deployment/#redeploying-your-application

  faucet to create account --> https://testnet-faucet-v2.onflow.org/

## Deploy to Mainnet

The repo should have pass the tests based on guidelines. 

  https://docs.onflow.org/dapp-deployment/contract-testing/

form to submit the project in the mainnet 

  -- https://buildwithflow.typeform.com/to/EkfaboAx

Deploy to mainnet

flow accounts add-contract NonFungibleToken ./contracts/NonFungibleToken.cdc --signer mainnet-account --network mainnet
flow accounts add-contract QRLNFT ./contracts/QRLNFT.cdc --signer mainnet-account --network mainnet


## useful flow cli commands

flow emulator start
flow get accounts


flow project init  --

flow project start-emulator

flow project deploy

flow keys generate

flow transactions send --code ./transactions/get_balance.cdc --signer emulator-account

flow scripts execute  ./scripts/get_supply.cdc
flow scripts execute  ./scripts/get_balance.cdc


# account create

flow accounts create \
  --signer testnet-account \
  --network testnet \
  --key d5a618e6babf6640b9f005f8249ae415dd9fab5bfa0a5ea39b4a445a0e8d9ac5d88164733387f38a3acf6e7cadc5304a9176c916eb28002e9462de53a5f70e45 \
  --contract QRLNFT:./contracts/QRLNFT.cdc

