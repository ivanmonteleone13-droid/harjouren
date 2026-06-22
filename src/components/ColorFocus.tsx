export default function ColorFocus() {
  const techniques = ["Balayage", "Slingor", "Tonning", "Färgkorrektion", "Gloss"];
  return (
    <section id="farg" className="bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--primary)] sm:text-4xl">
          Färgexpertis vid domkyrkan
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--foreground)]/70">
          Vi specialiserar oss på naturliga nyanser, balayage och skonsamma färgmetoder som bevarar hårets hälsa.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {techniques.map((t) => (
            <span key={t} className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[var(--primary)] shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
