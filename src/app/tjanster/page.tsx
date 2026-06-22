import ServicesSection from "@/components/ServicesSection";
import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Tjänster & priser",
  description: `Herrklippning, skäggtrim och barnklippning hos ${business.name} i Uppsala.`,
};

export default function TjansterPage() {
  return (
    <>
      <ServicesSection />
      <div className="pb-16 text-center">
        <Link href="/" className="text-sm font-semibold text-[#1a1a2e] hover:underline">
          ← Tillbaka till startsidan
        </Link>
      </div>
    </>
  );
}
