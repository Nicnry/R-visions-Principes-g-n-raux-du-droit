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
  {
    id: "pc-const-1",
    themeId: "droit-constitutionnel",
    type: "examen",
    title: "Restreindre un droit fondamental : les 4 conditions",
    scenario:
      "Une manifestation est autorisée mais l'autorité impose de modifier son parcours pour préserver la tranquillité des riverains. Un organisateur estime que sa liberté de réunion est violée.",
    question: "Selon l'art. 36 Cst., à quelles conditions cette restriction est-elle admissible ?",
    correction:
      "Il faut quatre conditions cumulatives : (1) une base légale (suffisamment précise ; une loi si la restriction est grave) ; (2) un intérêt public — ici la tranquillité, qui fait partie de l'ordre public avec la sécurité et la santé — ou la protection d'un droit fondamental d'autrui ; (3) la proportionnalité : la restriction doit se limiter au strict nécessaire (modifier le parcours plutôt qu'interdire la manifestation) ; (4) le respect de l'essence du droit fondamental, qui est inviolable.",
    estimated: false,
  },
  {
    id: "pc-const-2",
    themeId: "droit-constitutionnel",
    type: "examen",
    title: "Quelle restriction relève de quel intérêt public ?",
    scenario:
      "Trois mesures : interdire la publicité le long des autoroutes ; limiter la vente de médicaments en ligne ; restreindre le parcours d'une manifestation.",
    question: "Pour chacune, indique le volet de l'ordre public (intérêt public) invoqué.",
    correction:
      "Publicité le long des autoroutes : la sécurité. Vente de médicaments en ligne : la santé. Parcours d'une manifestation : la tranquillité.",
    estimated: false,
  },
  {
    id: "pc-const-3",
    themeId: "droit-constitutionnel",
    type: "reflexion",
    title: "Quel droit fondamental est en jeu ?",
    scenario:
      "(1) Un patient doit consentir à une opération. (2) Une personne est placée en détention préventive. (3) Un journal publie une enquête. (4) Un chercheur enseigne et publie ses travaux.",
    question: "Identifie la liberté concernée dans chaque situation.",
    correction:
      "(1) Liberté personnelle (art. 10 Cst.), intégrité physique. (2) Liberté personnelle, liberté de mouvement : la détention préventive en est l'atteinte typique, qui doit respecter l'art. 36 Cst. (3) Liberté de la presse ou des médias (libertés de communication). (4) Liberté de la science (enseignement et recherche).",
    estimated: false,
  },
  {
    id: "pc-const-4",
    themeId: "droit-constitutionnel",
    type: "reflexion",
    title: "Droit fédéral ou droit international ?",
    scenario:
      "Une loi fédérale semble contredire une convention internationale ratifiée par la Suisse.",
    question: "Quels articles de la Cst. permettent de raisonner et que disent-ils ?",
    correction:
      "L'art. 5 al. 4 Cst. : la Confédération et les cantons respectent le droit international (primauté du droit international). L'art. 190 Cst. : le Tribunal fédéral et les autres autorités sont tenus d'appliquer les lois fédérales et le droit international (incorporation). Dans la hiérarchie des normes vue en cours, le droit international est supérieur au droit national.",
    estimated: false,
  },
  {
    id: "pc-const-5",
    themeId: "droit-constitutionnel",
    type: "reflexion",
    title: "Qui fait quoi : la séparation des pouvoirs",
    scenario: "Une nouvelle loi est discutée, adoptée, appliquée, puis un litige à son sujet est porté en justice.",
    question: "Quel organe intervient à chaque étape (niveau fédéral) ?",
    correction:
      "L'Assemblée fédérale (Conseil national et Conseil des États, système bicaméral) édicte la loi — pouvoir législatif. Le Conseil fédéral (7 membres, collégial) l'exécute — pouvoir exécutif. Les tribunaux (dont le TF) veillent à sa bonne application — pouvoir judiciaire.",
    estimated: false,
  },
];

export function getPracticeByTheme(themeId: string): PracticeCase[] {
  return practiceCases.filter((p) => p.themeId === themeId);
}
