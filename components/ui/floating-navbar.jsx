"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { IconHome, IconBriefcase, IconCode } from "@tabler/icons-react";

export default function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest < 10) return setVisible(true); // dekat top: tampil
    setVisible(latest <= prev); // turun=sembunyi, naik=tampil
  });

  const items = [
    { name: "Home", href: "#home", icon: <IconHome size={18} /> },
    {
      name: "Experience",
      href: "#experience",
      icon: <IconBriefcase size={18} />,
    },
    { name: "Projects", href: "#projects", icon: <IconCode size={18} /> },
  ];

  return (
    // WRAPPER PENUH LEBAR VIEWPORT → center pakai flex
    <div
      className="fixed inset-x-0 z-[5000] flex justify-center"
      // top: 1rem + safe-area (buat notch iOS)
      style={{ top: "calc(env(safe-area-inset-top, 0px) + 1rem)" }}
    >
      <AnimatePresence initial={false}>
        <motion.nav
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="sm:w-auto w-auto rounded-full border border-white/15
                     bg-neutral-900/70 text-white backdrop-blur-xl shadow-lg
                     px-3 py-2"
          role="navigation"
          aria-label="Main"
        >
          <ul className="flex items-center justify-center gap-3 sm:gap-5">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="flex items-center gap-2 rounded-full px-3 py-2 text-sm
                             hover:bg-white/10 transition-colors"
                >
                  <span className="sm:hidden">{it.icon}</span>
                  <span className="hidden sm:block">{it.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </AnimatePresence>
    </div>
  );
}
