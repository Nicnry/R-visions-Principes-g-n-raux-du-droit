"use client";

import { useCallback, useEffect, useState } from "react";
import { ProgressState, ThemeProgress } from "@/models/types";
import { readStorage, writeStorage } from "@/lib/storage";
import { themes } from "@/content/themes";

const emptyThemeProgress: ThemeProgress = {
  themeRead: false,
  practiceDone: [],
  bestScore: 0,
  attempts: 0,
};

function emptyState(): ProgressState {
  const state: ProgressState = {};
  for (const t of themes) state[t.id] = { ...emptyThemeProgress, practiceDone: [] };
  return state;
}

/**
 * Hook central de progression. Toute la lecture/écriture de localStorage
 * pour la progression de l'utilisateur passe par ici (voir src/lib/storage.ts).
 */
export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(emptyState());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(readStorage<ProgressState>(emptyState()));
    setHydrated(true);
  }, []);

  const persist = useCallback((next: ProgressState) => {
    setProgress(next);
    writeStorage(next);
  }, []);

  const getThemeProgress = useCallback(
    (themeId: string): ThemeProgress => progress[themeId] ?? { ...emptyThemeProgress, practiceDone: [] },
    [progress]
  );

  const markThemeRead = useCallback(
    (themeId: string) => {
      const current = progress[themeId] ?? { ...emptyThemeProgress, practiceDone: [] };
      persist({ ...progress, [themeId]: { ...current, themeRead: true } });
    },
    [progress, persist]
  );

  const markPracticeDone = useCallback(
    (themeId: string, caseId: string) => {
      const current = progress[themeId] ?? { ...emptyThemeProgress, practiceDone: [] };
      if (current.practiceDone.includes(caseId)) return;
      persist({
        ...progress,
        [themeId]: { ...current, practiceDone: [...current.practiceDone, caseId] },
      });
    },
    [progress, persist]
  );

  const recordQuizScore = useCallback(
    (themeId: string, scorePercent: number) => {
      const current = progress[themeId] ?? { ...emptyThemeProgress, practiceDone: [] };
      persist({
        ...progress,
        [themeId]: {
          ...current,
          bestScore: Math.max(current.bestScore, scorePercent),
          attempts: current.attempts + 1,
        },
      });
    },
    [progress, persist]
  );

  const resetProgress = useCallback(() => {
    persist(emptyState());
  }, [persist]);

  const globalStats = {
    themesRead: themes.filter((t) => getThemeProgress(t.id).themeRead).length,
    totalThemes: themes.length,
    averageBestScore:
      themes.length === 0
        ? 0
        : Math.round(
            themes.reduce((sum, t) => sum + getThemeProgress(t.id).bestScore, 0) / themes.length
          ),
    totalAttempts: themes.reduce((sum, t) => sum + getThemeProgress(t.id).attempts, 0),
  };

  return {
    hydrated,
    progress,
    getThemeProgress,
    markThemeRead,
    markPracticeDone,
    recordQuizScore,
    resetProgress,
    globalStats,
  };
}
