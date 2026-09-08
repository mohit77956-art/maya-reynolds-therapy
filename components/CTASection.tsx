export default function CTASection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-surface">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-display italic text-moss text-lg mb-4">
            Ready when you are
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 leading-tight">
            Reaching out is often the hardest part. Let&apos;s make it easy.
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-md">
            Schedule a free 15-minute consultation to talk through what
            you&apos;re facing and whether we&apos;re a good fit — no
            pressure, no obligation.
          </p>
          <a
            href="mailto:hello@mayareynoldstherapy.com"
            className="inline-block bg-ink text-paper px-7 py-3.5 rounded-card hover:bg-moss transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-card">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80"
            alt="Quiet forest path, representing the start of a steadier path forward"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
