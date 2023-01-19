import config from "../config";
import Claim, { selectWalletProvider, networkName } from "cardano-simple-script-vesting";

const walletProvider = "nami";

const toClaim = [
  {
    // native1
    address: "addr_test1wq8pmhtxwuzdnfu3mqsvden7mrhgkw2lcv54tyvgnusskjcdwjeg3",
    nativeScript: {
      requireTimeAfterSlot: 17317800,
      requireSignature: "d1e3f14070d32f2b3e167417f0ecbf77328f5520ca7aa6e0fb904c60",
    },
    assets: [
      { currencySymbol: "3450cad5f6a513eefc5e1a91cbeddf5657bb9b21354e7903983cd777", tokenName: "74434c4150" },
    ]
  },
  {
    // native2
    address: "addr_test1wq03hjpm3qua770v02zmhkcfk6u7fxjxqly5aeequeaw4dgu6xa3z",
    nativeScript: {
      requireTimeAfterSlot: 17321400,
      requireSignature: "d1e3f14070d32f2b3e167417f0ecbf77328f5520ca7aa6e0fb904c60",
    },
    assets: [
      { currencySymbol: "3450cad5f6a513eefc5e1a91cbeddf5657bb9b21354e7903983cd777", tokenName: "74434c4150" },
    ]
  }
];

const check = async () => {
    try {
        const wProvider = await selectWalletProvider(walletProvider);
        const claim = new Claim(networkName(config.network), wProvider, config.apiKey);
        console.log("Checking available funds...");
        const funds = await claim.fundsAvailable(toClaim);
        console.log(funds);
        window.alert(`Funds available: ${funds}`);
    } catch (error) {
        console.error('error checking funds', error);
        window.alert(`Unexpected error checking funds: ${(error as any).message}`);
    }
}

const claim = async () => {
    try {
        const wProvider = await selectWalletProvider(walletProvider);
        const claim = new Claim(networkName(config.network), wProvider, config.apiKey);
        console.log("Claiming tokens...");
        const txHash = await claim.claimFunds(toClaim);
        window.alert(`Claim succesfully submitted! TxHash: ${txHash}`);
    } catch (error) {
        console.error('error sending transaction', error);
        window.alert(`Unexpected error sending transaction: ${(error as any).message}`);
    }
}

// Register Events handlers
const checkBtn = document.getElementById('check');
checkBtn!.addEventListener('click', check);
const claimBtn = document.getElementById('claim');
claimBtn!.addEventListener('click', claim);
