import { QuizQuestion } from "@/models/types";
import { quizBasesDuDroit } from "./bases-du-droit";
import { quizDroitsFondamentaux } from "./droits-fondamentaux";
import { quizProtectionPersonnalite } from "./protection-personnalite";
import { quizDroitContrats } from "./droit-contrats";
import { quizContratTravail } from "./contrat-travail";

// Pour ajouter un nouveau thème de quiz : crée un fichier `mon-theme.ts`
// dans ce dossier (copie un fichier existant comme modèle), puis
// importe-le et ajoute-le au tableau ci-dessous.
export const quizQuestions: QuizQuestion[] = [
  ...quizBasesDuDroit,
  ...quizDroitsFondamentaux,
  ...quizProtectionPersonnalite,
  ...quizDroitContrats,
  ...quizContratTravail,
];

export function getQuizByTheme(themeId: string): QuizQuestion[] {
  return quizQuestions.filter((q) => q.themeId === themeId);
}
