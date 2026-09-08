"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { Eye, FileText, MessageCircleQuestion } from "lucide-react";
import { getTheme } from "@/content/themes";
import { getPracticeByTheme } from "@/content/practice";
import { PageHeader } from "@/components/PageHeader";
import { EstimatedBadge } from "@/components/EstimatedBadge";
import { Stamp } from "@/components/Stamp";
import { cx } from "@/lib/cx";
import { useProgress } from "@/controllers/progressController";

export default function ThemePracticePage({ params }: { params: Promise<{ themeId: string }> }) {
  const { themeId } = use(params);
  const theme = getTheme(themeId);
  const cases = getPracticeByTheme(themeId);
  const { hydrated, getThemeProgress, markPracticeDone } = useProgress();
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  if (!theme) return notFound();

  const done = hydrated ? getThemeProgress(theme.id).practiceDone : [];

  return (
    <main>
      <PageHeader eyebrow={theme.emoji + "  Pratique"} title={theme.title} back="/pratique" />

      <div className="flex flex-col gap-4 px-5 pb-4">
        {cases.map((c) => {
          const isRevealed = !!revealed[c.id];
          const isDone = done.includes(c.id);
          return (
            <article
              key={c.id}
              className="rounded-3xl border-2 border-ink/10 bg-paper-raised p-4 shadow-[3px_3px_0_0_rgba(27,23,64,0.06)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span
                  className={cx(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
                    c.type === "examen" ? "bg-coral-tint text-coral-dark" : "bg-mint-tint text-mint-dark"
                  )}
                >
                  {c.type === "examen" ? <FileText size={12} /> : <MessageCircleQuestion size={12} />}
                  {c.type === "examen" ? "Type examen" : "Réflexion"}
                </span>
                {c.estimated && <EstimatedBadge compact />}
              </div>

              <h2 className="mt-2 font-display text-lg font-semibold text-ink">{c.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.scenario}</p>
              <p className="mt-3 rounded-2xl bg-indigo-tint/50 p-3 text-sm font-medium text-indigo">
                {c.question}
              </p>

              {!isRevealed ? (
                <button
                  onClick={() => {
                    setRevealed((r) => ({ ...r, [c.id]: true }));
                    markPracticeDone(theme.id, c.id);
                  }}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-paper active:translate-y-0.5"
                >
                  <Eye size={16} />
                  {c.type === "examen" ? "Voir le corrigé" : "Voir une piste de réflexion"}
                </button>
              ) : (
                <div className="mt-3 rounded-2xl border-2 border-mint/30 bg-mint-tint/40 p-3">
                  <div className="mb-1.5">
                    <Stamp kind="correct" label={isDone ? "Traité" : "Corrigé"} />
                  </div>
                  <p className="text-sm leading-relaxed text-ink">{c.correction}</p>
                </div>
              )}
            </article>
          );
        })}
        {cases.length === 0 && (
          <p className="text-sm text-ink-soft">Pas encore de cas pratique pour ce thème.</p>
        )}
      </div>
    </main>
  );
}
