"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const handleOpen = () => {
    setToggle(false);
  };

  return (
    <header className="h-20 fixed top-0 left-0 right-0 bg-dark backdrop-blur-lg border-b border-dark/75 z-[100]">
      <div className="wrapper w-full h-full flex justify-between items-center text-light/80 ">
        {/* NAV LEFT */}
        <nav data-aos="fade-right" data-aos-duration="1000">
          <Link
            href="/"
            className="text-2xl text-light/80 font-semibold link-item"
          >
            Rising Phoniex
          </Link>
        </nav>
        {/* NAV MID */}
        <nav className="">
          <ul
            className="md:flex gap-5 hidden md:block text-lg"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#martialsArt" className="link-item">
                MartialsArt
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="link-item">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/#instructor" className="link-item">
                Instructore
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="link-item">
                Faq
              </Link>
            </li>
            <li>
              <Link href="/#about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV RIGHT */}
        <nav
          className="items-center text-lg"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Button href="/join now" placeholder="Join Now" color="green" />
        </nav>

        {/*toggle button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center justify-center focus:outline-none text-xl text-light/80 z-[99]"
          >
            {toggle === true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div>
        {toggle ? (
          <div className="md:hidden">
            <div
              onClick={handleOpen}
              className={`w-screen h-screen fixed z-[98] bg-dark/90 top-0 left-0 right-0 bottom-0 flex text-light/80 text-lg justify-center items-center ${
                toggle ? `` : "hidden"
              }`}
            >
              <div>
                <ul className="flex flex-col gap-2 items-center">
                  <li>
                    <Link href="/" className="link-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#martialsArt" className="link-item">
                      MartialsArt
                    </Link>
                  </li>
                  <li>
                    <Link href="/#gallery" className="link-item">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/#instructor" className="link-item">
                      Instructore
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="link-item">
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link href="/#about" className="link-item">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="link-item">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
