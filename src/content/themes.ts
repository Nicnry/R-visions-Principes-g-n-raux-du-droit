import { Theme } from "@/models/types";

// Thèmes basés sur le plan d'études officiel de l'unité 61-31.3
// "Principes généraux du droit" (matières étudiées, cf. Présentation du
// cours IG 26/27) et sur les supports de cours réels donnés en classe.
// Le Chapitre 1 (bases-du-droit) a été donné et confirmé : estimated: false.
// Les autres thèmes annoncés au plan du cours n'ont pas encore été donnés
// en détail : ils restent estimated: true jusqu'à réception du support de
// cours correspondant (voir CLAUDE.md).

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
  {
    id: "droits-fondamentaux",
    order: 2,
    title: "Droits fondamentaux",
    emoji: "⚖️",
    color: "mint",
    summary: "Liberté personnelle, égalité, propriété, liberté économique.",
    estimated: true,
  },
  {
    id: "protection-personnalite",
    order: 3,
    title: "Protection de la personnalité",
    emoji: "🛡️",
    color: "saffron",
    summary: "Art. 28 CC : atteintes à la personnalité et moyens de défense.",
    estimated: true,
  },
  {
    id: "droit-contrats",
    order: 4,
    title: "Droit des contrats",
    emoji: "🤝",
    color: "indigo",
    summary: "Code des obligations : formation, validité, lien avec le domaine informatique.",
    estimated: true,
  },
  {
    id: "contrat-travail",
    order: 5,
    title: "Contrat de travail",
    emoji: "💼",
    color: "coral",
    summary: "Éléments essentiels, droits et obligations de l'employeur et de l'employé·e.",
    estimated: true,
  },
];

export function getTheme(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}
