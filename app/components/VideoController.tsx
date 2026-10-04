"use client";

import { useEffect } from "react";

// Plays the video of the opened popup (#prog-N) and pauses the rest.
export default function VideoController() {
  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      document.querySelectorAll<HTMLVideoElement>("video[data-popup]").forEach((v) => {
        if (v.dataset.popup === id) {
          v.currentTime = 0;
          v.muted = false;
          v.play().catch(() => {
            // browser blocked sound, so play muted instead
            v.muted = true;
            v.play().catch(() => {});
          });
        } else {
          v.pause();
        }
      });
    };

    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return null;
}