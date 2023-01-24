import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-6">
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-medium mt-6 mb-6">Welcome to Tick3ts</h1>
        <p className="text-xl">Your one-stop shop for event tickets</p>
        <div className="mt-8">
          <Link
            className="bg-white px-4 py-2 rounded-lg text-pink-500 hover:bg-pink-500 hover:text-white"
            href="/events"
          >
            Browse Events
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
