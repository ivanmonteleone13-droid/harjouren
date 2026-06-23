import { business } from "@/lib/business";
import TrustBadges from "@/components/TrustBadges";

export default function Hero() {
  const heroImage = "heroImage" in business ? business.heroImage : null;

  return (
    <section
      id="hem"
      className="relative min-h-[90vh] overflow-hidden bg-[var(--dark)] text-white"
    >
      <div className="absolute inset-0 lg:grid lg:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] lg:block" aria-hidden />
        <div className="relative min-h-[320px] lg:min-h-full">
          {heroImage ? (
            <>
              <img
                src={heroImage}
                alt={`${business.name} — salong på ${business.address.street}, ${business.address.city}`}
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)]/80 via-transparent to-[var(--primary)]/20 lg:bg-gradient-to-l lg:from-transparent lg:via-[var(--dark)]/30 lg:to-[var(--dark)]/70" aria-hidden />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)]/30" aria-hidden />
          )}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[var(--secondary)] ring-1 ring-white/20 backdrop-blur-sm">
            <span aria-hidden>★</span>
            {business.rating}/5 · {business.reviewCount}+ omdömen
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Färg, klipp &amp;
            <span className="block bg-gradient-to-r from-[var(--secondary)] to-white bg-clip-text text-transparent">
              balayage vid domkyrkan
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85">{business.description}</p>
          <TrustBadges />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--secondary)] px-8 py-4 font-semibold text-[var(--dark)] shadow-lg transition hover:opacity-90"
            >
              Boka färgning
            </a>
            <a
              href={business.phoneLink}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Ring {business.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-md lg:ml-auto">
            <p className="text-5xl font-bold text-[var(--secondary)]">{business.rating}</p>
            <p className="mt-2 text-sm text-white/75">av 5 stjärnor på Bokadirekt</p>
            <p className="mt-1 text-xs text-white/50">{business.reviewCount}+ verifierade omdömen</p>
          </div>
          {heroImage ? (
            <div className="hidden w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 shadow-2xl lg:block lg:ml-auto">
              <img src={heroImage} alt={business.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
