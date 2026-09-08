import { QuizQuestion } from "@/models/types";
import { quizSourcesDuDroit } from "./sources-du-droit";
import { quizEtatFederalisme } from "./etat-federalisme";
import { quizDroitsFondamentaux } from "./droits-fondamentaux";
import { quizProtectionPersonnalite } from "./protection-personnalite";
import { quizDroitContrats } from "./droit-contrats";
import { quizContratTravail } from "./contrat-travail";
import { quizContratsInformatique } from "./contrats-informatique";

// Pour ajouter un nouveau thème de quiz : crée un fichier `mon-theme.ts`
// dans ce dossier (copie un fichier existant comme modèle), puis
// importe-le et ajoute-le au tableau ci-dessous.
export const quizQuestions: QuizQuestion[] = [
  ...quizSourcesDuDroit,
  ...quizEtatFederalisme,
  ...quizDroitsFondamentaux,
  ...quizProtectionPersonnalite,
  ...quizDroitContrats,
  ...quizContratTravail,
  ...quizContratsInformatique,
];

export function getQuizByTheme(themeId: string): QuizQuestion[] {
  return quizQuestions.filter((q) => q.themeId === themeId);
}
