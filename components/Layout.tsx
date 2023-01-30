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
      <main className="flex-1">{children}</main>
      <footer className="p-6 text-center">
        <p className="text-gray-500">Copyright &copy; 2023 Tick3ts</p>
      </footer>
    </div>
  );
};
