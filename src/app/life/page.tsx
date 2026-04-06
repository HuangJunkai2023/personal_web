"use client";

import { hobbies } from "@/data/hobbies";
import HobbyCard from "@/components/HobbyCard";
import SectionTitle from "@/components/SectionTitle";

export default function LifePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle
        title="Life & Interests"
        subtitle="The things that keep me sane outside of engineering."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((h, i) => (
          <HobbyCard key={h.id} hobby={h} index={i} />
        ))}
      </div>
    </main>
  );
}
