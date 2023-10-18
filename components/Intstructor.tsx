import { instructors } from "@/data/instructors";
import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const Intstructor = () => {
  return (
    <section
      id="instructor"
      className="section-padding border-b border-light/20"
    >
      <SectionTitle title="Our Instructore" />
      <div className=" wrapper cards grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 text-light/90">
        {instructors.map((image) => (
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
                  href={`/instructor/${instructors.id}`}
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
