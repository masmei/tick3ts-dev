import {
  ConnectWallet,
  useAddress,
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import { checkIsManualRevalidate } from "next/dist/server/api-utils";

const signatureDropAddress = "0x7Fbab16673E9dbB44d9FC7C6211687806887b66B";

const Pursuit: NextPage = () => {
  const address:any = useAddress();

  //Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY:any = process.env.PRIVATE_KEY as any;

  //Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey("0a1b4822458052eccee1a62cb94ecb9c57a00dfee5da96c58c0b60f82c5fb9ba", "goerli");
  // const sdk = ThirdwebSDK.fromPrivateKey(PRIVATE_KEY, "goerli");

  const domain = "tick3ts.io";

  const checkBalance = async (sdk: any, address: string) => {
    const nftCollection = await sdk.getSignatureDrop(
      signatureDropAddress,
      "signature-drop"
    );
    console.log(nftCollection)

    //replace this with your contract address
    const balance = await nftCollection.balanceOf(address, 0);

    //gt = greater than
    return balance.gt(0);
  };

  const checkIn = async () => {
    const hasNft = await checkBalance(sdk, address);

    // If they don't have an NFT, redirect them to the login page
    if (!hasNft) {
      alert("NFT Not Found");
    } else {
      alert("You are all set!")
    }
  };

  const { contract: signatureDrop } = useContract(
    signatureDropAddress,
    "signature-drop"
  );

  return (
    <div className="container mx-auto p-6">
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-medium text-center mt-6 mb-6">
          Check in for: <a href="http://thirdweb.com/">Code & Pizza</a>!
        </h1>
        <ConnectWallet className="mt-6 mb-6" />
        <Web3Button
          contractAddress={signatureDropAddress}
          action={() => checkIn()}
          colorMode="light"
          className="bg-pink-500 text-white p-4 rounded-lg hover:bg-pink-600"
        >
          Check in
        </Web3Button>
      </main>
    </div>
  );
};

export default Pursuit;
