"use client";

import { useState } from "react";
import { useConsultationModal } from "./ConsultationModalContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { openModal } = useConsultationModal();

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#top" className="font-display text-xl text-ink">
          Dr. Maya Reynolds
          <span className="block text-[11px] tracking-wide text-muted font-body font-normal">
            PsyD, Licensed Clinical Psychologist
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink hover:text-ochre transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={openModal}
            className="text-sm bg-ink text-paper px-5 py-2.5 rounded-card hover:bg-moss transition-colors"
          >
            Book a Consultation
          </button>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-[1.5px] bg-ink transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-ink transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-ink transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="text-sm bg-ink text-paper px-5 py-2.5 rounded-card text-center"
            onClick={() => {
              setOpen(false);
              openModal();
            }}
          >
            Book a Consultation
          </button>
        </nav>
      )}
    </header>
  );
}
