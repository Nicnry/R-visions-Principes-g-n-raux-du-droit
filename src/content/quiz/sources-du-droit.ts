import { QuizQuestion } from "@/models/types";

// ⚠️ CONTENU DÉDUIT (estimated: true) — voir CLAUDE.md avant de modifier.
// Pour ajouter une question : copie un bloc, change l'id, et garde
// correctIndex cohérent avec l'ordre de `choices` (le mélange est fait
// automatiquement à l'affichage, pas besoin d'y penser ici).

const themeId = "sources-du-droit";

export const quizSourcesDuDroit: QuizQuestion[] = [
  {
    id: "q-sources-01", themeId,
    question: "Quelle norme se situe au sommet de la hiérarchie du droit interne suisse ?",
    choices: ["La Constitution fédérale", "Une loi fédérale", "Une ordonnance du Conseil fédéral", "Un règlement communal"],
    correctIndex: 0,
    explanation: "La Constitution fédérale prime sur toutes les lois et ordonnances internes ; seul le droit international ratifié se situe encore au-dessus.",
    estimated: true,
  },
  {
    id: "q-sources-02", themeId,
    question: "Qui adopte une loi fédérale en Suisse ?",
    choices: ["Le Tribunal fédéral", "Le Conseil fédéral seul", "L'Assemblée fédérale (Parlement)", "Les cantons"],
    correctIndex: 2,
    explanation: "Les lois fédérales sont votées par l'Assemblée fédérale, composée du Conseil national et du Conseil des États.",
    estimated: true,
  },
  {
    id: "q-sources-03", themeId,
    question: "À quoi sert principalement une ordonnance ?",
    choices: ["À modifier la Constitution", "À préciser l'application d'une loi", "À remplacer une loi votée par le peuple", "À juger un litige entre particuliers"],
    correctIndex: 1,
    explanation: "L'ordonnance concrétise et précise une loi ; elle ne peut pas créer d'obligations qui ne découlent pas de cette loi.",
    estimated: true,
  },
  {
    id: "q-sources-04", themeId,
    question: "La jurisprudence du Tribunal fédéral est...",
    choices: ["Une loi comme une autre", "Une interprétation du droit par les tribunaux, qui guide son application", "Sans aucune influence sur le droit", "Supérieure à la Constitution"],
    correctIndex: 1,
    explanation: "La jurisprudence n'est pas formellement une source de droit contraignante comme la loi, mais elle influence fortement l'interprétation et l'application du droit.",
    estimated: true,
  },
  {
    id: "q-sources-05", themeId,
    question: "Le Code civil (CC) et le Code des obligations (CO) relèvent principalement...",
    choices: ["Du droit public", "Du droit pénal", "Du droit privé", "Du droit international"],
    correctIndex: 2,
    explanation: "CC et CO règlent les rapports entre particuliers sur un pied d'égalité : c'est le cœur du droit privé suisse.",
    estimated: true,
  },
  {
    id: "q-sources-06", themeId,
    question: "Quelle affirmation est correcte concernant le droit public ?",
    choices: ["Il ne concerne que les relations entre entreprises", "Il règle les rapports où l'État exerce une forme d'autorité", "Il est toujours cantonal", "Il n'existe pas en Suisse"],
    correctIndex: 1,
    explanation: "Le droit public encadre les situations où l'État agit avec une forme d'autorité (droit constitutionnel, administratif, pénal, etc.).",
    estimated: true,
  },
  {
    id: "q-sources-07", themeId,
    question: "Une ordonnance peut-elle contredire la loi qu'elle est censée appliquer ?",
    choices: ["Oui, si le Conseil fédéral le juge utile", "Non, elle doit rester dans le cadre fixé par la loi", "Oui, mais seulement en cas d'urgence", "Cela dépend du canton"],
    correctIndex: 1,
    explanation: "Une norme inférieure (ordonnance) ne peut jamais contredire une norme supérieure (loi) : c'est le principe même de la hiérarchie des normes.",
    estimated: true,
  },
  {
    id: "q-sources-08", themeId,
    question: "Qu'est-ce que la doctrine, en droit ?",
    choices: ["Les décisions des tribunaux", "Les écrits et analyses des juristes", "Les lois cantonales", "Les traités internationaux"],
    correctIndex: 1,
    explanation: "La doctrine désigne les commentaires, articles et ouvrages rédigés par les juristes qui analysent et discutent le droit en vigueur.",
    estimated: true,
  },
  {
    id: "q-sources-09", themeId,
    question: "Un traité international ratifié par la Suisse se situe, en principe...",
    choices: ["En dessous des ordonnances", "Au même niveau qu'un règlement communal", "Au-dessus du droit interne", "Il n'a aucune valeur juridique"],
    correctIndex: 2,
    explanation: "Le droit international ratifié occupe, en principe, le rang le plus élevé dans la hiérarchie des normes appliquée en Suisse.",
    estimated: true,
  },
  {
    id: "q-sources-10", themeId,
    question: "Quel type de norme peut faire l'objet d'un référendum facultatif ?",
    choices: ["Une ordonnance du Conseil fédéral", "Une loi fédérale", "Un arrêt du Tribunal fédéral", "Une directive interne d'entreprise"],
    correctIndex: 1,
    explanation: "Seules les lois fédérales (et certains autres actes de l'Assemblée fédérale) peuvent faire l'objet d'un référendum facultatif ; les ordonnances n'y sont pas soumises.",
    estimated: true,
  },
  {
    id: "q-sources-11", themeId,
    question: "Le droit cantonal doit-il respecter le droit fédéral ?",
    choices: ["Non, les cantons sont totalement indépendants", "Oui, le droit fédéral prime sur le droit cantonal contraire", "Seulement pour les questions fiscales", "Seulement si le canton est d'accord"],
    correctIndex: 1,
    explanation: "Le principe de la primauté du droit fédéral impose au droit cantonal de respecter le droit fédéral dans les matières que la Confédération a réglées.",
    estimated: true,
  },
  {
    id: "q-sources-12", themeId,
    question: "Qu'est-ce qu'une norme « générale et abstraite » ?",
    choices: ["Une règle qui vise une personne précise", "Une règle qui s'applique à un nombre indéterminé de cas et de personnes", "Un jugement rendu dans une affaire particulière", "Un contrat entre deux entreprises"],
    correctIndex: 1,
    explanation: "Une norme juridique générale et abstraite (loi, ordonnance) s'applique à un nombre indéterminé de situations et de personnes, contrairement à une décision individuelle.",
    estimated: true,
  },
  {
    id: "q-sources-13", themeId,
    question: "Quel organe peut annuler une ordonnance jugée contraire à la loi ?",
    choices: ["Uniquement le Conseil fédéral lui-même", "Le juge, dans le cadre d'un contrôle de la légalité", "Aucun organe, une ordonnance est toujours valable", "Uniquement le peuple par votation"],
    correctIndex: 1,
    explanation: "Le juge peut, dans le cadre d'un contrôle concret (à l'occasion d'un litige), refuser d'appliquer une disposition d'ordonnance jugée contraire à la loi ou à la Constitution.",
    estimated: true,
  },
  {
    id: "q-sources-14", themeId,
    question: "Laquelle de ces sources n'est PAS une source formelle contraignante du droit suisse ?",
    choices: ["La Constitution fédérale", "Une loi fédérale", "La doctrine juridique", "Une ordonnance"],
    correctIndex: 2,
    explanation: "La doctrine (avis des juristes) éclaire l'interprétation du droit mais ne constitue pas, en elle-même, une source formelle contraignante.",
    estimated: true,
  },
  {
    id: "q-sources-15", themeId,
    question: "Pourquoi distingue-t-on droit privé et droit public ?",
    choices: ["Uniquement pour des raisons historiques sans portée pratique", "Parce que les règles de procédure et les tribunaux compétents peuvent différer", "Parce que le droit privé n'est plus utilisé aujourd'hui", "Parce que seul le droit public s'applique aux entreprises"],
    correctIndex: 1,
    explanation: "La distinction a une portée pratique : elle influence notamment la procédure applicable et les autorités/tribunaux compétents pour trancher un litige.",
    estimated: true,
  },
];
