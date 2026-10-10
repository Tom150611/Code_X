import { photo } from "@/lib/assets";

const shotClasses = ["shot tall", "shot", "shot", "shot wide"];

export default function Mosaic({ label, shots }) {
  return (
    <section className="mosaic reveal" aria-label={label}>
      {shots.map((shot, i) => (
        <figure key={shot.image} className={shotClasses[i] ?? "shot"}>
          <img src={photo(shot.image)} alt={shot.alt} />
        </figure>
      ))}
    </section>
  );
}
