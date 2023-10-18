import { martialsarts } from "@/data/martialsArt";

const MartialsArtDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;
  return (
    <main className=" mt-40 h-screen">
      <div>
        {martialsarts.map((martialart) => (
          <div key={martialart.id}>
            <p>{martialart.body2}</p>
            <p className="text-5xl">{martialart.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MartialsArtDetailsPage;
