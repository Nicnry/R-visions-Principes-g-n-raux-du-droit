import { Theme } from "@/models/types";

// ⚠️ CONTENU DÉDUIT — voir CLAUDE.md. Ces 7 thèmes sont une estimation
// basée sur l'intitulé officiel de l'unité 61-31.3 "Principes généraux du
// droit" (mots-clés : bases du droit, droits fondamentaux, droit de la
// personnalité, droit des contrats, droit du travail). À confronter au
// vrai plan de cours dès qu'il est connu.

export const themes: Theme[] = [
  {
    id: "sources-du-droit",
    order: 1,
    title: "Sources du droit",
    emoji: "📜",
    color: "indigo",
    summary: "Constitution, lois, ordonnances, jurisprudence : la hiérarchie des normes.",
    estimated: true,
  },
  {
    id: "etat-federalisme",
    order: 2,
    title: "État, fédéralisme & séparation des pouvoirs",
    emoji: "🏛️",
    color: "coral",
    summary: "Qui fait la loi, qui l'applique, qui juge — et à quel échelon.",
    estimated: true,
  },
  {
    id: "droits-fondamentaux",
    order: 3,
    title: "Droits fondamentaux",
    emoji: "⚖️",
    color: "mint",
    summary: "Liberté personnelle, égalité, propriété, liberté économique.",
    estimated: true,
  },
  {
    id: "protection-personnalite",
    order: 4,
    title: "Protection de la personnalité",
    emoji: "🛡️",
    color: "saffron",
    summary: "Art. 28 CC : atteintes à la personnalité et moyens de défense.",
    estimated: true,
  },
  {
    id: "droit-contrats",
    order: 5,
    title: "Droit des contrats",
    emoji: "🤝",
    color: "indigo",
    summary: "Code des obligations : formation, validité, types de contrats.",
    estimated: true,
  },
  {
    id: "contrat-travail",
    order: 6,
    title: "Contrat de travail",
    emoji: "💼",
    color: "coral",
    summary: "Éléments essentiels, droits et obligations de l'employeur et de l'employé·e.",
    estimated: true,
  },
  {
    id: "contrats-informatique",
    order: 7,
    title: "Contrats informatiques",
    emoji: "💻",
    color: "mint",
    summary: "Licences logicielles, prestations IT, contrats SaaS.",
    estimated: true,
  },
];

export function getTheme(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}
