import Image from "next/image";

const About = () => {
  return (
    <section id="about" className=" section-padding border-b border-light/20">
      <h2 className="uppercase text-3xl font-semibold text-accant1 text-center">
        About Rising Phoenix
      </h2>
      <div className="wrapper grid grid-col lg:grid-cols-2 gap-14 items-center justify-center mt-20">
        <div className="left">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1691863954/800px-%D8%AD%D8%B1%DA%A9%D8%A7%D8%AA_%D8%A7%D9%86%D9%81%D8%B1%D8%A7%D8%AF%DB%8C_%DA%A9%D9%86%DA%AF_%D9%81%D9%88__%D9%85%D8%AD%D9%85%D8%AF_%D8%A7%DA%A9%D8%A8%D8%B1%DB%8C_Kung_fu_in_iran__Qom__Mohammad_Akbari_27_fpysww.jpg"
            alt="academy"
            width={800}
            height={800}
            className="rounded-lg w-full h-full"
          />
        </div>
        <div className="right text-light/80 text-lg">
          <p>
            {`Rising Phoenix is a captivating online martial arts platform that has taken the virtual realm by storm. With its innovative approach to martial arts training, it offers enthusiasts an immersive and dynamic experience like never before. Through high-quality video tutorials and interactive live classes, Rising Phoenix brings a wide array of martial arts disciplines right to the comfort of your home.`}
          </p>
          <p>
            {`Whether you're a beginner looking to embark on a martial arts
            journey or an experienced practitioner seeking to refine your
            skills,The platform boasts a
            team of accomplished and skilled martial artists who guide and
            instruct with precision, ensuring that each participant receives
            personalized attention and guidance.`}
          </p>
          <p>{`Rising Phoenix's community aspect is also a highlight, fostering a sense of camaraderie among members through forums, discussions, and virtual events. The platform's user-friendly interface and accessibility on various devices make it convenient for users to engage in training anytime, anywhere.`}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
