import {
  useAddress,
  useContract,
  useContractMetadata,
  Web3Button,
  useClaimedNFTSupply,
  useUnclaimedNFTSupply,
} from "@thirdweb-dev/react";
import { SignedPayload721WithQuantitySignature } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import Image from "next/image";

const signatureDropAddress = "0x07796cfbD562fa4b697D92bbCE002BCB08D2aA64";

const Event: NextPage = () => {
  const address = useAddress();

  const { contract: signatureDrop } = useContract(
    signatureDropAddress,
    "signature-drop"
  );

  const { data: contractMetadata } = useContractMetadata(signatureDrop);
  const { data: claimedNFTSupply } = useClaimedNFTSupply(signatureDrop);
  const { data: unclaimedNFTSupply } = useUnclaimedNFTSupply(signatureDrop);

  async function handleClaim() {
    try {
      const tx = await signatureDrop?.claim(1);
      alert(`Succesfully minted NFT!`);
    } catch (error: any) {
      alert(error?.message);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
      <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-2 md:p-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Image src="/logo.png" width={50} height={50} alt="tick3ts-logo" />
          <h1 className="text-2xl font-bold text-secondary">
            {contractMetadata?.name}
          </h1>
          <p className="text-center leading-relaxed">
            {contractMetadata?.description}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex  justify-center max-w-sm flex-col space-y-4">
            <video
              className="rounded-lg"
              autoPlay
              loop
              muted
              style={{ width: "300px" }}
            >
              <source src="/nbapreview.mov" />
            </video>

            <div className="flex max-w-sm justify-between">
              <p>Total Minted</p>
              <p>
                {claimedNFTSupply?.toNumber()} /{" "}
                {(claimedNFTSupply?.toNumber() || 0) +
                  (unclaimedNFTSupply?.toNumber() || 0)}
              </p>
            </div>

            <div className="flex justify-center">
              <Web3Button
                contractAddress={signatureDropAddress}
                action={handleClaim}
                colorMode="dark"
                accentColor="#6617CB"
                // className="bg-pink-500 text-white p-4 rounded-lg hover:bg-pink-600"
              >
                Claim
              </Web3Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Event;
