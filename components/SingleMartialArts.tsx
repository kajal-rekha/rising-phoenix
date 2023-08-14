"use client";

import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { getTransition, shutterDown, shutterUp } from "@/utils/getTransition";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    name: "karate",
    origin: "Japan",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691266732/woman-g5b6d0518f_1920_glkpil.jpg",
    headline: "Karate: The Japanese Art of Empty-Hand Combat",
    body: "Karate, originating in Japan, is a martial art known for its powerful striking techniques. Practitioners of Karate train to develop strength, speed, and precision in their punches and kicks. The art places significant emphasis on katas pre-arranged forms to refine techniques and sparring to apply them in realistic situations. Karate promotes not only physical fitness but also mental discipline and respect for others, making it a popular martial art worldwide.",
    cta: "reade more",
  },
  {
    id: 2,
    name: "Muay Thai",
    origin: "Thailand",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691266958/8-weapons_clcjdx.webp",
    headline: "Muay Thai: The Art of Eight Limbs from Thailand",
    body: "Muay Thai, also known as Thai boxing, is a martial art that originated in Thailand. Renowned as the 'Art of Eight Limbs,' it incorporates punches, kicks, knees, and elbows to form a highly effective striking system. Muay Thai practitioners develop exceptional cardio conditioning and skill in both clinch work and long-range striking. The art's practicality and efficacy have made it a staple in mixed martial arts (MMA) and self-defense training.",
    cta: "reade more",
  },
  {
    id: 3,
    name: "Aikido",
    origin: "Japan",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691266720/DSC7332_vhm0uk.jpg",
    headline: "Aikido: The Way of Harmony and Non-Resistance",
    body: "Aikido, a Japanese martial art, focuses on redirecting an opponent's energy rather than meeting force with force. Developed in the 20th century, Aikido techniques include joint locks and throws that enable practitioners to neutralize attacks without causing unnecessary harm. Aikido emphasizes blending with an opponent's movements and using circular motions to achieve effective defense. Beyond physical techniques, Aikido encourages practitioners to cultivate a harmonious and compassionate spirit.",
    cta: "reade more",
  },
  {
    id: 4,
    name: "Hapkido",
    origin: "Korea",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691266714/fbc79aaafae08793d809757394321bb5_lujc62.jpg",
    headline: "Hapkido: The Korean Martial Art of Coordinated Power",
    body: "Hapkido, originating in Korea, is a comprehensive martial art that combines striking, joint locks, throws, and pressure point attacks. It emphasizes fluid and dynamic movements, enabling practitioners to control an opponent's actions effectively. Hapkido's diverse techniques make it suitable for self-defense in a variety of situations. The art also promotes mental discipline and cultivates the practitioner's ability to adapt and respond to different combat scenarios.",
    cta: "reade more",
  },
];

const SingleMartialArts = () => {
  return (
    <section className="wrapper section-padding">
      <SectionTitle title="different kinds of martials art" />
      <div>
        {data.map((martialArt) => (
          <div
            key={martialArt.id}
            className=" grid grid-cols md:grid-cols-2 flex-col-reverse items-center justify-center gap-10 mt-24"
          >
            <motion.div
              variants={shutterDown()}
              initial="from"
              whileInView="to"
              transition={getTransition(0.6)}
              className={`flex flex-col gap-10 ${
                martialArt.id % 2 === 0 ? "order-last" : null
              }`}
            >
              <span className="text-6xl lg:text-8xl text-light/10 font-bold">
                0{martialArt.id}
              </span>

              <div>
                <h2 className="text-2xl tracking-wide text-accant1 font-medium">
                  {" "}
                  {martialArt.name}
                </h2>
                <p className="text-lg">{martialArt.body}</p>
              </div>
              <div className="py-3 px-6 -ml-5 text-lg">
                <Button
                  href="/martialsArt"
                  placeholder={martialArt.cta}
                  color="green"
                />
              </div>
            </motion.div>
            <motion.div
              variants={shutterDown()}
              initial="from"
              whileInView="to"
              transition={getTransition(0.6)}
            >
              <div className="images w-[80%] h-[80%]">
                <Image
                  src={martialArt.src}
                  alt={martialArt.name}
                  height={500}
                  width={500}
                  className="w-full h-full rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleMartialArts;
