import Link from "next/link";
import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-white py-4 shadow-md w-100">
      <div className="container m-auto px-6 flex justify-between items-center">
        <h1 className="md:text-4xl text-2xl font-bold mr-8">
          Dark<span className="text-slate-500">Pixel</span>
        </h1>
        <ul className="flex space-x-4 flex-wrap  justify-end text-center">
          <li className="md:text-2xl text-xl font-medium hover:text-blue-700">
            <Link href="/">Home</Link>
          </li>
          <li className="md:text-2xl text-xl font-medium hover:text-blue-700">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
