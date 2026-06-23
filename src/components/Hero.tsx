import { business } from "@/lib/business";
import TrustBadges from "@/components/TrustBadges";

function lowestPrice(): number | null {
  const prices: number[] = [];
  for (const s of business.services) {
    const p = s.priceFrom;
    if (typeof p === "number" && p > 0) prices.push(p);
  }
  return prices.length ? Math.min(...prices) : null;
}

export default function Hero() {
  const heroImage = "heroImage" in business ? business.heroImage : null;
  const logoImage = "logoImage" in business ? business.logoImage : null;
  const fromPrice = lowestPrice();

  return (
    <section id="hem" className="relative min-h-[88vh] overflow-hidden bg-[var(--dark)] text-white">
      {heroImage && (
        <>
          <img
            src={heroImage}
            alt={`${business.name} — barbershop på ${business.address.street}, ${business.address.city}`}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)]/95 via-[var(--dark)]/75 to-[var(--dark)]/40" aria-hidden />
        </>
      )}
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:min-h-[88vh] lg:py-28">
        <div className="max-w-2xl">
          {logoImage ? (
            <img
              src={logoImage}
              alt=""
              className="mb-6 h-16 w-16 rounded-full border-2 border-[var(--secondary)] bg-white object-contain p-1 shadow-lg"
            />
          ) : null}
          <p className="font-[family-name:var(--font-heading)] text-sm uppercase tracking-[0.4em] text-[var(--secondary)]">
            Barbershop · Drottninggatan
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold uppercase leading-tight sm:text-6xl">
            Uppsalas mest hyllade barber
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Prisvärd herrklippning, skägg och styling mitt i city. Boka online eller kom förbi — Omar och teamet väntar på dig.
          </p>
          {fromPrice ? (
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[var(--secondary)]/40 bg-[var(--secondary)]/10 px-5 py-2.5 text-sm font-semibold text-[var(--secondary)] backdrop-blur-sm">
              <span aria-hidden>✂️</span>
              Klippning från {fromPrice} kr · Student från 300 kr
            </div>
          ) : null}
          <TrustBadges />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--secondary)] px-8 py-4 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--dark)] transition hover:opacity-90"
            >
              {business.bookingLabel}
            </a>
            <a
              href={business.phoneLink}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              Ring {business.phone}
            </a>
          </div>
        </div>
        <div className="mt-12 hidden lg:absolute lg:right-8 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
          <div className="rounded-2xl border border-[var(--secondary)]/30 bg-[var(--dark)]/80 p-6 text-center shadow-2xl backdrop-blur-md">
            <p className="text-4xl font-bold text-[var(--secondary)]">{business.rating}</p>
            <p className="mt-1 text-sm text-white/70">{business.reviewCount}+ omdömen på Bokadirekt</p>
            <p className="mt-3 text-xs uppercase tracking-wider text-white/50">{business.address.street}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
