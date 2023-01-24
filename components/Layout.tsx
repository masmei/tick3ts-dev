import React from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Tick3ts</title>
        <meta name="description" content="Events Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      {/* <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="text-lg font-medium" href="/">
            Tick3ts
          </Link>
          
          <div className="flex items-center">
            <Link
              className="px-4 py-2 mr-4 text-gray-800 hover:text-blue-600"
              href="/events"
            >
              Events
            </Link>
            <Link
              className="px-4 py-2 mr-4 text-gray-800 hover:text-blue-600"
              href="/"
            >
              Marketplace
            </Link>
            <Link
              className="px-4 py-2 mr-4 text-gray-800 hover:text-blue-600"
              href="/verify"
            >
              Check In
            </Link>
          </div>
        </div>
      </nav> */}
      <main className="flex-1">{children}</main>
      <footer className="bg-white p-6 text-center">
        <p className="text-gray-500">Copyright &copy; 2021 Tick3ts</p>
      </footer>
    </div>
  );
};
