import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import g1 from "@/assets/gym-1.jpg";
import g3 from "@/assets/gym-3.jpg";
import g4 from "@/assets/gym-4.jpg";
import g6 from "@/assets/gym-6.jpg";
import g7 from "@/assets/gym-7.jpg";
import g8 from "@/assets/gym-8.jpg";
import g9 from "@/assets/gym-9.jpg";
import g11 from "@/assets/gym-11.jpg";
import g13 from "@/assets/gym-13.jpg";
import g14 from "@/assets/gym-14.jpg";
import g15 from "@/assets/gym-15.jpg";
import g16 from "@/assets/gym-16.jpg";
import g17 from "@/assets/gym-17.jpg";
import g18 from "@/assets/gym-18.jpg";

const IMAGES: { src: string; alt: string }[] = [
  { src: g1, alt: "Gym floor with equipment and overhead lighting" },
  { src: g17, alt: "Panoramic view of training floor" },
  { src: g4, alt: "Strength training zone with mirrors" },
  { src: g14, alt: "Red squat rack with punching bag" },
  { src: g15, alt: "Incline dumbbell press station" },
  { src: g3, alt: "Hammer-strength machines lined up" },
  { src: g16, alt: "Chest press machine" },
  { src: g6, alt: "Loaded barbell with gym floor in background" },
  { src: g13, alt: "Red cable functional trainer machine" },
  { src: g7, alt: "Olympic plates and red rack" },
  { src: g18, alt: "Stair climber cardio equipment" },
  { src: g9, alt: "Body composition analyzer" },
  { src: g8, alt: "Branded team jersey display" },
  { src: g11, alt: "Storefront at night" },
];

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (idx === null) return;
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i === null ? null : (i + 1) % IMAGES.length));
      if (e.key === "ArrowLeft") setIdx((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = idx !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-card/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Gallery
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase text-balance">
            Inside Our Gym
          </h2>
          <div className="mt-6 mx-auto h-1 w-20 bg-gradient-red rounded-full" />
          <p className="mt-6 text-muted-foreground">
            Step inside the floor where Surat hustles. Real photos. Real space.
          </p>
        </div>

        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIdx(i)}
              className="group mb-4 block w-full overflow-hidden rounded-lg border border-border bg-card relative break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </div>

      {idx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIdx(null)}
        >
          <button
            className="absolute top-5 right-5 text-foreground/80 hover:text-primary p-2"
            onClick={() => setIdx(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-3 sm:left-6 text-foreground/80 hover:text-primary p-2"
            onClick={(e) => { e.stopPropagation(); setIdx((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length)); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            className="absolute right-3 sm:right-6 text-foreground/80 hover:text-primary p-2"
            onClick={(e) => { e.stopPropagation(); setIdx((i) => (i === null ? null : (i + 1) % IMAGES.length)); }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
          <img
            src={IMAGES[idx].src}
            alt={IMAGES[idx].alt}
            className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
