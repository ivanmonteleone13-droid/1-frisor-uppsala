import Gallery from "@/components/Gallery";
import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Galleri",
  description: `Före och efter-resultat från ${business.name} i Uppsala.`,
};

export default function GalleriPage() {
  return (
    <>
      <Gallery />
      <div className="bg-[#0f0f1a] pb-16 text-center">
        <Link href="/" className="text-sm font-semibold text-[#c9a227] hover:underline">
          ← Tillbaka till startsidan
        </Link>
      </div>
    </>
  );
}
