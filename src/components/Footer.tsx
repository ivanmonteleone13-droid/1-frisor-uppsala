import Link from "next/link";
import { business, getFullAddress } from "@/lib/business";

const footerLinks = [
  { href: "/#tjanster", label: "Tjänster" },
  { href: "/#galleri", label: "Galleri" },
  { href: "/#omdomen", label: "Omdömen" },
  { href: "/#om-oss", label: "Om oss" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0f0f1a] text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-xl font-bold">{business.name}</p>
          <p className="mt-2 text-sm text-[#c9a227]">{business.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300/70">{business.description}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
            <span>★ {business.rating} Bokadirekt</span>
            <span>·</span>
            <span>{business.reviewCount}+ omdömen</span>
            <span>·</span>
            <span>Frisör Uppsala</span>
          </div>
        </div>
        <div>
          <p className="font-semibold">Snabblänkar</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300/80">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#c9a227]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Kontakt</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-slate-300/80">
            <p>{getFullAddress()}</p>
            <p>
              <a href={business.phoneLink} className="hover:text-[#c9a227]">
                {business.phone}
              </a>
            </p>
            <p>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9a227]"
              >
                {business.bookingLabel}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-slate-700/50 px-4 py-6 text-center text-xs text-slate-400/60">
        <p>
          © {new Date().getFullYear()} {business.name}. Demo-webbplats skapad med offentligt
          tillgänglig information.
        </p>
      </div>
    </footer>
  );
}
