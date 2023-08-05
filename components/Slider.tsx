"use client";

import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691094495/1.23-RAE-PMA-_lzijsy.webp",
    headline: "Master Martial Arts at Phoenix Academy",
    body: "Welcome to Phoenix Martial Academy, where ancient traditions meet modern techniques. Our academy is dedicated to empowering individuals of all ages with the knowledge and skills of various martial arts disciplines.",
    cta: "Enroll Now for a Free Trial Class",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691094475/pexels-photo-7988769-1_vvaq7a.jpg",
    headline: "Discover Diverse Martial Arts Classes",
    body: "At Phoenix Martial Academy, we offer a wide range of classes to cater to different interests and skill levels. Whether you're a beginner or an experienced practitioner, you'll find the perfect class to enhance your martial arts journey.",
    cta: "View Class Schedule and Enroll",
  },

  {
    id: 3,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691095252/216749_zpamcx.jpg",
    headline: "Discover Your True Power arts Training",
    body: "At Phoenix Martial Academy, we believe in customizing your martial arts journey to suit your goals and preferences. Our certified instructors will work closely with you. Whether you're focused on self-defense.",
    cta: "Start Your Personalized Training",
  },
];

const Slide = () => {
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
        className="slider mt-20"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <div
            className="slide wrapper h-full grid grid-cols md:grid-cols-2 gap-10 overflow-hidden"
            key={image.id}
          >
            <div className="slide-texts flex flex-col items-start justify-center w-full h-full gap-5 text-light/80">
              <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold text-accant1 space-font  uppercase">
                {image.headline}
              </h1>

              <p className="w-full text-sm md:text-lg">{image.body}</p>

              <div className="mt-3">
                <button className="bg-accant1 text-light/80 py-3 px-6 rounded-lg w-full hover:bg-accant1/75 duration-300">
                  {image.cta}
                </button>
              </div>
            </div>
            <div className=" w-[90%] h-[80%]">
              <div className="w-full h-full">
                <Image
                  src={image.src}
                  alt="hero-image"
                  width={700}
                  height={700}
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btns absolute  w-screen justify-center bottom-0 mx-auto  z-[1] text-light/80 text-2xl flex gap-10 ">
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

export default Slide;
