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
    body1:
      "Karate, originating in Japan, is a martial art known for its powerful striking techniques. Practitioners of Karate train to develop strength, speed, and precision in their punches and kicks. The art places significant emphasis on katas pre-arranged forms to refine techniques and sparring to apply them in realistic situations. Karate promotes not only physical fitness but also mental discipline and respect for others, making it a popular martial art worldwide.",
    body2:
      "Karate's rich history dates back to ancient Okinawa, where it evolved from indigenous fighting methods and Chinese influences. Its diverse techniques encompass various striking surfaces, including fists, elbows, knees, and feet. Practitioners also cultivate self-defense skills and learn to harness their energy through controlled breathing. The belt-ranking system symbolizes progress and commitment, fostering a strong sense of community among Karate enthusiasts globally.",
  },
  {
    id: 2,
    name: "Muay Thai",
    origin: "Thailand",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691266958/8-weapons_clcjdx.webp",
    headline: "Muay Thai: The Art of Eight Limbs from Thailand",
    body1:
      "Muay Thai, also known as Thai boxing, is a martial art that originated in Thailand. Renowned as the 'Art of Eight Limbs,' it incorporates punches, kicks, knees, and elbows to form a highly effective striking system. Muay Thai practitioners develop exceptional cardio conditioning and skill in both clinch work and long-range striking. The art's practicality and efficacy have made it a staple in mixed martial arts (MMA) and self-defense training.",
    body2:
      "Muay Thai's origins trace back centuries, initially utilized by Thai soldiers for battlefield combat. The sport has evolved into a global phenomenon, with fighters showcasing their prowess in prestigious competitions like the Lumpinee Stadium. Its rigorous training regimen instills mental toughness, discipline, and a profound respect for the art's heritage, making Muay Thai a revered cultural tradition.",
  },
  {
    id: 3,
    name: "Aikido",
    origin: "Japan",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691266720/DSC7332_vhm0uk.jpg",
    headline: "Aikido: The Way of Harmony and Non-Resistance",
    body1:
      "Aikido, a Japanese martial art, focuses on redirecting an opponent's energy rather than meeting force with force. Developed in the 20th century, Aikido techniques include joint locks and throws that enable practitioners to neutralize attacks without causing unnecessary harm. Aikido emphasizes blending with an opponent's movements and using circular motions to achieve effective defense. Beyond physical techniques, Aikido encourages practitioners to cultivate a harmonious and compassionate spirit.",
    body2:
      "Aikido's philosophy extends into daily life, promoting conflict resolution and empathy. By practicing Aikido, individuals refine their ability to remain calm under pressure, fostering resilience and mental clarity. The art's intricate footwork and precise hand movements exemplify the marriage of grace and power, making Aikido a captivating martial art with enduring relevance.",
  },
  {
    id: 4,
    name: "Hapkido",
    origin: "Korea",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691266714/fbc79aaafae08793d809757394321bb5_lujc62.jpg",
    headline: "Hapkido: The Korean Martial Art of Coordinated Power",
    body1:
      "Hapkido, originating in Korea, is a comprehensive martial art that combines striking, joint locks, throws, and pressure point attacks. It emphasizes fluid and dynamic movements, enabling practitioners to control an opponent's actions effectively. Hapkido's diverse techniques make it suitable for self-defense in a variety of situations. The art also promotes mental discipline and cultivates the practitioner's ability to adapt and respond to different combat scenarios.",
    body2:
      "Hapkido, with its Korean heritage, stands as a masterpiece of martial ingenuity, intertwining the grace of dance-like motions with the precision of calculated combat. The fusion of striking, joint manipulation, and pressure point tactics empowers individuals to defuse aggression seamlessly. Beyond physical prowess, Hapkido molds the psyche, fostering astute judgment and a composed demeanor in the face of adversity, creating true warriors of mind and body.",
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
            className="grid grid-cols lg:grid-cols-2 flex-col-reverse items-center justify-center gap-10 mt-24"
          >
            <div
              className={`flex flex-col gap-10 ${
                martialArt.id % 2 === 0 ? "order-last" : null
              }`}
            >
              <motion.div
                variants={shutterDown()}
                initial="from"
                whileInView="to"
                transition={getTransition(0.4)}
              >
                <span className="text-7xl lg:text-9xl text-light/10 font-bold">
                  0{martialArt.id}
                </span>
              </motion.div>

              <div>
                <motion.h2
                  className="text-3xl tracking-wide text-accant1 font-medium"
                  variants={shutterDown()}
                  initial="from"
                  whileInView="to"
                  transition={getTransition(0.6)}
                >
                  {" "}
                  {martialArt.name}
                </motion.h2>
                <motion.p
                  variants={shutterDown()}
                  initial="from"
                  whileInView="to"
                  transition={getTransition(0.8)}
                  className="text-xl"
                >
                  {martialArt.body1}
                </motion.p>

                <motion.p
                  variants={shutterDown()}
                  initial="from"
                  whileInView="to"
                  transition={getTransition(0.8)}
                  className="text-xl mt-2"
                >
                  {martialArt.body2}
                </motion.p>
              </div>
              {/* <motion.div
                variants={shutterDown()}
                initial="from"
                whileInView="to"
                transition={getTransition(0.8)}
                className="py-5 px-8 -ml-8 text-lg -mt-5"
              >
                <Button
                  href="/martialsArt"
                  placeholder={martialArt.cta}
                  color="green"
                />
              </motion.div> */}
            </div>

            <motion.div
              variants={shutterUp()}
              initial="from"
              whileInView="to"
              transition={getTransition(1)}
              className="images w-[100%] h-[100%]"
            >
              <Image
                src={martialArt.src}
                alt={martialArt.name}
                height={500}
                width={500}
                className="w-full h-full rounded-lg"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleMartialArts;
