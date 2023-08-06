"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
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
];
const Faq = () => {
  const [open, setOpen] = useState(null);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section id="faq" className=" section-padding border-b border-light/20">
      <h2 className="uppercase text-3xl font-semibold text-accant1 text-center">
        faq
      </h2>
      <div className="wrapper grid grid-col lg:grid-cols-2 items-center justify-center mt-20">
        <div className="left image w-96 h-full">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1691322702/FAQ-768x768_znwdth.png"
            alt="faq"
            width={800}
            height={800}
            className="w-full h-full"
          />
        </div>
        <div>
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
                <div className="shadow-sm shadow-light/20 rounded-bl-md rounded-br-md bg-dark p-3">
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
