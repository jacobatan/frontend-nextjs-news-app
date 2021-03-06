import React from "react";
import { SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import { BookmarkIcon, BellIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between py-4">
          {/* LEFT SIDE / LOGO*/}
          <div
            className="logo items-center flex font-semibold text-3xl font-mono cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div>
              <Image src="/img/icon.svg" width={40} height={40} />
            </div>
            news
          </div>

          {/* RIGHT SIDE */}
          <div className="icons flex space-x-3.5 items-center text-gray-500">
            <div>
              <SearchIcon className="h-5 cursor-not-allowed" />
            </div>
            <div>
              <BookmarkIcon className="h-5 cursor-not-allowed" />
            </div>
            <div>
              <BellIcon className="h-5 cursor-not-allowed" />
            </div>
            <button className="bg-white px-3 pt-0.5 pb-1 hover:shadow-lg rounded-full outline-gray-500 outline outline-2 text-black cursor-not-allowed">
              premium
            </button>
            <div>
              <UserCircleIcon className="h-7 cursor-not-allowed" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
