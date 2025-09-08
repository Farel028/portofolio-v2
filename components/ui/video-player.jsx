"use client";
import { useEffect } from "react";
import { IconX } from "@tabler/icons-react";

export default function VideoPlayer({ open, onClose, src, title, poster }) {
  // ESC untuk close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Disable scroll saat modal terbuka
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[7000] bg-black/70 backdrop-blur-sm p-4 grid place-items-center"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={title || "Video preview"}
    >
      <div
        className="relative w-full max-w-3xl lg:max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-sm text-white hover:bg-black/90"
          aria-label="Close"
        >
          <IconX />
        </button>

        <video
          key={src} // reset playhead tiap video baru
          src={src}
          poster={poster}
          controls
          controlsList="nodownload noplaybackrate"
          preload="metadata"
          autoPlay
          playsInline
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
