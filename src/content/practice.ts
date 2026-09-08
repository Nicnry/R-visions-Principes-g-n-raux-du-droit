import { PracticeCase } from "@/models/types";

// ⚠️ CONTENU DÉDUIT (estimated: true) — voir CLAUDE.md avant de modifier.

export const practiceCases: PracticeCase[] = [
  {
    id: "pc-sources-1",
    themeId: "sources-du-droit",
    type: "reflexion",
    title: "Une ordonnance peut-elle tout décider ?",
    scenario:
      "Le Conseil fédéral édicte une ordonnance qui impose une nouvelle obligation aux entreprises, sans qu'aucune loi fédérale ne le prévoie.",
    question:
      "Cette ordonnance est-elle valable ? Justifie ta réponse à l'aide du principe de hiérarchie des normes.",
    correction:
      "Non, en principe : une ordonnance ne peut que préciser ou concrétiser une loi existante, elle ne peut pas créer une obligation nouvelle qui ne repose sur aucune base légale (loi ou Constitution). Sans base légale suffisante, elle est contraire au principe de la hiérarchie des normes et peut être annulée par le juge.",
    estimated: true,
  },
  {
    id: "pc-sources-2",
    themeId: "sources-du-droit",
    type: "examen",
    title: "Identifier le type de norme",
    scenario:
      "On te donne trois textes : (1) la Loi fédérale sur la protection des données, (2) l'Ordonnance sur la protection des données, (3) un arrêt du Tribunal fédéral sur l'interprétation de cette loi.",
    question: "Classe ces trois textes selon leur rang dans la hiérarchie des normes et explique le rôle de chacun.",
    correction:
      "Rang le plus élevé : la loi fédérale (adoptée par le Parlement, éventuellement soumise au référendum). Ensuite l'ordonnance (adoptée par le Conseil fédéral, doit rester dans le cadre fixé par la loi). L'arrêt du Tribunal fédéral n'est pas à proprement parler une « norme » au même rang : c'est de la jurisprudence, qui interprète la loi mais ne peut pas la contredire ni créer une nouvelle règle générale et abstraite.",
    estimated: true,
  },
  {
    id: "pc-etat-1",
    themeId: "etat-federalisme",
    type: "reflexion",
    title: "Qui décide de quoi ?",
    scenario:
      "Un canton adopte une loi qui organise l'école obligatoire sur son territoire. En parallèle, la Confédération négocie et signe un traité international.",
    question:
      "Ces deux compétences relèvent-elles du même niveau de l'État ? Explique en te basant sur le principe d'attribution des compétences.",
    correction:
      "Non. L'instruction publique est une compétence essentiellement cantonale (les cantons gardent toute compétence non attribuée à la Confédération). La conclusion de traités internationaux, elle, est une compétence fédérale (art. 54 Cst.) : seule la Confédération représente la Suisse à l'extérieur.",
    estimated: true,
  },
  {
    id: "pc-etat-2",
    themeId: "etat-federalisme",
    type: "examen",
    title: "Référendum ou initiative ?",
    scenario:
      "Un groupe de citoyens souhaite s'opposer à une loi fédérale qui vient d'être adoptée par le Parlement. Un autre groupe souhaite au contraire faire inscrire un nouveau principe dans la Constitution, alors qu'aucun projet n'existe encore au Parlement.",
    question: "Quel instrument de démocratie directe chaque groupe doit-il utiliser, et pourquoi ?",
    correction:
      "Le premier groupe doit lancer un référendum facultatif (100 000 signatures dans les 100 jours) pour soumettre la loi déjà votée au vote populaire. Le second groupe doit lancer une initiative populaire (100 000 signatures, délai de 18 mois) pour proposer lui-même un nouveau texte constitutionnel, indépendamment de toute décision préalable du Parlement.",
    estimated: true,
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
  {
    id: "pc-it-1",
    themeId: "contrats-informatique",
    type: "reflexion",
    title: "Obligation de résultat ou de moyens ?",
    scenario:
      "Une agence est mandatée pour développer une application mobile « clé en main » livrée à une date précise, contre un prix forfaitaire.",
    question:
      "S'agit-il plutôt d'un contrat d'entreprise ou d'un mandat ? Quelle conséquence si l'application ne fonctionne pas correctement à la livraison ?",
    correction:
      "Un développement « clé en main », à prix forfaitaire et avec un résultat attendu précis, s'analyse en principe comme un contrat d'entreprise (art. 363 ss CO) : obligation de résultat. Si l'application ne fonctionne pas correctement, le client peut invoquer les règles sur les défauts de l'ouvrage (réduction du prix, réfection, voire résolution selon la gravité), sans devoir démontrer une faute de l'agence — contrairement au mandat, où seule une obligation de diligence (moyens) est due.",
    estimated: true,
  },
  {
    id: "pc-it-2",
    themeId: "contrats-informatique",
    type: "examen",
    title: "Qualifier un contrat SaaS",
    scenario:
      "Une PME s'abonne à un service cloud de gestion de projet : elle paie un abonnement mensuel, accède au logiciel via navigateur, et le prestataire assure l'hébergement, les mises à jour et le support.",
    question:
      "Identifie les éléments contractuels combinés dans ce contrat SaaS et explique brièvement le rôle de chacun.",
    correction:
      "On retrouve typiquement : un élément de bail/licence d'usage (mise à disposition temporaire du logiciel contre paiement périodique, sans transfert de propriété du code), un élément de mandat (hébergement, maintenance, support — obligation de diligence du prestataire), et potentiellement des clauses spécifiques de type SLA (niveau de service garanti, disponibilité) ainsi que des clauses sur le traitement des données (localisation, sous-traitance, conformité LPD) qui viennent s'ajouter à cette base contractuelle mixte.",
    estimated: true,
  },
];

export function getPracticeByTheme(themeId: string): PracticeCase[] {
  return practiceCases.filter((p) => p.themeId === themeId);
}
