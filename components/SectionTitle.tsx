"use client";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-2xl md:text-3xl uppercase text-center text-accant1 font-semibold tracking-wide">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
