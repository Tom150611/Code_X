import { photo } from "@/lib/assets";

// The track is rendered twice so the CSS animation can loop seamlessly.
export default function PhotoMarquee({ images, label }) {
  const a11y = label ? { "aria-label": label } : { "aria-hidden": "true" };

  return (
    <section className="photo-marquee" {...a11y}>
      <div className="marquee-track">
        {[...images, ...images].map((image, i) => (
          <img key={`${image}-${i}`} src={photo(image)} alt="" />
        ))}
      </div>
    </section>
  );
}
