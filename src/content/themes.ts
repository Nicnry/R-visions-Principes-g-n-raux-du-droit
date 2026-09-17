import { Theme } from "@/models/types";

// Thèmes 100% réels, uniquement basés sur les supports de cours donnés en
// classe (unité 61-31.3 "Principes généraux du droit"). Aucun thème déduit
// ou anticipé du plan d'études n'est listé ici — dès qu'un nouveau chapitre
// est donné en cours, ajoute-le en suivant CLAUDE.md.

export const themes: Theme[] = [
  {
    id: "bases-du-droit",
    order: 1,
    title: "Les bases du droit",
    emoji: "📜",
    color: "indigo",
    summary: "Définitions, sources du droit, organisation de la justice et application du droit.",
    estimated: false,
  },
];

export function getTheme(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}
