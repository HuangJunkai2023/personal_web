"use client";

import { useLang } from "@/context/LangContext";
import { t } from "@/data/translations";
import { hobbies } from "@/data/hobbies";
import { hobbiesZh } from "@/data/hobbies.zh";
import HobbyCard from "@/components/HobbyCard";
import SectionTitle from "@/components/SectionTitle";

export default function LifePage() {
  const { lang } = useLang();
  const ui = t[lang].life;
  const allHobbies = lang === "zh" ? hobbiesZh : hobbies;

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle title={ui.title} subtitle={ui.sub} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allHobbies.map((h, i) => <HobbyCard key={h.id} hobby={h} index={i} />)}
      </div>
    </main>
  );
}
