// src/components/GalleryLightbox.jsx
import React, { useEffect } from "react";

// ✅ add this
import logo from "../assets/logo.png";

const GOLD = "#000";

export default function GalleryLightbox({
  images = [],
  index = 0,
  onClose,
  onPrev,
  onNext,
  showLogo = true,
}) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onNext?.();
      if (e.key === "ArrowRight") onPrev?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  const src = images[index];

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm">
      {/* top bar */}
      <div className="absolute top-6 right-6 flex items-center gap-3 text-white/80">
        <button
          onClick={onClose}
          className="tracking-[0.25em] uppercase text-xs hover:text-white transition"
        >
          Close <span className="text-lg leading-none">×</span>
        </button>
      </div>

      {/* center stage */}
      <div className="h-full w-full px-4 py-16 flex items-center justify-center">
        <div className="relative w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-black">
            <img
              src={src}
              alt=""
              className="w-full max-h-[75vh] object-contain bg-black"
              draggable={false}
            />

            {/*  LOGO OVERLAY (top-center) */}
            {showLogo && (
              <div className="pointer-events-none absolute top-3 sm:top-6 left-1/2 -translate-x-1/2">
                <div
                  className="
        grid place-items-center rounded-full bg-white
        border border-black/10
        shadow-[0_10px_22px_rgba(0,0,0,0.45)]
        w-[46px] h-[46px]
        sm:w-[70px] sm:h-[70px]
        md:w-[100px] md:h-[100px]
      "
                >
                  <div
                    className="
          grid place-items-center rounded-full bg-white
          w-[38px] h-[38px]
          sm:w-[62px] sm:h-[62px]
          md:w-[90px] md:h-[90px]
        "
                  >
                    <img
                      src={logo}
                      alt="Elite Yachts"
                      className="
            w-5
            sm:w-7
            md:w-9
            opacity-95
          "
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* arrows */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 ring-1 ring-white/15 text-white/90 hover:bg-black/70 transition"
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 ring-1 ring-white/15 text-white/90 hover:bg-black/70 transition"
            aria-label="Next"
          >
            ›
          </button>

          {/* counter */}
          <div className="mt-6 text-center text-white/70 text-xs tracking-[0.35em]">
            {index + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}
