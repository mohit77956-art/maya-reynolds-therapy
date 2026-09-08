import Image from "next/image";

const services = [
  {
    title: "Anxiety & Panic",
    description:
      "For the constant worry, racing thoughts, and physical tension that make it hard to switch off — even when things look fine from the outside. We work to understand what's driving the anxiety and build a calmer, more regulated baseline.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80",
    alt: "Sunlit plant beside a window, evoking a calm therapy space",
  },
  {
    title: "Trauma & EMDR Therapy",
    description:
      "Whether from a single event or long-standing patterns rooted in childhood or chronic stress, trauma work here is paced carefully — with an emphasis on safety and stabilization using EMDR and body-oriented techniques.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    alt: "Quiet natural path, representing a gentle pace of healing",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For entrepreneurs, creatives, and professionals who've pushed through stress for years and feel disconnected from themselves. Therapy becomes a space to slow down, reconnect, and build more sustainable ways of living and working.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Hands writing in a journal, representing reflection and reconnection",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            How I can help
          </h2>
          <p className="text-muted leading-relaxed">
            Every client is different, but most of my work falls into three
            areas. If you don&apos;t see exactly what you&apos;re facing
            below, reach out — we can talk through whether it&apos;s a good
            fit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card mb-5">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">
                {service.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
