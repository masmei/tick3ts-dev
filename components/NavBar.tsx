import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMetamask, useAddress } from "@thirdweb-dev/react";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const address = useAddress();
  const connectWithMetamask = useMetamask();

  return (
    <div>
      <nav className="w-full top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link className="text-3xl font-bold" href="/">
                <Image 
                src="/logo1.png"
                width={100}
                height={30}
                alt="tick3ts-logo"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="bg-white inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-300 hover focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/close.png"
                      width={30}
                      height={30}
                      alt="close"
                    />
                  ) : (
                    <Image
                      src="/hamburger-menu.png"
                      width={30}
                      height={30}
                      alt="burger"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-l font-bold py-2 md:px-6 text-center">
                  <Link href="/events" onClick={() => setNavbar(!navbar)}>
                    Events
                  </Link>
                </li>
                {/* <li className="text-l font-bold py-2 px-6 text-center ">
                  <Link href="/marketplace" onClick={() => setNavbar(!navbar)}>
                    Marketplace
                  </Link>
                </li> */}
                <li className="text-l font-bold py-2 px-6 text-center ">
                  <Link href="/checkin/nba" onClick={() => setNavbar(!navbar)}>
                    Check In
                  </Link>
                </li>
                <li className="flex align-middle justify-center ml-4">
                    {address && ( <Link href="/profile" onClick={() => setNavbar(!navbar)}><button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-2 px-4 rounded-tr-lg rounded-bl-lg border-2 border-red-500" onClick={connectWithMetamask}>
                      {address.slice(0, 3) + "..." + address.slice(39, 42)}
                    </button></Link>)}
                    {!address && (<button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-2 px-4 rounded-tr-lg rounded-bl-lg border-2 border-red-500" onClick={connectWithMetamask}>
                      Connect Wallet
                    </button>)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
