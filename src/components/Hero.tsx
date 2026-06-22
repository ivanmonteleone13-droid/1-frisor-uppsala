import { business } from "@/lib/business";
import TrustBadges from "@/components/TrustBadges";

export default function Hero() {
  return (
    <section id="hem" className="relative min-h-[85vh] overflow-hidden bg-[var(--dark)] text-white lg:grid lg:grid-cols-[1fr_4px_1fr]">
      <div className="hidden bg-[var(--secondary)] lg:block" aria-hidden />
      <div className="flex flex-col justify-center px-8 py-20 lg:px-16">
        <p className="font-[family-name:var(--font-heading)] text-sm uppercase tracking-[0.5em] text-[var(--secondary)]">Barbershop</p>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold uppercase leading-none sm:text-7xl">
          Uppsalas mest
        </h1>
        <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl text-[var(--secondary)] sm:text-4xl">hyllade barber</h2>
        <p className="mt-8 max-w-md text-white/80">{business.description}</p>
        <TrustBadges />
        <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
          className="mt-10 inline-flex w-fit border-2 border-[var(--secondary)] px-10 py-4 font-[family-name:var(--font-heading)] text-lg uppercase tracking-wider text-[var(--secondary)] transition hover:bg-[var(--secondary)] hover:text-[var(--dark)]">
          {business.bookingLabel}
        </a>
      </div>
      <div className="flex items-center justify-center bg-[var(--primary)] p-12">
        <div className="rotate-3 rounded-sm border-4 border-[var(--secondary)] p-8 shadow-2xl">
          <span className="text-8xl" aria-hidden>✂️</span>
          <p className="mt-4 text-center font-[family-name:var(--font-heading)] text-xl uppercase">{business.name}</p>
        </div>
      </div>
    </section>
  );
}
