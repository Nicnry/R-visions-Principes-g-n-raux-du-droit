"use client";

import { themes } from "@/content/themes";
import { getQuizByTheme } from "@/content/quiz";
import { ThemeCard } from "@/components/ThemeCard";
import { PageHeader } from "@/components/PageHeader";
import { useProgress } from "@/controllers/progressController";

export default function QuizPage() {
  const { hydrated, getThemeProgress } = useProgress();

  return (
    <main>
      <PageHeader
        eyebrow="Réviser"
        title="Quiz"
        description="Les réponses changent de place à chaque tentative : impossible de retenir « c'est toujours la 1ère »."
      />
      <div className="flex flex-col gap-3 px-5">
        {themes.map((theme) => {
          const n = getQuizByTheme(theme.id).length;
          const p = hydrated ? getThemeProgress(theme.id) : null;
          return (
            <ThemeCard
              key={theme.id}
              theme={theme}
              href={`/quiz/${theme.id}`}
              meta={p && p.attempts > 0 ? `Meilleur score : ${p.bestScore}%` : `${n} questions`}
            />
          );
        })}
      </div>
    </main>
  );
}
