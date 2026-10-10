import { photo } from "@/lib/assets";

export default function HeroStage({ image, children }) {
  return (
    <section className="hero-stage">
      <img className="hero-bg" src={photo(image)} alt="" />
      <div className="hero-veil"></div>
      {children}
    </section>
  );
}
