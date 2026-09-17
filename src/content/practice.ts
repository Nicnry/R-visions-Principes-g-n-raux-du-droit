import { PracticeCase } from "@/models/types";

// Cas 100% réels, adaptés d'exercices et de questions réellement posés en
// cours (Chapitre 1 - Les bases du droit). Aucun cas déduit/estimé n'est
// conservé ici — voir CLAUDE.md avant d'ajouter un nouveau thème.

export const practiceCases: PracticeCase[] = [
  {
    id: "pc-bases-1",
    themeId: "bases-du-droit",
    type: "examen",
    title: "Droit privé ou droit public ?",
    scenario:
      "Maxime est arrêté par la police pour conduite en état d'ébriété. Mélanie hérite de la maison de ses parents décédés. Un enseignant renvoie un élève qui adopte un comportement inadéquat en classe. Plusieurs pays ratifient un traité international.",
    question:
      "Pour chacune de ces quatre situations, indique si elle relève du droit privé ou du droit public, et justifie en fonction du critère du rapport horizontal (égalité entre particuliers) ou vertical (autorité de l'État).",
    correction:
      "Maxime (conduite en état d'ébriété) : droit public — c'est l'État, via la police et le droit pénal, qui sanctionne, dans un rapport vertical. Mélanie (héritage) : droit privé — succession entre particuliers, rapport horizontal (droit civil). L'enseignant qui renvoie un élève : droit public — l'école est une institution étatique qui exerce une autorité sur l'élève. Le traité international entre États : droit public — il règle les relations entre États, pas entre particuliers.",
    estimated: false,
  },
  {
    id: "pc-bases-2",
    themeId: "bases-du-droit",
    type: "examen",
    title: "Assurance de base vs assurance complémentaire",
    scenario:
      "Pascal doit payer tous les mois sa prime d'assurance-maladie de base (LAMal). Georges doit payer tous les mois son assurance maladie complémentaire.",
    question: "Ces deux obligations relèvent-elles du même domaine du droit ? Explique la différence.",
    correction:
      "Non. L'assurance-maladie de base (LAMal) est obligatoire et fortement réglementée par l'État dans un but d'intérêt général (accès aux soins pour tous) : elle relève du droit public. L'assurance complémentaire, elle, est souscrite librement auprès d'un assureur privé, sur la base d'un contrat entre particuliers (personne physique et compagnie d'assurance) : elle relève du droit privé.",
    estimated: false,
  },
  {
    id: "pc-bases-3",
    themeId: "bases-du-droit",
    type: "reflexion",
    title: "Quel tribunal est compétent ?",
    scenario:
      "Trois affaires doivent être jugées en première instance : (1) une infraction visant les intérêts de la Confédération, comme un acte terroriste ; (2) un délit routier mineur ; (3) un litige civil de faible valeur avec un voisin.",
    question: "Identifie le tribunal compétent en première instance pour chacune de ces trois affaires.",
    correction:
      "(1) Le Tribunal pénal fédéral (TPF, siège à Bellinzone) juge en 1ère instance les infractions visant les intérêts de la Confédération. (2) Le tribunal de police (tribunal cantonal de première instance) est compétent pour un délit routier mineur. (3) Le tribunal régional (tribunal civil de première instance) est compétent pour un litige civil de faible valeur, comme un litige de voisinage.",
    estimated: false,
  },
  {
    id: "pc-bases-4",
    themeId: "bases-du-droit",
    type: "reflexion",
    title: "Les 4 sources du droit face à une lacune",
    scenario:
      "Un juge doit trancher un litige pour lequel aucune loi ne prévoit de solution claire.",
    question:
      "Selon l'art. 1 CC, dans quel ordre le juge doit-il chercher une solution ? Cite les quatre sources du droit et précise lesquelles sont primaires ou secondaires.",
    correction:
      "Le juge applique d'abord la loi (source primaire). À défaut de disposition légale applicable, il se fonde sur le droit coutumier (la coutume) et, à défaut de coutume, sur les règles qu'il établirait lui-même s'il devait faire acte de législateur — en s'inspirant alors des solutions consacrées par la doctrine et la jurisprudence. La loi est donc la source primaire ; la coutume, la jurisprudence et la doctrine sont des sources secondaires auxquelles on recourt en cas de lacune.",
    estimated: false,
  },
];

export function getPracticeByTheme(themeId: string): PracticeCase[] {
  return practiceCases.filter((p) => p.themeId === themeId);
}
