"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { themes } from "@/content/themes";
import { getPracticeByTheme } from "@/content/practice";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { colorMap } from "@/lib/theme-colors";
import { useProgress } from "@/controllers/progressController";

export default function ProgresPage() {
  const { hydrated, getThemeProgress, globalStats, resetProgress } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <main>
      <PageHeader
        eyebrow="Suivi"
        title="Progrès"
        description="Tout est sauvegardé sur cet appareil (localStorage) — rien n'est envoyé ailleurs."
      />

      <div className="grid grid-cols-2 gap-3 px-5">
        <div className="rounded-3xl border-2 border-ink/10 bg-paper-raised p-4 text-center">
          <p className="font-display text-3xl font-bold text-indigo">
            {hydrated ? `${globalStats.themesRead}/${globalStats.totalThemes}` : "—"}
          </p>
          <p className="text-xs font-semibold text-ink-soft">thèmes lus</p>
        </div>
        <div className="rounded-3xl border-2 border-ink/10 bg-paper-raised p-4 text-center">
          <p className="font-display text-3xl font-bold text-mint-dark">
            {hydrated ? `${globalStats.averageBestScore}%` : "—"}
          </p>
          <p className="text-xs font-semibold text-ink-soft">score moyen</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 px-5">
        {themes.map((theme) => {
          const p = getThemeProgress(theme.id);
          const nCases = getPracticeByTheme(theme.id).length;
          const c = colorMap[theme.color];
          return (
            <div
              key={theme.id}
              className="rounded-3xl border-2 border-ink/10 bg-paper-raised p-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{theme.emoji}</span>
                <span className="font-display text-base font-semibold text-ink">{theme.title}</span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <ProgressBar value={hydrated && p.themeRead ? 100 : 0} colorClass={c.bg} className="h-2" />
                <span className="shrink-0 text-xs font-semibold text-ink-soft">
                  {hydrated && p.themeRead ? "Lu" : "À lire"}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-soft">
                <span>
                  Pratique : {hydrated ? p.practiceDone.length : 0}/{nCases}
                </span>
                <span>
                  Quiz : {hydrated && p.attempts > 0 ? `${p.bestScore}% (meilleur)` : "pas encore fait"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 px-5 pb-4">
        {!confirmReset ? (
          <button
            onClick={() => setConfirmReset(true)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-coral-dark ring-2 ring-coral/30"
          >
            <Trash2 size={16} /> Réinitialiser ma progression
          </button>
        ) : (
          <div className="rounded-2xl bg-coral-tint p-4 text-center">
            <p className="text-sm font-semibold text-coral-dark">
              Sûr·e ? Cette action efface tout, définitivement.
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setConfirmReset(false)}
                className="flex-1 rounded-xl bg-paper-raised px-4 py-2 text-sm font-semibold text-ink"
              >
                Annuler
              </button>
              <button
                onClick={() => {
                  resetProgress();
                  setConfirmReset(false);
                }}
                className="flex-1 rounded-xl bg-coral px-4 py-2 text-sm font-semibold text-white"
              >
                Confirmer
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
