import config from "../config";
import Claim, { selectWalletProvider, networkName } from "cardashift-lucid-contracts";

const walletProvider = "nami";

const toClaim = {
    // native1
    addr_test1wrjc6q0tespvesuha44jwmrkaeqaa3m8f3t8gdu4asxrw2czhs6za: [
      {
        nativeScript: {
          unlockTime: 67189509,
          pkh: "d1e3f14070d32f2b3e167417f0ecbf77328f5520ca7aa6e0fb904c60",
        },
        asset: { currencySymbol: "", tokenName: "" },
      },
    ],
    addr_test1wra92cpq8rsefwxjpktutpexqrsa9keh5s6yr8rge030vkqdp9mdl: [
      {
        nativeScript: {
          unlockTime: 67190409,
          pkh: "d1e3f14070d32f2b3e167417f0ecbf77328f5520ca7aa6e0fb904c60",
        },
        asset: { currencySymbol: "", tokenName: "" },
      },
    ]
  };

const check = async () => {
    //const toClaim = await getEndpointData();
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
    //const toClaim = await getEndpointData();
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

const getEndpointData = (): Promise<any> =>
    fetch("http://localhost:8000/data.json").then((r) => r.json());

// Register Events handlers
const checkBtn = document.getElementById('check');
checkBtn!.addEventListener('click', check);
const claimBtn = document.getElementById('claim');
claimBtn!.addEventListener('click', claim);
