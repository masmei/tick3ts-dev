import {
  ConnectWallet,
  useAddress,
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";
import { SignedPayload721WithQuantitySignature } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";

const signatureDropAddress = "0x7Fbab16673E9dbB44d9FC7C6211687806887b66B";

const Mint: NextPage = () => {
  const address = useAddress();

  const { contract: signatureDrop } = useContract(
    signatureDropAddress,
    "signature-drop"
  );

  async function claim() {
    try {
      const tx = await signatureDrop?.claim(1);
      alert(`Succesfully minted NFT!`);
    } catch (error: any) {
      alert(error?.message);
    }
  }

  return (
<div className="container mx-auto p-6">
  <main className="flex flex-col items-center">
    <h1 className="text-3xl font-medium text-center mt-6 mb-6">
      Mint your tick3t for: <a href="http://thirdweb.com/">Code & Pizza</a>!
    </h1>
    <ConnectWallet className="mt-6 mb-6" />
    <Web3Button
        contractAddress={signatureDropAddress}
        action={() => claim()}
        colorMode="light"
        className="bg-pink-500 text-white p-4 rounded-lg hover:bg-pink-600"
    >
        Claim
    </Web3Button>
  </main>
</div>

  );
};

export default Mint;
