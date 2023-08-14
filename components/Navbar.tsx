"use client";

import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className=" h-20 fixed top-0 left-0 right-0 bg-dark backdrop-blur-lg border-b border-dark/75 z-[100]">
      <div className="wrapper w-full h-full flex justify-between items-center text-light/80 ">
        {/* NAV LEFT */}
        <nav data-aos="fade-right" data-aos-duration="1000">
          <Link href="/" className="text-xl font-semibold link-item">
            Rising Phoenix
          </Link>
        </nav>
        {/* NAV MID */}
        <nav>
          <ul
            className="flex gap-5"
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
          className=" items-center text-lg"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Button href="/join now" placeholder="Join Now" color="green" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
