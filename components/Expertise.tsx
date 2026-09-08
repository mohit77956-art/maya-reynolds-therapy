const tags = [
  "anxiety",
  "panic",
  "trauma",
  "burnout",
  "perfectionism",
  "EMDR",
  "CBT",
  "mindfulness",
  "body-oriented work",
  "high achievers",
  "entrepreneurs & creatives",
];

export default function Expertise() {
  return (
    <section className="py-16 md:py-20 bg-ink text-paper">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-2xl md:text-3xl mb-8">
          Areas of focus
        </h2>
        <div className="flex flex-wrap gap-x-3 gap-y-4 text-lg md:text-xl font-display italic">
          {tags.map((tag, i) => (
            <span key={tag} className="flex items-center">
              {tag}
              {i < tags.length - 1 && (
                <span className="mx-3 text-sage not-italic font-body text-sm">
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
