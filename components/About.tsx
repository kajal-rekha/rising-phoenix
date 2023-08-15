import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className=" section-padding border-b border-light/20">
      <SectionTitle title="about us" />
      <div className="wrapper grid grid-col lg:grid-cols-2 gap-14 items-center justify-center mt-20">
        <div className="left text-light/80 text-xl">
          <p data-aos="fade-up" data-aos-duration="1000" className="mt-3">
            {`Rising Phoenix is a captivating online martial arts platform that has taken the virtual realm by storm. With its innovative approach to martial arts training, it offers enthusiasts an immersive and dynamic experience like never before. Through high-quality video tutorials and interactive live classes, Rising Phoenix brings a wide array of martial arts disciplines right to the comfort of your home.`}
          </p>
          <p data-aos="fade-up" data-aos-duration="1500" className="mt-3">
            {`Whether you're a beginner looking to embark on a martial arts
            journey or an experienced practitioner seeking to refine your
            skills,The platform boasts a
            team of accomplished and skilled martial artists who guide and
            instruct with precision, ensuring that each participant receives
            personalized attention and guidance. The platform's user-friendly interface and accessibility on various devices`}
          </p>
          <p data-aos="fade-up" data-aos-duration="2000" className="mt-3">
            {`make it a convenient and engaging avenue for martial arts enthusiasts of all levels. Beginners find comprehensive tutorials that lay a strong foundation, while seasoned practitioners benefit from advanced insights and techniques. The instructors' expertise spans diverse disciplines, providing a well-rounded experience`}
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-duration="2000">
            <Button href="/read more" placeholder="Read More" color="green" />
          </div>
        </div>
        <div className="right h-[100%] w-[100%]">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1691937292/Aikido-martial-art_u1xou0.jpg"
            alt="academy"
            width={800}
            height={800}
            priority
            className="rounded-lg w-full h-full"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
