"use client";

import { themes } from "@/content/themes";
import { getTheory } from "@/content/theory";
import { ThemeCard } from "@/components/ThemeCard";
import { PageHeader } from "@/components/PageHeader";
import { useProgress } from "@/controllers/progressController";

export default function TheoriePage() {
  const { hydrated, getThemeProgress } = useProgress();

  return (
    <main>
      <PageHeader
        eyebrow="Réviser"
        title="Théorie"
        description="Un résumé par thème : notions clés, articles de loi, exemples suisses."
      />
      <div className="flex flex-col gap-3 px-5">
        {themes.map((theme) => {
          const sections = getTheory(theme.id)?.sections.length ?? 0;
          const done = hydrated && getThemeProgress(theme.id).themeRead;
          return (
            <ThemeCard
              key={theme.id}
              theme={theme}
              href={`/theorie/${theme.id}`}
              meta={done ? "✓ Lu" : `${sections} sections`}
            />
          );
        })}
      </div>
    </main>
  );
}
