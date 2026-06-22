import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakta ${business.name} på Drottninggatan 1, Uppsala. Ring ${business.phone}.`,
};

export default function KontaktPage() {
  return (
    <>
      <ContactSection />
      <div className="pb-16 text-center">
        <Link href="/" className="text-sm font-semibold text-[#1a1a2e] hover:underline">
          ← Tillbaka till startsidan
        </Link>
      </div>
    </>
  );
}
