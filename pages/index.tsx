import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-5xl font-medium mt-6 mb-6">Discover & Mint NFTs for Your Favorite Events</h2>
          <p className="text-gray-300">Your tick3ts are more than just an admission. Experience the art and collectible nature of NFTs as your tick3ts become a lasting memorabilia.</p>
          <div className="mt-8">
            <Link href="/events">
              <button>Browse Events ❯</button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
        <video className="rounded-lg" autoPlay loop muted style={{ width: '300px' }}>
        <source src="/lebron.mp4" />
      </video>
        </section>
      </div>
    </div>
  );
};

export default Home;
