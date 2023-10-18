"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import SectionTitle from "./SectionTitle";
const martialsArtFaq = [
  {
    id: 1,
    question: "What martial arts styles do you offer?",
    answer:
      "We offer a diverse range of martial arts styles, including Karate, Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, and Mixed Martial Arts (MMA).",
  },
  {
    id: 2,
    question:
      "Is your academy suitable for beginners with no prior experience?",
    answer:
      "Absolutely! Our academy welcomes students of all levels, including beginners with no prior martial arts experience. Our instructors are experienced in teaching beginners and will ensure a supportive and positive learning environment.",
  },
  {
    id: 3,
    question: "What are the benefits of practicing martial arts?",
    answer:
      "Practicing martial arts offers numerous benefits, such as improved physical fitness, increased self-discipline, enhanced self-confidence, stress relief, and the ability to develop self-defense skills.",
  },
  {
    id: 4,
    question: "What age groups do you cater to in your classes?",
    answer:
      " We cater to a wide range of age groups, from young children (usually starting at age 4-6) to adults. We have age-appropriate classes and curriculum to ensure that each student receives the best training suited to their age and abilities.",
  },
  {
    id: 5,
    question: "How often are the classes held of each session?",
    answer:
      "Our classes are typically held multiple times a week to accommodate various schedules. The duration of each session varies depending on the age group and martial arts style but usually ranges from 45 minutes to 1 hour.",
  },
  {
    id: 6,
    question: "Are there any specific uniform requirements for students?",
    answer:
      "Yes, we have specific uniform requirements for each martial arts style. Additionally, some classes may require students to use protective gear, such as gloves or shin guards. We provide guidance on where to purchase the required equipment and uniforms.",
  },
  {
    id: 7,
    question: "What qualifications and experience do your instructors have?",
    answer:
      " Our instructors are highly qualified and experienced martial artists with extensive training and teaching backgrounds. They hold certifications from reputable martial arts organizations and are dedicated to helping students achieve their goals.",
  },
  {
    id: 8,
    question: "How much does it cost to enroll in the martial arts program?",
    answer:
      "The cost of enrollment may vary depending on the program and the number of classes attended per week. We offer flexible membership options and pricing plans. Please contact us for detailed pricing information.",
  },
];
const Faq = () => {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section id="faq" className="section-padding border-b border-light/20">
      <SectionTitle title="Faq" />
      <div className="wrapper grid grid-col lg:grid-cols-2 gap-10 items-center justify-center mt-14">
        <div
          className="left image w-full h-full  pt-5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1692014706/0_rrYwSyi7VeL0A-Mi_h98onj.png"
            alt="faq"
            width={800}
            height={1000}
            priority
            className="w-full h-full rounded-lg"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          {martialsArtFaq.map((faq, index) => (
            <div key={faq.id} className="w-full">
              <div
                className={`faq-item flex justify-between mt-6 bg-dark items-center p-3 shadow-sm shadow-light/30 rounded-md  ${
                  open === index && "text-light/80 font-semibold"
                }`}
              >
                <h3 className="text-lg">0{faq.id + " . " + faq.question}</h3>
                <span
                  onClick={() => toggle(index)}
                  className="text-xl cursor-pointer"
                >
                  <AiOutlinePlus />
                </span>
              </div>
              {open === index && (
                <div className="shadow-sm shadow-light/20 rounded-md bg-dark p-3 mt-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
