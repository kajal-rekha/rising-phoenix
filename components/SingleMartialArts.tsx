"use client";

import { martialsarts } from "@/data/martialsArt";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const SingleMartialArts = () => {
  return (
    <section className="wrapper section-padding">
      <SectionTitle title="different kinds of martials art" />
      <div>
        {martialsarts.map((martialArt) => (
          <div
            key={martialArt.id}
            className="grid grid-cols lg:grid-cols-2 flex-col-reverse items-center justify-center gap-14 mt-24 lg:mt-32"
          >
            <div
              className={`flex flex-col gap-10 -mt-5 ${
                martialArt.id % 2 === 0 ? "order-last" : null
              }`}
            >
              <div data-aos="fade-up" data-aos-duration="1000">
                <span className="text-7xl lg:text-9xl text-light/10 font-bold">
                  0{martialArt.id}
                </span>
              </div>

              <h2
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-2xl lg:text-3xl tracking-wide text-accant1 font-medium -mt-5"
              >
                {" "}
                {martialArt.name}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-lg lg:text-xl -mt-5"
              >
                {martialArt.body1}
              </p>

              <p
                data-aos="fade-up"
                data-aos-duration="3000"
                className="text-lg lg:text-xl -mt-6"
              >
                {martialArt.body2}
              </p>
              <div data-aos="fade-up" data-aos-duration="3000">
                <Button
                  href={`/martialsArt/${martialArt.id}`}
                  placeholder={martialArt.cta}
                  color="green"
                />
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="images w-full h-full"
            >
              <Image
                src={martialArt.src}
                alt={martialArt.name}
                height={500}
                width={500}
                priority
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleMartialArts;
