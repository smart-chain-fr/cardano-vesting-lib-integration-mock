# vesting-lib-integration-mock
Mocked website to test the cardano-simple-script-vesting library for claiming vested tokens.

## Step 1: Generate simple script and address
You can do it using cardano-cli (cf. [tuto]()).

## Step 2: Lock funds
Send funds to the generated address(es).

Note: You can get testnet ADA from the [faucet](https://docs.cardano.org/cardano-testnet/tools/faucet).

## Step 3: Edit index file
Edit the `toClaim` object in the [index.ts](./src/index.ts) file replacing `address`, ̀`requireTimeAfterSlot`, `requireSignature`, `currencySymbol` and `tokenName` by the values corresponding to the ones you have set in the previous steps.

## Step 4: Get Blockfrost API key
Create a [Blockfrost](https://blockfrost.io/) account and create a "project" on a Testnet.
Rename the config_example.ts file:
`mv config_example.ts config.ts`
Replace the network and API key in the [config.ts](./config.ts) file.

## Step 5: Launch the mock
`npm install`
`npm run start`

## Step 6: Claim funds
Go to [http://localhost:8080](http://localhost:8080) and claim funds.