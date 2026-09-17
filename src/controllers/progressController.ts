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

  // Toutes les mises à jour passent par `setProgress` en forme fonctionnelle
  // (prev => next), ce qui rend ces callbacks stables (ils ne dépendent pas
  // de `progress`). Sans ça, leur identité change à chaque rendu, ce qui
  // provoque une boucle infinie dans les effets qui les appellent (ex.
  // `markThemeRead` dans la page théorie).
  const update = useCallback((updater: (prev: ProgressState) => ProgressState) => {
    setProgress((prev) => {
      const next = updater(prev);
      writeStorage(next);
      return next;
    });
  }, []);

  const getThemeProgress = useCallback(
    (themeId: string): ThemeProgress => progress[themeId] ?? { ...emptyThemeProgress, practiceDone: [] },
    [progress]
  );

  const markThemeRead = useCallback(
    (themeId: string) => {
      update((prev) => {
        const current = prev[themeId] ?? { ...emptyThemeProgress, practiceDone: [] };
        if (current.themeRead) return prev;
        return { ...prev, [themeId]: { ...current, themeRead: true } };
      });
    },
    [update]
  );

  const markPracticeDone = useCallback(
    (themeId: string, caseId: string) => {
      update((prev) => {
        const current = prev[themeId] ?? { ...emptyThemeProgress, practiceDone: [] };
        if (current.practiceDone.includes(caseId)) return prev;
        return {
          ...prev,
          [themeId]: { ...current, practiceDone: [...current.practiceDone, caseId] },
        };
      });
    },
    [update]
  );

  const recordQuizScore = useCallback(
    (themeId: string, scorePercent: number) => {
      update((prev) => {
        const current = prev[themeId] ?? { ...emptyThemeProgress, practiceDone: [] };
        return {
          ...prev,
          [themeId]: {
            ...current,
            bestScore: Math.max(current.bestScore, scorePercent),
            attempts: current.attempts + 1,
          },
        };
      });
    },
    [update]
  );

  const resetProgress = useCallback(() => {
    update(() => emptyState());
  }, [update]);

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
