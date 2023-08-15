import Image from "next/image";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270343/pexels-photo-6339358_k9d2zm.jpg",
    alt: "teacher train students",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270066/pexels-photo-6765030_onj0at.webp",
    alt: "teacher train students",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270332/pexels-photo-7780216_sjlxg7.jpg",
    alt: "teacher train students",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270228/pexels-photo-8612586_a4ez3g.jpg",
    alt: "teacher train students",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270239/pexels-photo-7988374_modwjz.webp",
    alt: "teacher train students",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270115/pexels-photo-8041992_lpbe3g.webp",
    alt: "teacher train students",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270101/pexels-photo-7991198_wrmh2f.webp",
    alt: "teacher train students",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270053/pexels-photo-7792245_gytdn2.webp",
    alt: "teacher train students",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270316/pexels-photo-7045607_irhhh7.jpg",
    alt: "teacher train students",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270300/free-photo-of-man-people-sport-smoke_tmnpph.jpg",
    alt: "teacher train students",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270035/pexels-photo-2628207_b4fc7b.webp",
    alt: "teacher train students",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1691270251/pexels-photo-7045466_kktcsp.jpg",
    alt: "teacher train students",
  },
];

const GalleryItem = () => {
  return (
    <section className="wrapper section-padding">
      <SectionTitle title="gallery" />
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20">
        {data.map((image) => (
          <div
            key={image.id}
            className="w-full h-[25rem] rounded-xl overflow-hidden  "
          >
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover hover:scale-125 duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryItem;
