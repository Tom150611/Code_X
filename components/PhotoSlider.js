"use client";

import { useEffect, useRef, useState } from "react";
import { photo } from "@/lib/assets";

const AUTOPLAY_MS = 3800;

function slidePosition(i, index, count) {
  let pos = i - index;
  const half = Math.floor(count / 2);
  if (pos > half) pos -= count;
  if (pos < -half) pos += count;
  return pos;
}

export default function PhotoSlider({ slides, label = "Thư viện ảnh" }) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);

  const go = (nextIndex) => setIndex((nextIndex + count) % count);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  return (
    <section
      className="photo-slider"
      data-slider=""
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(event) => {
        startX.current = event.clientX;
      }}
      onPointerUp={(event) => {
        const delta = event.clientX - startX.current;
        if (Math.abs(delta) < 40) return;
        go(index + (delta < 0 ? 1 : -1));
      }}
    >
      <div className="slider-stage">
        {slides.map((slide, i) => (
          <figure key={slide.image} className="slide" data-pos={slidePosition(i, index, count)}>
            <img src={photo(slide.image)} alt={slide.alt} />
            <figcaption>{slide.caption}</figcaption>
          </figure>
        ))}
      </div>
      <button className="slider-nav prev" type="button" aria-label="Ảnh trước" onClick={() => go(index - 1)}></button>
      <button className="slider-nav next" type="button" aria-label="Ảnh sau" onClick={() => go(index + 1)}></button>
      <div className="slider-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Ảnh ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
            onClick={() => go(i)}
          ></button>
        ))}
      </div>
    </section>
  );
}
