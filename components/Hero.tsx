import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="pt-14 md:pt-20 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="font-display italic text-moss text-lg mb-5">
            In-person in Santa Monica, and telehealth across California
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink mb-6">
            A steadier place to think, feel, and finally rest.
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-md mb-8">
            Therapy for anxiety, trauma, and burnout — for high-achieving
            adults who look fine on the outside but feel exhausted, on edge,
            or stuck in their own head.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-ink text-paper px-7 py-3.5 rounded-card hover:bg-moss transition-colors"
            >
              Schedule a Free Consultation
            </a>
            <a
              href="#about"
              className="border border-ink text-ink px-7 py-3.5 rounded-card hover:bg-surface transition-colors"
            >
              Meet Dr. Reynolds
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card">
            <Image
              src="/images/maya-portrait.jpg"
              alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-6 -left-6 bg-paper border border-line rounded-card px-6 py-4 max-w-[220px]">
            <p className="font-display text-2xl text-ink leading-none mb-1">
              CBT · EMDR
            </p>
            <p className="text-xs text-muted">
              Evidence-based, body-aware, and paced to feel safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
