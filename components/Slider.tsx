"use client";

import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691094495/1.23-RAE-PMA-_lzijsy.webp",
    headline: "Master Martial Arts at Phoenix Academy",
    body: "Welcome to Phoenix Martial Academy, where ancient traditions meet modern techniques. Our academy is dedicated to empowering individuals of all ages with the knowledge and skills of various martial arts disciplines. Our experienced instructors will guide you on a transformative journey.",
    cta: "Enroll Now for a Free Trial Class",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691094475/pexels-photo-7988769-1_vvaq7a.jpg",
    headline: "Discover Diverse Martial Arts Classes",
    body: "At Phoenix Martial Academy, we offer a wide range of classes to cater to different interests and skill levels. Whether you're a beginner or an experienced practitioner, you'll find the perfect class to enhance your martial arts journey.Each class is thoughtfully designed to provide a comprehensive learning experience.",
    cta: "View Class Schedule and Enroll",
  },

  {
    id: 3,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691095252/216749_zpamcx.jpg",
    headline: "Empower Through Personalized Training",
    body: "At Phoenix Martial Academy, we believe in customizing your martial arts journey to suit your goals and preferences. Our certified instructors will work closely with you. Whether you're focused on self-defense, competition, or overall fitness, our personalized approach ensures you achieve your aspirations.",
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
    <div className="frame relative ">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <div
            className="slide h-full overflow-hidden"
            style={{ backgroundImage: `url(${image.src})` }}
            key={image.id}
          >
            <div className="slide-texts container py-10 mx-auto flex flex-col items-start justify-center h-full gap-5 text-light">
              <h1 className="text-4xl text-accant1 md:text-5xl lg:text-6xl font-bold space-font w-full uppercase">
                {image.headline}
              </h1>

              <p className="sm:w-full lg:w-2/3 text-sm md:text-lg w-full">
                {image.body}
              </p>

              <div className="mt-3">
                <button className="bg-accant1 text-white py-3 px-6 rounded-lg w-full hover:bg-accant1/75 duration-300">
                  {image.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btns absolute w-screen justify-center bottom-20 m-auto  z-[1] text-white text-2xl flex gap-10 ">
        <button
          onClick={prevSlide}
          className="prev-btn w-14 h-12 lg:h-14 lg:w-20 flex justify-center items-center bg-accant1 text-white border border-white hover:bg-accant1/75 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <MdArrowBackIosNew />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn  w-14 h-12 lg:h-14 lg:w-20 flex justify-center items-center bg-accant1 text-white border border-white hover:bg-accant1/75 hover:text-gray-200 hover:border-gray-200 duration-300"
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
