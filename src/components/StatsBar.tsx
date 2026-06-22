import { business } from "@/lib/business";

export default function StatsBar() {
  const stats = [
    { value: `${business.rating}`, label: "Snittbetyg" },
    { value: `${business.reviewCount}+`, label: "Recensioner" },
    { value: "2015", label: "Sedan" },
    { value: "City", label: "Drottninggatan 1" },
  ];
  return (
    <section className="border-y-4 border-[var(--secondary)] bg-[var(--dark)] py-8 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--secondary)] sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
