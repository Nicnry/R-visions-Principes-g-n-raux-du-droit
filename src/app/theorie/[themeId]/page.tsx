"use client";

import { use, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gavel, KeyRound, ListChecks } from "lucide-react";
import { getTheme } from "@/content/themes";
import { getTheory } from "@/content/theory";
import { PageHeader } from "@/components/PageHeader";
import { EstimatedBadge } from "@/components/EstimatedBadge";
import { useProgress } from "@/controllers/progressController";

export default function ThemeTheoryPage({ params }: { params: Promise<{ themeId: string }> }) {
  const { themeId } = use(params);
  const theme = getTheme(themeId);
  const block = getTheory(themeId);
  const { markThemeRead } = useProgress();

  useEffect(() => {
    if (theme) markThemeRead(theme.id);
  }, [theme, markThemeRead]);

  if (!theme || !block) return notFound();

  return (
    <main>
      <PageHeader eyebrow={theme.emoji + "  Théorie"} title={theme.title} back="/theorie" />

      <div className="px-5">
        {block.estimated && (
          <div className="mb-4">
            <EstimatedBadge />
          </div>
        )}

        <p className="text-[15px] leading-relaxed text-ink-soft">{block.intro}</p>

        <div className="mt-6 flex flex-col gap-4">
          {block.sections.map((s) => (
            <article
              key={s.heading}
              className="rounded-3xl border-2 border-ink/10 bg-paper-raised p-4 shadow-[3px_3px_0_0_rgba(27,23,64,0.06)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-lg font-semibold text-ink">{s.heading}</h2>
                {s.articleRef && (
                  <span className="font-mono rounded-full bg-indigo-tint px-2.5 py-1 text-[11px] font-bold text-indigo">
                    {s.articleRef}
                  </span>
                )}
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.content}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border-2 border-dashed border-indigo/30 bg-indigo-tint/40 p-4">
          <h3 className="flex items-center gap-2 font-display text-base font-semibold text-indigo">
            <KeyRound size={17} /> À retenir
          </h3>
          <ul className="mt-2 flex flex-col gap-1.5">
            {block.keyPoints.map((k) => (
              <li key={k} className="flex gap-2 text-sm text-ink-soft">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo" />
                {k}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 pb-4">
          <Link
            href={`/pratique/${theme.id}`}
            className="flex items-center justify-center gap-2 rounded-2xl bg-paper-raised px-4 py-3 text-sm font-semibold text-ink ring-2 ring-ink/10 active:translate-y-0.5"
          >
            <Gavel size={16} /> Cas pratiques
          </Link>
          <Link
            href={`/quiz/${theme.id}`}
            className="flex items-center justify-center gap-2 rounded-2xl bg-coral px-4 py-3 text-sm font-semibold text-white active:translate-y-0.5"
          >
            <ListChecks size={16} /> Faire le quiz
          </Link>
        </div>
      </div>
    </main>
  );
}
