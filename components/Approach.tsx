export default function Approach() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="aspect-[4/3] overflow-hidden rounded-card order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80"
            alt="Calm mountain path at dusk, representing a steady therapeutic journey"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="font-display italic text-moss text-lg mb-4">
            My approach
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 leading-tight">
            Practical tools, with room for real depth.
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I believe therapy works best when you feel respected,
            understood, and actively involved in the process. Sometimes
            we&apos;ll gently look at things from a different angle;
            other times we&apos;ll slow down and sit with what&apos;s
            underneath. Either way, you&apos;ll leave with something to
            practice in daily life, not just something to talk about.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            I offer both in-person sessions from my Santa Monica office and
            secure telehealth for clients located anywhere in California —
            whichever fits your life right now.
          </p>
          <a
            href="#contact"
            className="inline-block border border-ink text-ink px-7 py-3.5 rounded-card hover:bg-surface transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
