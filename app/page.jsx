"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import FloatingNavbar from "../components/ui/floating-navbar";
import VideoPlayer from "../components/ui/video-player";

const experiences = [
  {
    role: "RPL SMKn 2 Surabaya",
    place: "sebagai siswa aktif",
    year: "2024-sekarang",
  },
  {
    role: "Multimedia SMPn 26 Surabaya",
    place: "sebagai asisten pengajar",
    year: "2022–2024",
  },
];

const projects = [
  {
    title: "Portofolio V1",
    description: "Menggunakan HTML, CSS, JS basic",
    liveUrl: "https://farelas.netlify.app",
    poster: "/photos/portofoliov1.png",
    codeUrl: "https://github.com/Farel028/smp",
  },
  {
    title: "Secure Notepad",
    description: "Menggunakan HTML, CSS, JS, php basic",
    liveUrl: "https://notepad.ct.ws",
    poster: "/photos/notepad.png",
    codeUrl: "https://github.com/Farel028/notepad-php",
  },
  {
    title: "Growtopia App",
    description:
      "Frontend menggunakan Vite + React, Tailwind, Framer Motion, untuk backend menggunakan Supabase, dan untuk convert apk menggunakan Capacitor",
    liveUrl: "",
    poster: "/photos/gtapp.png",
    codeUrl: "https://github.com/Farel028/gtapp",
  },
  {
    title: "Bot Whatsapp",
    description: "Menggunakan Nodejs + Baileys",
    liveVideo: "/videos/botwa.mp4",
    poster: "/photos/botwa.png",
    codeUrl: "https://github.com/Farel028/kas",
  },
];

export default function Page() {
  const [preview, setPreview] = useState(null); // string | null
  const overlayRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current || !logoRef.current) return;
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.4, ease: "power4.out" }
    );
    tl.to(logoRef.current, {
      xPercent: isMobile ? 2000 : 1300,
      yPercent: 900,
      scale: isMobile ? 120 : 80,
      duration: 5.2,
      ease: "power4.inOut",
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          overlayRef.current.style.display = "none";
        },
      },
      "<"
    );
    return () => tl.kill();
  }, []);

  return (
    <main className="relative">
      <div ref={overlayRef} className="intro-overlay">
        <h1 ref={logoRef} className="intro-logo text-white">
          FAREL AS
        </h1>
      </div>

      <FloatingNavbar />

      {/* Home / About (center beneran) */}
      <section
        id="home"
        className="landing relative min-h-[100svh] hero-bg grid place-items-center"
      >
        <div className="asteroid"></div>
        <div className="asteroid"></div>
        <div className="asteroid"></div>
        {/* gradient bawah biar depth */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950   to-transparent" />

        {/* content */}
        <div className="relative z-10 text-center px-6 pt-15">
          {/* pt-20 = ruang aman di bawah navbar tetap, tapi tetap center karena grid */}
          <p className="text-sm uppercase tracking-[0.25em] text-white/70">
            Hi, I’m
          </p>
          <h2 className="mt-2 text-5xl sm:text-7xl font-extrabold">Farel AS</h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-balance">
            Dari <strong>Surabaya</strong>, sekolah di
            <strong> SMK Negeri 2 Surabaya</strong>. <br /> Suka bikin
            aplikasi/web sesuai dengan kebutuhan pribadi.
          </p>
        </div>
      </section>

      {/* Experience (timeline) */}
      <section id="experience" className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <h3 className="text-2xl font-semibold mb-10">Experience</h3>

          <ul className="relative border-s border-white/10 pl-6 space-y-8">
            {experiences.map((e, i) => (
              <motion.li
                key={e.role}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: i * 0.05,
                }}
                className="relative"
              >
                {/* dot */}
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border border-white/30 bg-neutral-900 shadow-[0_0_0_3px_rgba(255,255,255,0.05)]" />
                {/* card */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold">{e.role}</p>
                    <span className="text-xs text-white/60">{e.year}</span>
                  </div>
                  <p className="text-white/70 mt-1">{e.place}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section id="projects" className="py-24 bg-neutral-950/90">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-2xl font-semibold mb-8">Projects</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-white/10 grid place-items-center text-white/60">
                  {p.poster ? (
                    // tampilkan poster kalau ada
                    <img
                      src={p.poster}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "Thumbnail"
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-white/70 mt-1 flex-1">{p.description}</p>

                  <div className="mt-4 flex gap-2">
                    {p.liveVideo ? (
                      <button
                        onClick={() => setPreview(p.liveVideo)}
                        className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                      >
                        Live Preview
                      </button>
                    ) : p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                      >
                        Live Preview
                      </a>
                    ) : null}

                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Video Player Overlay ===== */}
      <VideoPlayer
        open={Boolean(preview)}
        src={preview || ""}
        title="Project preview"
        onClose={() => setPreview(null)}
      />

      <footer className="py-10 text-center text-white/50 text-sm bg-neutral-950">
        © {new Date().getFullYear()} Farel AS
      </footer>
    </main>
  );
}
