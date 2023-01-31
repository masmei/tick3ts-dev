import {
    useAddress,
    useContract,
    useContractMetadata,
    Web3Button,
    useClaimedNFTSupply,
    useUnclaimedNFTSupply
  } from "@thirdweb-dev/react";
  import { SignedPayload721WithQuantitySignature } from "@thirdweb-dev/sdk";
  import type { NextPage } from "next";
  
  const signatureDropAddress = "0x27019600bd6E58E57F2ABc6A885d018B7aBCe5Bb";
  
  const Mint: NextPage = () => {
    const address = useAddress();
    
    const { contract: signatureDrop } = useContract(
      signatureDropAddress,
      "signature-drop"
    );
  
    const { data: contractMetadata } = useContractMetadata(signatureDrop);
    const { data: claimedNFTSupply } = useClaimedNFTSupply(signatureDrop);
    const { data: unclaimedNFTSupply } = useUnclaimedNFTSupply(signatureDrop);
  
  
    async function claim() {
      try {
        const tx = await signatureDrop?.claim(1);
        alert(`Succesfully minted NFT!`);
      } catch (error: any) {
        alert(error?.message);
      }
    }
  
    return (
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
        {/* <header className="flex flex-col items-center justify-center p-6 md:p-12">
        </header> */}
        <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-2 md:p-12">
          <div className="flex flex-col items-center justify-center space-y-6">
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
                <source src="/nflpreview.mov" />
              </video>
  
              <div className="flex max-w-sm justify-between">
                <p>Total Minted</p>
                <p>{claimedNFTSupply?.toNumber()} / {(claimedNFTSupply?.toNumber() || 0) + (unclaimedNFTSupply?.toNumber() || 0)}</p>
              </div>
  
              <div className="flex justify-center">
                <Web3Button
                  contractAddress={signatureDropAddress}
                  action={() => claim()}
                  colorMode="dark"
                  accentColor="#5F0A87"
                  // className="bg-pink-500 text-white p-4 rounded-lg hover:bg-pink-600"
                >
                  Claim
                </Web3Button>
              </div>
            </div>
          </div>
        </main>
        {/* <main className="flex flex-col items-center">
      <h1 className="text-3xl font-medium text-center mt-6 mb-6">
        Mint your tick3t for: <a href="/">NBA</a>
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
    </main> */}
      </div>
    );
  };
  
  export default Mint;
  