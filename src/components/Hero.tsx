import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section id="hem" className="relative overflow-hidden py-24"
      style={{background: "linear-gradient(135deg, var(--accent) 0%, #FDF2F8 40%, #EDE9FE 100%)"}}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-white/70 p-10 shadow-xl backdrop-blur-sm sm:p-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <span className="text-5xl" aria-hidden>🎨</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--primary)] sm:text-5xl">
                Färg, klipp &
                <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                  balayage vid domkyrkan
                </span>
              </h1>
              <p className="mt-6 text-lg text-[var(--foreground)]/75">{business.description}</p>
            </div>
            <div className="w-full max-w-xs rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 text-center text-white lg:w-auto">
              <p className="text-4xl font-bold">{business.rating}</p>
              <p className="text-sm opacity-80">av 5 stjärnor</p>
              <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)]">
                Boka färgning
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
