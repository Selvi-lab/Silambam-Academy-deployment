"use client";
import { useEffect } from "react";

export default function MobileFx() {
  useEffect(() => {
    // scroll reveal (works on every phone)
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    // close the mobile menu after tapping a link
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