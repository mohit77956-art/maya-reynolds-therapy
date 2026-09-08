const faqs = [
  {
    q: "Do you offer both in-person and online sessions?",
    a: "Yes. I see clients in person at my Santa Monica office, and I offer secure telehealth sessions for anyone located within California.",
  },
  {
    q: "What kind of therapy do you practice?",
    a: "I integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, tailored to what you're working through.",
  },
  {
    q: "Do you work with trauma?",
    a: "Yes — both single-incident trauma and more complex, long-standing patterns connected to childhood, relationships, or chronic stress. This work is paced carefully, with safety and stabilization as the priority.",
  },
  {
    q: "Who do you typically work with?",
    a: "Many of my clients are high-achieving, thoughtful adults — often entrepreneurs, creatives, or professionals — who feel functional on the outside but exhausted, anxious, or burned out underneath.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Common questions
          </h2>
        </div>
        <div className="md:col-span-2 divide-y divide-line">
          {faqs.map((item) => (
            <div key={item.q} className="py-6 first:pt-0">
              <h3 className="font-display text-lg text-ink mb-2">
                {item.q}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
