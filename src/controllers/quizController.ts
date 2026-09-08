"use client";

import { useCallback, useMemo, useState } from "react";
import { QuizQuestion } from "@/models/types";

export interface ShuffledQuestion {
  id: string;
  question: string;
  explanation: string;
  /** réponses mélangées, ordre différent à chaque session */
  choices: string[];
  /** index de la bonne réponse DANS le tableau mélangé */
  correctIndex: number;
}

/** Fisher-Yates shuffle — ne mute pas le tableau d'origine. */
function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Reprend une question "canonique" (ordre fixe défini dans le contenu) et
 * en tire une version où la position de la bonne réponse est randomisée.
 * C'est LE point du code responsable de "la bonne réponse n'est jamais
 * toujours en 1ère position" : ne pas contourner cette fonction ailleurs.
 */
function shuffleQuestion(q: QuizQuestion): ShuffledQuestion {
  const order = shuffle(q.choices.map((_, i) => i));
  return {
    id: q.id,
    question: q.question,
    explanation: q.explanation,
    choices: order.map((i) => q.choices[i]),
    correctIndex: order.indexOf(q.correctIndex),
  };
}

interface UseQuizSessionOptions {
  /** limite optionnelle du nombre de questions tirées pour la session */
  limit?: number;
}

/**
 * Gère une session de quiz complète pour un thème : mélange des questions
 * ET des réponses, avancement, score, et état "terminé".
 */
export function useQuizSession(questions: QuizQuestion[], options: UseQuizSessionOptions = {}) {
  const [sessionKey, setSessionKey] = useState(0); // incrémenté pour forcer un nouveau mélange

  const sessionQuestions = useMemo(() => {
    const pool = options.limit ? shuffle(questions).slice(0, options.limit) : shuffle(questions);
    return pool.map(shuffleQuestion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, sessionKey]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const current = sessionQuestions[currentIndex];
  const isLast = currentIndex === sessionQuestions.length - 1;
  const isFinished = answers.length === sessionQuestions.length && sessionQuestions.length > 0;

  const selectAnswer = useCallback(
    (index: number) => {
      if (selected !== null) return; // déjà répondu à cette question
      setSelected(index);
      setAnswers((prev) => [...prev, index === current.correctIndex]);
    },
    [selected, current]
  );

  const next = useCallback(() => {
    if (selected === null) return;
    setSelected(null);
    setCurrentIndex((i) => Math.min(i + 1, sessionQuestions.length - 1));
  }, [selected, sessionQuestions.length]);

  const restart = useCallback(() => {
    setSessionKey((k) => k + 1);
    setCurrentIndex(0);
    setSelected(null);
    setAnswers([]);
  }, []);

  const score = answers.filter(Boolean).length;
  const scorePercent = sessionQuestions.length === 0 ? 0 : Math.round((score / sessionQuestions.length) * 100);

  return {
    questions: sessionQuestions,
    current,
    currentIndex,
    total: sessionQuestions.length,
    selected,
    selectAnswer,
    next,
    isLast,
    isFinished,
    score,
    scorePercent,
    restart,
  };
}
