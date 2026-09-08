export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-14">
      <div className="max-w-content mx-auto px-6 md:px-10 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-xl mb-2">Dr. Maya Reynolds, PsyD</p>
          <p className="text-sm text-sage leading-relaxed">
            Licensed Clinical Psychologist
            <br />
            (fictional practice for demonstration purposes)
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-sage mb-3">
            Office
          </p>
          <p className="text-sm leading-relaxed">
            123 W 45th Street
            <br />
            Santa Monica, CA 90401
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-sage mb-3">
            Navigate
          </p>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="#about" className="hover:text-sage transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-sage transition-colors">
              Services
            </a>
            <a href="#office" className="hover:text-sage transition-colors">
              Our Office
            </a>
            <a href="#contact" className="hover:text-sage transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 mt-10 pt-6 border-t border-moss/40 text-xs text-sage">
        Site built as part of a front-end internship assignment. Dr. Maya
        Reynolds is a fictional persona used for demonstration purposes only.
      </div>
    </footer>
  );
}
