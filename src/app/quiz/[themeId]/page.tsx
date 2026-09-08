"use client";

import { use, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RotateCcw, Trophy } from "lucide-react";
import { getTheme } from "@/content/themes";
import { getQuizByTheme } from "@/content/quiz";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { Stamp } from "@/components/Stamp";
import { EstimatedBadge } from "@/components/EstimatedBadge";
import { cx } from "@/lib/cx";
import { useQuizSession } from "@/controllers/quizController";
import { useProgress } from "@/controllers/progressController";

export default function ThemeQuizPage({ params }: { params: Promise<{ themeId: string }> }) {
  const { themeId } = use(params);
  const theme = getTheme(themeId);
  const questions = getQuizByTheme(themeId);
  const { recordQuizScore } = useProgress();

  const session = useQuizSession(questions);
  const recordedRef = useRef(false);

  useEffect(() => {
    if (session.isFinished && !recordedRef.current && theme) {
      recordedRef.current = true;
      recordQuizScore(theme.id, session.scorePercent);
    }
    if (!session.isFinished) recordedRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.isFinished]);

  if (!theme) return notFound();
  if (questions.length === 0) {
    return (
      <main>
        <PageHeader eyebrow={theme.emoji + "  Quiz"} title={theme.title} back="/quiz" />
        <p className="px-5 text-sm text-ink-soft">Pas encore de questions pour ce thème.</p>
      </main>
    );
  }

  if (session.isFinished) {
    const good = session.scorePercent >= 70;
    return (
      <main>
        <PageHeader eyebrow={theme.emoji + "  Quiz terminé"} title={theme.title} back="/quiz" />
        <div className="px-5 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-saffron-tint">
            <Trophy size={40} className="text-saffron-dark" />
          </div>
          <p className="mt-4 font-display text-4xl font-bold text-ink">{session.scorePercent}%</p>
          <p className="mt-1 text-sm text-ink-soft">
            {session.score} / {session.total} bonnes réponses
          </p>
          <div className="mt-3 flex justify-center">
            <Stamp
              kind={good ? "correct" : "neutral"}
              label={good ? "Bien joué" : "À revoir"}
            />
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={session.restart}
              className="flex items-center justify-center gap-2 rounded-2xl bg-coral px-5 py-3.5 font-display text-lg font-semibold text-white active:translate-y-0.5"
            >
              <RotateCcw size={18} /> Rejouer (ordre mélangé)
            </button>
            <Link
              href={`/theorie/${theme.id}`}
              className="rounded-2xl bg-paper-raised px-5 py-3 text-sm font-semibold text-ink ring-2 ring-ink/10"
            >
              Revoir la théorie du thème
            </Link>
            <Link href="/quiz" className="text-sm font-semibold text-ink-soft">
              Choisir un autre thème
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const q = session.current;
  const hasAnswered = session.selected !== null;

  return (
    <main>
      <PageHeader eyebrow={theme.emoji + "  Quiz"} title={theme.title} back="/quiz" />

      <div className="px-5">
        <div className="mb-4 flex items-center gap-3">
          <ProgressBar value={((session.currentIndex + (hasAnswered ? 1 : 0)) / session.total) * 100} />
          <span className="shrink-0 font-mono text-xs font-semibold text-ink-soft">
            {session.currentIndex + 1}/{session.total}
          </span>
        </div>

        <div className="rounded-3xl border-2 border-ink/10 bg-paper-raised p-5 shadow-[3px_3px_0_0_rgba(27,23,64,0.06)]">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-indigo">
              Question
            </span>
            <EstimatedBadge compact />
          </div>
          <p className="font-display text-lg font-semibold leading-snug text-ink">{q.question}</p>

          <div className="mt-4 flex flex-col gap-2.5">
            {q.choices.map((choice, i) => {
              const isCorrect = i === q.correctIndex;
              const isSelected = i === session.selected;
              let style =
                "border-ink/10 bg-paper hover:border-indigo/40 hover:bg-indigo-tint/40";
              if (hasAnswered) {
                if (isCorrect) style = "border-mint bg-mint-tint text-mint-dark";
                else if (isSelected) style = "border-coral bg-coral-tint text-coral-dark";
                else style = "border-ink/10 bg-paper opacity-60";
              }
              return (
                <button
                  key={i}
                  disabled={hasAnswered}
                  onClick={() => session.selectAnswer(i)}
                  className={cx(
                    "flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left text-[15px] font-medium text-ink transition-colors disabled:cursor-default",
                    style
                  )}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-current font-mono text-xs font-bold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {choice}
                </button>
              );
            })}
          </div>

          {hasAnswered && (
            <div className="mt-4 rounded-2xl bg-ink/5 p-3.5">
              <div className="mb-1.5">
                <Stamp
                  kind={session.selected === q.correctIndex ? "correct" : "incorrect"}
                  label={session.selected === q.correctIndex ? "Correct" : "Faux"}
                />
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{q.explanation}</p>
            </div>
          )}
        </div>

        {hasAnswered && (
          <button
            onClick={session.next}
            className="mt-4 w-full rounded-2xl bg-ink px-5 py-3.5 font-display text-lg font-semibold text-paper active:translate-y-0.5"
          >
            {session.isLast ? "Voir le résultat" : "Question suivante"}
          </button>
        )}
      </div>
    </main>
  );
}
