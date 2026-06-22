import AboutSection from "@/components/AboutSection";
import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Om oss",
  description: `Läs mer om ${business.name} — Uppsalas mest hyllade frisör på Drottninggatan.`,
};

export default function OmOssPage() {
  return (
    <>
      <AboutSection />
      <div className="pb-16 text-center">
        <Link href="/#kontakt" className="text-sm font-semibold text-[#1a1a2e] hover:underline">
          ← Tillbaka till startsidan
        </Link>
      </div>
    </>
  );
}
