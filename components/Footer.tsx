"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-dark section-padding overflow-x-hidden">
      <div className="wrapper">
        <div className="grid grid-cols-1  lg:grid-cols-4 pb-5  gap-10 md:gap-6 lg:gap-4">
          <div className="w-full">
            <div data-aos="fade-down" data-aos-duration="1000">
              <Link href="/" className="text-2xl font-semibold text-light/80">
                Rising Phoenix
              </Link>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-lg text-light/75 mt-5 w-full leading-8"
            >
              Rising Phoenix Martial Art Academy cultivates inner strength,
              empowering students through disciplined training and fostering
              resilience.
            </p>
          </div>

          <div className="w-full xl:ml-28">
            <h2
              className="text-2xl font-semibold text-light/80 mb-4"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Quick Links
            </h2>
            <div className="text-light/75 gap-3 flex flex-col">
              <ul data-aos="fade-up" data-aos-duration="1500">
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
              </ul>
            </div>
          </div>

          <div className="w-full xl:ml-28">
            <h2
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-2xl font-semibold text-light/80 mb-4"
            >
              More Links
            </h2>
            <ul data-aos="fade-up" data-aos-duration="1500">
              <li>
                <Link href="/#faq" className="link-item">
                  Faq
                </Link>
              </li>
              <li>
                <Link href="/about" className="link-item">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-item">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full ">
            <div className="flex flex-col justify-between gap-2">
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                className="text-2xl font-semibold mb-4"
              >
                Connect with us
              </h2>
              <div
                className="social-icons flex gap-5 text-2xl text-accant1"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <Link href="https://www.google.com/">
                  <FaFacebookF />
                </Link>
                <Link href="https://www.google.com/">
                  <FaLinkedinIn />
                </Link>
                <Link href="https://www.google.com/">
                  <FaTwitter />
                </Link>
                <Link href="https://www.google.com/">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center border-t border-light/20 pt-10">
        <div className="lg:w-full md:w-2/3">
          <p className="text-center text-light/80 text-lg mt-5">
            &copy; {new Date().getFullYear()} Rising Phoenix. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
