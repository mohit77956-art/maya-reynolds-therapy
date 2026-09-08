const tags = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "EMDR",
  "CBT",
  "Mindfulness",
  "Body-oriented work",
  "High achievers",
  "Entrepreneurs & creatives",
];

export default function Expertise() {
  return (
    <section className="py-16 md:py-24 bg-ink text-paper">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-2xl md:text-3xl mb-8">
          Areas of focus
        </h2>
        <ul className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <li key={tag}>
              <span
                className="inline-block text-[13px] md:text-sm tracking-wide
                border border-sage/50 text-paper px-4 py-2 rounded-card
                hover:border-ochre hover:text-ochre transition-colors
                cursor-default"
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
