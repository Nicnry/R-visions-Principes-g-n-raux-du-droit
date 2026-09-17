import { QuizQuestion } from "@/models/types";
import { quizBasesDuDroit } from "./bases-du-droit";

// Pour ajouter un nouveau thème de quiz : crée un fichier `mon-theme.ts`
// dans ce dossier (copie un fichier existant comme modèle), puis
// importe-le et ajoute-le au tableau ci-dessous.
export const quizQuestions: QuizQuestion[] = [
  ...quizBasesDuDroit,
];

export function getQuizByTheme(themeId: string): QuizQuestion[] {
  return quizQuestions.filter((q) => q.themeId === themeId);
}
