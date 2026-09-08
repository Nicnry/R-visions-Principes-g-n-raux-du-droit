"use client";

import { themes } from "@/content/themes";
import { getPracticeByTheme } from "@/content/practice";
import { ThemeCard } from "@/components/ThemeCard";
import { PageHeader } from "@/components/PageHeader";
import { useProgress } from "@/controllers/progressController";

export default function PratiquePage() {
  const { hydrated, getThemeProgress } = useProgress();

  return (
    <main>
      <PageHeader
        eyebrow="Réviser"
        title="Pratique"
        description="Cas pratiques à analyser et exercices type examen, avec corrigé."
      />
      <div className="flex flex-col gap-3 px-5">
        {themes.map((theme) => {
          const cases = getPracticeByTheme(theme.id);
          const done = hydrated ? getThemeProgress(theme.id).practiceDone.length : 0;
          return (
            <ThemeCard
              key={theme.id}
              theme={theme}
              href={`/pratique/${theme.id}`}
              meta={`${done}/${cases.length} cas traités`}
            />
          );
        })}
      </div>
    </main>
  );
}
