// ============================================================================
// MODELS — définitions de types du contenu de révision
// ============================================================================
// Ce fichier définit la FORME des données. Le contenu lui-même vit dans
// src/content/*.ts. Voir CLAUDE.md à la racine pour la marche à suivre
// quand il faut ajouter / corriger / retirer du contenu.
// ============================================================================

export type ThemeColor = "indigo" | "coral" | "mint" | "saffron";

export interface Theme {
  /** identifiant court, utilisé dans les URLs (ex: "bases-du-droit") */
  id: string;
  /** numéro d'ordre d'affichage, style "article" (purement esthétique) */
  order: number;
  title: string;
  emoji: string;
  color: ThemeColor;
  /** résumé d'une phrase affiché sur la carte du thème */
  summary: string;
  /** true = contenu déduit du plan de cours, pas encore confirmé par le prof */
  estimated: boolean;
}

export interface TheorySection {
  heading: string;
  /** référence légale affichée en "tampon" si pertinente, ex: "Art. 28 CC" */
  articleRef?: string;
  content: string;
}

export interface TheoryBlock {
  themeId: string;
  intro: string;
  sections: TheorySection[];
  keyPoints: string[];
  estimated: boolean;
}

export type PracticeType = "reflexion" | "examen";

export interface PracticeCase {
  id: string;
  themeId: string;
  type: PracticeType;
  title: string;
  scenario: string;
  question: string;
  /** piste de réflexion (type "reflexion") ou corrigé modèle (type "examen") */
  correction: string;
  estimated: boolean;
}

export interface QuizQuestion {
  id: string;
  themeId: string;
  question: string;
  /** ordre canonique et fixe des réponses ; le mélange se fait à l'affichage */
  choices: string[];
  /** index (dans `choices`) de la bonne réponse */
  correctIndex: number;
  explanation: string;
  estimated: boolean;
}

// ---- progression (persistée en localStorage, voir src/lib/storage.ts) ----

export interface ThemeProgress {
  themeRead: boolean;
  practiceDone: string[]; // ids de PracticeCase traités
  bestScore: number; // meilleur score quiz, en % (0-100)
  attempts: number;
}

export type ProgressState = Record<string, ThemeProgress>;
