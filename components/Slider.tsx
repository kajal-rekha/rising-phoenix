"use client";

import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Button from "./Button";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692211757/UZ6MSNyJRH6QUHJFrwFa_thao-le-hoang-6lTre65C00E-unsplash_wikq0m.jpg",
    headline: "Master Martial Arts at Phoenix Academy",
    body: "Welcome to Phoenix Martial Academy, where ancient traditions meet modern techniques. Our academy is dedicated to empowering individuals of all ages with the knowledge and skills of various martial arts disciplines.",
    cta: "Enroll Now for a Free Trial Class",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692212718/pexels-cottonbro-studio-7792259_nnl4ki.jpg",
    headline: "Discover Diverse Martial Arts Classes",
    body: "At Phoenix Martial Academy, we offer a wide range of classes to cater to different interests and skill levels. Whether you're a beginner or an experienced practitioner, you'll find the perfect class to enhance your martial arts journey.",
    cta: "View Class Schedule and Enroll",
  },

  {
    id: 3,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691948026/IMG_4620-e1527127158795_su3e7s.webp",
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
            className="slide w-full h-full object-cover"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="slide-texts  -mt-14 lg:-mt-10 wrapper flex flex-col gap-5 items-start justify-center  h-full text-light/80">
              <div>
                <h1
                  className="heading text-3xl lg:w-[60vw] w-full md:text-5xl lg:text-6xl font-bold text-accant1 space-font uppercase overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  {image.headline}
                </h1>

                <p
                  className="text-lg mt-5 md:text-xl lg:w-[50vw] w-full"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {image.body}
                </p>
              </div>
              <div className="mt-3" data-aos="fade-up" data-aos-duration="3000">
                <Button href="/" placeholder={image.cta} color="green" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btns absolute w-screen justify-center bottom-28 mx-auto z-[1] text-light/80 text-2xl flex gap-8 ">
        <div>
          <button
            onClick={prevSlide}
            className="prev-btn w-12 h-10 lg:h-12 lg:w-16 flex justify-center items-center bg-accant1/80 border border-light/80 hover:bg-accant1/90 hover:text-light/80 duration-300"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500"
          >
            <span>
              <MdArrowBackIosNew />
            </span>
          </button>
        </div>
        <div>
          <button
            onClick={nextSlide}
            className="next-btn w-12 h-10 lg:h-12 lg:w-16 flex justify-center items-center bg-accant1/80 border border-light/80 hover:bg-accant1/90 hover:text-light/80 duration-300"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500"
          >
            <span>
              <MdArrowForwardIos />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
