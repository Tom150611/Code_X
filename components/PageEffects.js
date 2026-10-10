"use client";

import { useEffect } from "react";

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return undefined;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
    io.observe(item);
  });

  return () => io.disconnect();
}

function setupHeroParallax() {
  const hero = document.querySelector(".hero-stage");
  const heroCopy = document.querySelector(".hero-copy");
  if (!hero || !heroCopy) return undefined;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

  const onMove = (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroCopy.style.transform = `translate3d(${x * 16}px, ${y * 10}px, 0)`;
  };
  const onLeave = () => {
    heroCopy.style.transform = "";
  };

  hero.addEventListener("pointermove", onMove);
  hero.addEventListener("pointerleave", onLeave);

  return () => {
    hero.removeEventListener("pointermove", onMove);
    hero.removeEventListener("pointerleave", onLeave);
  };
}

export default function PageEffects() {
  useEffect(() => {
    const cleanups = [setupReveal(), setupHeroParallax()];
    return () => cleanups.forEach((cleanup) => cleanup?.());
  }, []);

  return null;
}
