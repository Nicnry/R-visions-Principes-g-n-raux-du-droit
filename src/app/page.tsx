"use client";

import Link from "next/link";
import { Clock, FileCheck2, Shuffle } from "lucide-react";
import { themes } from "@/content/themes";
import { ThemeCard } from "@/components/ThemeCard";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/controllers/progressController";

export default function HomePage() {
  const { hydrated, globalStats } = useProgress();

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-8 pt-8">
        <div className="absolute -right-8 -top-10 h-40 w-40 rotate-12 rounded-[2.5rem] bg-indigo-tint" />
        <div className="absolute -left-10 top-24 h-24 w-24 -rotate-12 rounded-[2rem] bg-coral-tint" />
        <div className="relative">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-coral-dark">
            Unité 61-31.3 · Éthique et droit informatique
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-[1.05] text-ink">
            Le dossier de révision
            <br />
            <span className="text-indigo">Principes généraux du droit</span>
          </h1>
          <p className="mt-3 max-w-md text-[15px] text-ink-soft">
            Théorie, cas pratiques et quiz pour préparer l&apos;examen écrit de 60 minutes
            (documentation papier autorisée) — 20% de la note du module.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink-soft ring-1 ring-ink/10">
              <Clock size={14} /> 18 périodes · ≈13h30
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink-soft ring-1 ring-ink/10">
              <FileCheck2 size={14} /> Examen écrit 60 min
            </span>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="rounded-3xl border-2 border-ink/10 bg-paper-raised p-4 shadow-[3px_3px_0_0_rgba(27,23,64,0.08)]">
          <div className="flex items-center justify-between text-sm font-semibold text-ink">
            <span>Ta progression</span>
            {hydrated && (
              <span className="font-mono text-xs text-ink-soft">
                {globalStats.themesRead}/{globalStats.totalThemes} thèmes lus
              </span>
            )}
          </div>
          <div className="mt-2">
            <ProgressBar
              value={hydrated ? (globalStats.themesRead / globalStats.totalThemes) * 100 : 0}
              colorClass="bg-indigo"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-sm text-ink-soft">
            <span>Score moyen aux quiz</span>
            <span className="font-mono font-bold text-mint-dark">
              {hydrated ? `${globalStats.averageBestScore}%` : "—"}
            </span>
          </div>
        </div>

        <Link
          href="/quiz"
          className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-coral px-5 py-3.5 text-center font-display text-lg font-semibold text-white shadow-[3px_3px_0_0_rgba(27,23,64,0.15)] transition-transform active:translate-y-0.5"
        >
          <Shuffle size={20} /> Lancer un quiz
        </Link>
      </section>

      <section className="mt-8 px-5">
        <h2 className="mb-3 font-display text-xl font-semibold text-ink">Les 7 thèmes du module</h2>
        <div className="flex flex-col gap-3">
          {themes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} href={`/theorie/${theme.id}`} />
          ))}
        </div>
      </section>
    </main>
  );
}
