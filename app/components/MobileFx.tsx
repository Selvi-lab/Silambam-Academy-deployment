"use client";
import { useEffect } from "react";

export default function MobileFx() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => {
      // already on screen at load: leave visible, no flash
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) return;
      el.classList.add("reveal");
      io.observe(el);
    });

    // mobile menu: close after tapping a link
    const closeMenu = (ev: MouseEvent) => {
      const a = (ev.target as HTMLElement).closest("header details a");
      a?.closest("details")?.removeAttribute("open");
    };
    document.addEventListener("click", closeMenu);

    return () => {
      io.disconnect();
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return null;
}