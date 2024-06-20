"use client";

import Link from "next/link";
import { SvgMenuButton } from "@/assets/svg-collection";
import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="flex justify-between items-center px-2">
      <div className="flex items-center space-x-2">
        <span className="bg-primary-deep-blue h-4 w-4 inline-block rounded-full"></span>
        <span className="text-lg font-bold">GRAHA BIRU</span>
        <span>/ KONSTRUKSI & INTERIOR</span>
      </div>
      <nav className="hidden md:flex md:pr-4 md:space-x-6 lg:space-x-10">
        <Link href="/." className="hover:text-primary-deep-blue">
          HOME
        </Link>
        <Link href="/pages/aboutus" className="hover:text-primary-deep-blue">
          ABOUT US
        </Link>
        <Link href="/pages/services" className="hover:text-primary-deep-blue">
          SERVICES
        </Link>
        <Link href="/pages/teams" className="hover:text-primary-deep-blue">
          TEAMS
        </Link>
      </nav>
      <div
        className="md:hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="focus:outline-none py-2" aria-label="open menu">
          <SvgMenuButton />
        </button>
        {isHovered && (
          <div className="flex flex-col md:hidden bg-primary-soft-pink/80 shadow-lg rounded-lg p-4 absolute top-12 right-4 w-40">
            <Link
              href="/."
              className="block mb-4 hover:text-primary-deep-blue text-center"
              onClick={() => setIsHovered(false)}
            >
              HOME
            </Link>
            <Link
              href="/pages/aboutus"
              className="block mb-4 hover:text-primary-deep-blue text-center"
              onClick={() => setIsHovered(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/pages/services"
              className="block mb-4 hover:text-primary-deep-blue text-center"
              onClick={() => setIsHovered(false)}
            >
              SERVICE
            </Link>
            <Link
              href="/pages/teams"
              className="block hover:text-primary-deep-blue text-center"
              onClick={() => setIsHovered(false)}
            >
              TEAM
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}