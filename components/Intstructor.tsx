import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691274557/pexels-photo-8612071_mpzkkd.webp",
    alt: "teacher train students",
    name: "John Smith",
    martials_art: "Karate",
    description:
      "John Smith is a dedicated martial artist with over 10 years of experience in Karate. He has numerous regional and national championships and is passionate about teaching others the art of self-defense and discipline through Karate.",
    cta: "view details",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691309516/pexels-photo-11740027_jvykf5.webp",
    alt: "teacher train students",
    name: "Emily Johnson",
    martials_art: "Taekwondo",
    description:
      "Emily Johnson is a skilled Taekwondo practitioner with a black belt rank. She has represented her country in international Taekwondo championships and believes in the mental and physical benefits that this martial art brings to people of all ages.",
    cta: "view details",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691274581/side-view-male-martial-arts-instructor-practice-hall_23-2148845949_hiq3ra.avif",
    alt: "teacher train students",
    name: "Michael Anderson",
    martials_art: "Brazilian Jiu-Jitsu",
    description:
      "Michael Anderson is a dedicated martial artist with over 10 years of experience in Karate. He has won numerous regional and national championships and is passionate about teaching others the art of self-defense and discipline through Karate.",
    cta: "view details",
  },
];

const Intstructor = () => {
  return (
    <section
      id="instructor"
      className="section-padding border-b border-light/20"
    >
      <SectionTitle title="Our Instructore" />
      <div className=" wrapper cards grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 text-light/90">
        {data.map((image) => (
          <div
            key={image.id}
            className="card w-full h-[32rem] lg:h-[34rem] rounded-xl overflow-hidden  shadow-lg"
          >
            <div
              className="h-[18rem] object-cover overflow-hidden"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                priority
                className="w-full h-full object-cover overflow-hidden  hover:scale-125 duration-700"
              />
            </div>
            <div className="card-details p-5 space-y-2 lg:text-lg">
              <h3
                className="tracking-wide"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Intructore:{" "}
                <span className="text-accant1 font-semibold">{image.name}</span>
              </h3>
              <p
                className="tracking-wide"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Martial Atrs: {image.martials_art}
              </p>
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                {image.description.substring(0, 100)}...
              </p>
              <div
                className="pt-5 tracking-wide"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Button
                  href="/instructore"
                  placeholder={image.cta}
                  color="green"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Intstructor;
