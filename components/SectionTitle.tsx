"use client";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="overflow-hidden">
      <h2
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-2xl md:text-3xl uppercase text-center text-accant1/60 font-semibold tracking-wide"
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
