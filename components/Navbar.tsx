"use client";

import Link from "next/link";
import Button from "./Button";
//import { motion } from "framer-motion";
//import { getTransition } from "@/utils/getTransition";

const Navbar = () => {
  return (
    <header className=" bg-accant1 h-20 fixed top-0 left-0 right-0 bg-light/90 backdrop-blur-lg border-b border-dark/10 z-[100]">
      <div className="wrapper w-full h-full flex justify-between items-center  ">
        {/* NAV LEFT */}
        <nav>
          <Link href="/" className="text-xl font-semibold link-item">
            Rising Phoenix
          </Link>
        </nav>
        {/* NAV MID */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/instructor" className="link-item">
                Instructore
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="link-item">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link-item">
                Faq
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV RIGHT */}
        <nav className=" items-center ">
          <Button href="/join now" placeholder="Join Now" color="green" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
