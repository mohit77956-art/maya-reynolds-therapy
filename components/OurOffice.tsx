export default function OurOffice() {
  return (
    <section id="office" className="py-16 md:py-24 bg-surface">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-12">
          <p className="font-display italic text-moss text-lg mb-4">
            Our Office
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-5 leading-tight">
            A calm space in Santa Monica.
          </h2>
          <p className="text-muted leading-relaxed">
            My office is a quiet, private space designed to feel calming and
            grounding, with natural light and a comfortable, uncluttered
            environment. Clients often tell me the space itself helps them
            feel more at ease the moment they arrive — that sense of privacy
            and safety matters as much as anything we talk about.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-5 md:gap-6 mb-10">
          <div className="md:col-span-3 aspect-[4/3] overflow-hidden rounded-card">
            <img
              src="/images/office-shelf.jpg"
              alt="Warm, calm therapy office in Santa Monica with soft seating and natural light"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 aspect-[4/3] overflow-hidden rounded-card">
            <img
              src="/images/office-living.jpg"
              alt="Private, uncluttered seating area in Dr. Reynolds' Santa Monica office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 border-t border-line pt-8">
          <div>
            <h3 className="font-display text-lg text-ink mb-1.5">
              Where we&apos;ll meet
            </h3>
            <p className="text-muted text-[15px] leading-relaxed">
              123 W 45th Street, Santa Monica, CA 90401
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-ink mb-1.5">
              Session format
            </h3>
            <p className="text-muted text-[15px] leading-relaxed">
              In-person from Santa Monica, or secure telehealth from
              anywhere in California.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-ink mb-1.5">
              What to expect
            </h3>
            <p className="text-muted text-[15px] leading-relaxed">
              Privacy, comfort, and a space with nothing to prove — just
              somewhere to slow down.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
