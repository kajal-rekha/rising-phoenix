import Image from "next/image";
import Button from "./Button";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691274557/pexels-photo-8612071_mpzkkd.webp",
    alt: "teacher train students",
    name: "John Smith",
    martials_art: "Karate",
    description:
      "John Smith is a dedicated martial artist with over 10 years of experience in Karate. He has won numerous regional and national championships and is passionate about teaching others the art of self-defense and discipline through Karate.",
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
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270324/pexels-photo-6778704_paivpp.webp",
    alt: "teacher train students",
    name: "Aya Nakamura",
    martials_art: "Brazilian Jiu-Jitsu",
    description:
      "Michael Anderson is a BJJ black belt and an experienced instructor. He has competed and won in various BJJ tournaments and is known for his technical expertise and passion for spreading the art of Brazilian Jiu-Jitsu to practitioners of all skill levels.",
    cta: "view details",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691310014/inst_goh_chee_meng_p3ts4h.webp",
    alt: "teacher train students",
    name: "Michael Anderson",
    martials_art: "Muay Thai",
    description:
      "John Smith is a dedicated martial artist with over 10 years of experience in Karate. He has won numerous regional and national championships and is passionate about teaching others the art of self-defense and discipline through Karate.",
    cta: "view details",
  },
];

const Intstructor = () => {
  return (
    <section id="instructor" className="wrapper section-padding">
      <h2 className="text-accant1 text-3xl font-medium text-center">
        Our Instructore
      </h2>
      <div className="cards grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20">
        {data.map((image) => (
          <div
            key={image.id}
            className="card w-full h-[30rem] rounded-xl overflow-hidden"
          >
            <div className="h-[15rem] object-cover overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                priority
                className="w-full h-full object-cover overflow-hidden  hover:scale-125 duration-500"
              />
            </div>
            <div>
              <h3>{image.name}</h3>
              <p>Martial Atrs {image.martials_art}</p>
              <p>{image.description}</p>
              <Button
                href="/instructore"
                placeholder={image.cta}
                color="green"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Intstructor;
