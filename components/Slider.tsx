"use client";

import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691937354/1_W5hnGHW9OXK6xXHyTJcopw_ng4xuw.jpg",
    headline: "Master Martial Arts at Phoenix Academy",
    body: "Welcome to Phoenix Martial Academy, where ancient traditions meet modern techniques. Our academy is dedicated to empowering individuals of all ages with the knowledge and skills of various martial arts disciplines.",
    cta: "Enroll Now for a Free Trial Class",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691948026/IMG_4620-e1527127158795_su3e7s.webp",
    headline: "Discover Diverse Martial Arts Classes",
    body: "At Phoenix Martial Academy, we offer a wide range of classes to cater to different interests and skill levels. Whether you're a beginner or an experienced practitioner, you'll find the perfect class to enhance your martial arts journey.",
    cta: "View Class Schedule and Enroll",
  },

  {
    id: 3,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691948031/original_r63am5.jpg",
    headline: "Discover Your True Power arts Training",
    body: "At Phoenix Martial Academy, we believe in customizing your martial arts journey to suit your goals and preferences. Our certified instructors will work closely with you. Whether you're focused on self-defense.",
    cta: "Start Your Personalized Training",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };
  return (
    <div className="frame relative">
      <div
        className="slider h-full w-full"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <div
            key={image.id}
            className="slide"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="slide-texts  -mt-10 wrapper flex flex-col gap-5 items-start justify-center  h-full text-light/80">
              <h1 className="text-4xl  w-[70vw] md:text-5xl lg:text-6xl font-bold text-accant1 space-font  uppercase overflow-hidden  ">
                {image.headline}
              </h1>
              <p className="text-sm md:text-lg w-[70vw]">{image.body}</p>

              <div className="mt-3">
                <button className="bg-accant1 text-light/80 py-3 px-6 rounded-lg w-full hover:bg-accant1/75 duration-300">
                  {image.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btns absolute  w-screen justify-center bottom-28 mx-auto z-[1] text-light/80 text-2xl flex gap-10 ">
        <button
          onClick={prevSlide}
          className="prev-btn w-12 h-10 lg:h-12 lg:w-16 flex justify-center items-center bg-accant1 border border-light/80 hover:bg-accant1/75 hover:text-light/80 duration-300"
        >
          <span>
            <MdArrowBackIosNew />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn w-12 h-10 lg:h-12 lg:w-16 flex justify-center items-center bg-accant1 border border-light/80 hover:bg-accant1/75 hover:text-light/80 duration-300"
        >
          <span>
            <MdArrowForwardIos />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
