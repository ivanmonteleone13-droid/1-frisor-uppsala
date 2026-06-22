import { business } from "@/lib/business";
import TrustBadges from "@/components/TrustBadges";

export default function Hero() {
  return (
    <section
      id="hem"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#2a2a4a] text-white"
    >
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#c9a227] blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-slate-400 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#c9a227]/20 px-4 py-1.5 text-sm font-semibold text-[#c9a227] ring-1 ring-[#c9a227]/30">
            <span aria-hidden>★</span>
            {business.rating}/5 · {business.reviewCount}+ omdömen på Bokadirekt
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Uppsalas främsta
            <span className="block text-[#c9a227]">herrfrisör &amp; barber</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-100/90">
            {business.description}
          </p>
          <TrustBadges />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a227] px-8 py-4 text-base font-semibold text-[#0f0f1a] shadow-lg transition hover:bg-[#b8921f]"
            >
              {business.bookingLabel}
            </a>
            <a
              href={business.phoneLink}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Ring {business.phone}
            </a>
          </div>
        </div>
        <div className="relative">
          <div
            className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#1a1a2e] via-[#2a2a4a] to-[#c9a227]/40 shadow-2xl"
            role="img"
            aria-label="Premium barbershop-stämning hos #1 Frisör Uppsala"
          >
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <span className="text-8xl" aria-hidden>
                ✂️
              </span>
              <p className="mt-4 text-xl font-semibold">Drottninggatan 1</p>
              <p className="mt-2 text-sm text-slate-100/80">
                Herrklippning · Skägg · Barn · Student
              </p>
              <div className="mt-6 flex gap-4 text-xs text-slate-200/70">
                <span>Bokadirekt ✓</span>
                <span>·</span>
                <span>Drop-in välkomna</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
