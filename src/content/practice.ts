import { PracticeCase } from "@/models/types";

// ⚠️ Les cas "bases-du-droit" (estimated: false) sont adaptés d'exercices
// et de questions réellement posés en cours (Chapitre 1). Les autres cas
// restent déduits du plan d'études (estimated: true) — voir CLAUDE.md
// avant de modifier.

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
    id: "pc-df-1",
    themeId: "droits-fondamentaux",
    type: "reflexion",
    title: "Une interdiction proportionnée ?",
    scenario:
      "Une commune interdit totalement toute forme d'affichage publicitaire sur son territoire, y compris dans les zones commerciales, invoquant la protection du paysage.",
    question:
      "Cette restriction à la liberté économique te semble-t-elle conforme à l'art. 36 Cst. ? Discute en particulier la proportionnalité.",
    correction:
      "La base légale et l'intérêt public (protection du paysage) peuvent être admis, mais une interdiction totale, y compris dans les zones commerciales où l'impact paysager est déjà limité, pose question sous l'angle de la proportionnalité : une mesure moins radicale (réglementation de la taille, de l'emplacement) pourrait suffire à atteindre le même but. Une interdiction totale et non nuancée risque d'être jugée disproportionnée.",
    estimated: true,
  },
  {
    id: "pc-df-2",
    themeId: "droits-fondamentaux",
    type: "examen",
    title: "Les quatre conditions de restriction",
    scenario:
      "La loi impose un couvre-feu général à toute la population dans une ville, pour une durée indéterminée, en invoquant la sécurité publique.",
    question: "Analyse cette mesure à la lumière des quatre conditions posées par l'art. 36 Cst.",
    correction:
      "1) Base légale : il faut une loi (ou en cas d'urgence, une base constitutionnelle/légale spécifique) qui prévoit la mesure. 2) Intérêt public : la sécurité publique est en principe un intérêt légitime. 3) Proportionnalité : la mesure doit être apte, nécessaire et raisonnable — un couvre-feu général et de durée indéterminée est difficilement proportionné si des mesures plus ciblées (zone, horaire réduit, durée limitée) permettraient d'atteindre le même but. 4) Noyau intangible : la liberté de mouvement n'est pas absolue, mais une mesure disproportionnée et permanente s'en approche dangereusement. Conclusion : la mesure est probablement contraire à l'art. 36 Cst. en l'état, notamment faute de proportionnalité et de limitation dans le temps.",
    estimated: true,
  },
  {
    id: "pc-pp-1",
    themeId: "protection-personnalite",
    type: "reflexion",
    title: "Publier une photo sans autorisation",
    scenario:
      "Un étudiant publie sur son réseau social une photo prise à une soirée, sur laquelle apparaît un camarade clairement identifiable, sans lui avoir demandé son accord.",
    question: "Y a-t-il une atteinte à la personnalité au sens de l'art. 28 CC ? Quels arguments des deux côtés ?",
    correction:
      "Il peut y avoir atteinte au droit à l'image, composante de la personnalité protégée par l'art. 28 CC, dès lors que la personne est identifiable et n'a pas consenti à la diffusion. L'auteur de la photo pourrait invoquer un intérêt prépondérant (photo anodine, contexte public, faible caractère intrusif) pour tenter de justifier la publication, mais l'absence de consentement reste l'élément central : en cas de contestation, la personne concernée peut demander le retrait de la photo.",
    estimated: true,
  },
  {
    id: "pc-pp-2",
    themeId: "protection-personnalite",
    type: "examen",
    title: "Atteinte justifiée ou non ?",
    scenario:
      "Un site d'actualité publie le nom complet d'une personne condamnée pénalement, plusieurs années après les faits, alors que cette personne mène une vie discrète depuis sa réinsertion.",
    question: "L'atteinte à la personnalité de cette personne est-elle justifiée ? Structure ta réponse.",
    correction:
      "Étape 1 : il y a bien une atteinte (divulgation d'informations touchant à la sphère privée / à la réputation). Étape 2 : l'atteinte est présumée illicite, sauf justification. Étape 3 : recherche d'une justification — intérêt public à l'information (souvent plus fort peu après les faits, mais qui s'estompe avec le temps et le « droit à l'oubli »), consentement (absent ici), base légale (pas pertinente ici). Conclusion : plus le temps passe et plus la personne s'est réinsérée discrètement, plus l'intérêt à la réhabilitation et à l'oubli pèse lourd face à l'intérêt informatif du public — l'atteinte est alors difficilement justifiable.",
    estimated: true,
  },
  {
    id: "pc-contrats-1",
    themeId: "droit-contrats",
    type: "reflexion",
    title: "Un contrat sans écrit, valable ?",
    scenario:
      "Deux entreprises se mettent d'accord oralement, lors d'un salon, sur la fourniture d'un lot de matériel informatique. Aucun document écrit n'est signé.",
    question: "Le contrat est-il valable ? Qu'est-ce qui pourrait poser problème en pratique ?",
    correction:
      "Oui, en principe le contrat est valable : la forme est libre en droit suisse (art. 1 et 11 CO), sauf exigence légale contraire (pas le cas pour une vente de matériel). En pratique, le problème n'est pas la validité mais la preuve : en cas de litige, il sera plus difficile de démontrer le contenu exact de l'accord (prix, quantité, délais) sans écrit.",
    estimated: true,
  },
  {
    id: "pc-contrats-2",
    themeId: "droit-contrats",
    type: "examen",
    title: "Erreur essentielle ou simple mauvaise affaire ?",
    scenario:
      "Une entreprise achète une licence logicielle en croyant, sur la base d'une brochure ambiguë, qu'elle inclut la maintenance à vie. Ce n'est pas le cas ; elle doit payer un abonnement annuel séparé.",
    question:
      "L'entreprise peut-elle invalider le contrat pour erreur essentielle (art. 24 CO) ? Distingue erreur essentielle et simple regret.",
    correction:
      "Il faut d'abord vérifier si l'erreur porte sur un élément que l'entreprise considérait subjectivement comme un élément nécessaire du contrat (la maintenance à vie), ET que cela était reconnaissable de bonne foi par l'autre partie comme une condition essentielle. Si la brochure était réellement trompeuse sur ce point précis, on peut retenir une erreur essentielle sur un fait tenu de bonne foi pour un élément nécessaire du contrat (art. 24 al. 1 ch. 4 CO), ouvrant la voie à l'invalidation. Si l'entreprise s'est simplement fait une fausse idée sans base objective suffisante, il s'agit d'un simple regret commercial, non protégé.",
    estimated: true,
  },
  {
    id: "pc-travail-1",
    themeId: "contrat-travail",
    type: "reflexion",
    title: "Freelance ou salarié ?",
    scenario:
      "Une développeuse facture ses heures à une entreprise, mais celle-ci lui impose des horaires fixes, un lieu de travail précis et un contrôle constant de ses tâches.",
    question:
      "S'agit-il d'un contrat de travail ou d'un mandat/contrat d'entreprise ? Quel critère est déterminant ?",
    correction:
      "Le critère déterminant est le lien de subordination (art. 319 CO) : horaires imposés, lieu de travail fixé, contrôle constant sont des indices forts de subordination, typiques du contrat de travail — malgré la facturation « à l'heure » qui pourrait faire penser à de l'indépendance. La qualification réelle prime sur l'intitulé donné par les parties.",
    estimated: true,
  },
  {
    id: "pc-travail-2",
    themeId: "contrat-travail",
    type: "examen",
    title: "Licenciement abusif ?",
    scenario:
      "Un employé est licencié peu après avoir signalé, de bonne foi, une irrégularité comptable à sa hiérarchie.",
    question: "Ce licenciement peut-il être qualifié d'abusif au sens de l'art. 336 CO ? Justifie.",
    correction:
      "Un congé donné en raison de l'exercice de bonne foi d'un droit ou d'une prétention légitime par le travailleur (ici, un signalement fait de bonne foi) peut être qualifié d'abusif au sens de l'art. 336 CO, même si l'employeur reste libre de résilier le contrat (liberté de résiliation). Un congé abusif reste valable (le contrat prend fin), mais ouvre le droit à une indemnité pouvant aller jusqu'à 6 mois de salaire (art. 336a CO).",
    estimated: true,
  },
];

export function getPracticeByTheme(themeId: string): PracticeCase[] {
  return practiceCases.filter((p) => p.themeId === themeId);
}
