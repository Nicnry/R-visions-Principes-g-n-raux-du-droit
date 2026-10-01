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
  {
    id: "pc-bases-5",
    themeId: "bases-du-droit",
    type: "examen",
    title: "Classer des matières",
    scenario:
      "Droit des assurances sociales, droit du travail, poursuite pour dettes et faillites, droit bancaire, droit fiscal, droit des obligations, droit administratif, droit des contrats, droit pénal, droit des sociétés, droit constitutionnel, droit pénal des mineurs.",
    question: "Classe chaque matière en droit privé ou droit public.",
    correction:
      "Droit privé : droit bancaire, droit des obligations, droit des contrats, droit des sociétés, et droit du travail (principalement privé, avec des aspects publics : « les deux selon le contexte » au Wooclap). Droit public : assurances sociales, poursuite pour dettes et faillites, droit fiscal, droit administratif, droit pénal, droit constitutionnel, droit pénal des mineurs.",
    estimated: false,
  },
  {
    id: "pc-bases-6",
    themeId: "bases-du-droit",
    type: "examen",
    title: "Les sources du droit : qui, où, comment ?",
    scenario:
      "Exercice en groupes : pour chaque source, répondre à : par qui, où la trouver, comment la chercher, exemple.",
    question: "Réponds pour la loi, la jurisprudence, la doctrine et la coutume.",
    correction:
      "Loi : édictée par le peuple et l'Assemblée fédérale ; fedlex ; par le nom de la loi ou des mots-clés (idéalement RS) ; ex. LTVA, LAVS. Jurisprudence : rendue par l'ensemble des tribunaux suisses ; bger.ch et sites cantonaux ; ex. ATF 119 IV 59. Doctrine : écrite par juristes, professeurs, juges ; bibliothèques, revues, articles en ligne, moteurs de recherche ; ouvrages, thèses. Coutume : droit non écrit, usage durable reconnu comme juridiquement obligatoire ; difficile à trouver (voir les slides du cours).",
    estimated: false,
  },
  {
    id: "pc-bases-7",
    themeId: "bases-du-droit",
    type: "examen",
    title: "FF, RO ou RS ?",
    scenario:
      "Tu dois citer une loi fédérale en vigueur et vérifier son texte à jour, puis retrouver sa première publication et la version qui fait foi.",
    question: "Quel recueil utilises-tu dans chaque cas ?",
    correction:
      "Texte à jour, classé par matière : RS. Première publication : FF (mais on ne se base pas dessus). Version qui fait foi : le RO (depuis le 1er janvier 2026, c'est la version électronique du RO et de la FF qui fait foi). Les cantons ont leur propre RO et RS (RSJU, RSN).",
    estimated: false,
  },
  {
    id: "pc-bases-8",
    themeId: "bases-du-droit",
    type: "reflexion",
    title: "Droit impératif ou dispositif ?",
    scenario:
      "Deux parties au contrat veulent écarter une règle légale. L'une porte sur l'art. 361 CO, l'autre sur l'art. 364 al. 3 CO.",
    question: "Peuvent-elles y déroger ?",
    correction:
      "Art. 361 CO = droit impératif : aucune dérogation par accord. Art. 364 al. 3 CO = droit dispositif : la règle ne s'applique qu'à défaut d'accord contraire, les parties peuvent donc y déroger.",
    estimated: false,
  },
  {
    id: "pc-bases-9",
    themeId: "bases-du-droit",
    type: "reflexion",
    title: "Après le tribunal cantonal : quelle voie de recours ?",
    scenario:
      "Un justiciable perd en première instance puis devant le tribunal cantonal et estime que ses droits fondamentaux sont violés.",
    question: "Quelles instances reste-t-il ?",
    correction:
      "Le Tribunal fédéral (garant de l'application uniforme du droit fédéral et du respect des droits fondamentaux). Ensuite, une fois toutes les instances suisses épuisées, la Cour européenne des droits de l'Homme (Wooclap : 75 % de bonnes réponses). Chaîne civile : tribunal civil → tribunal cantonal/Cour suprême → TF.",
    estimated: false,
  },
  {
    id: "pc-bases-10",
    themeId: "bases-du-droit",
    type: "reflexion",
    title: "Interpréter une notion vague",
    scenario:
      "Une disposition parle de « justes motifs », sans les définir. Un litige oppose deux parties sur ce point.",
    question: "Pourquoi est-ce difficile et comment le juge procède-t-il ?",
    correction:
      "Le texte de la loi est général, les situations particulières ; « justes motifs » est une notion non définie (comme « bonne foi » et « usage », notions évolutives). Le juge interprète pour garantir l'égalité devant la loi : il applique la règle générale aux faits (syllogisme judiciaire), et à défaut de réponse dans la loi suit l'art. 1 al. 2-3 CC : coutume, puis règle qu'il établirait comme législateur, en s'inspirant de la doctrine et de la jurisprudence.",
    estimated: false,
  },
  {
    id: "pc-bases-11",
    themeId: "bases-du-droit",
    type: "examen",
    title: "Une règle devient-elle coutume ?",
    scenario:
      "Une pratique est suivie depuis peu de temps dans un secteur, mais personne ne la considère comme obligatoire.",
    question: "Constitue-t-elle une coutume ?",
    correction:
      "Non : il faut du droit non écrit, un usage d'une certaine durée qui persiste dans le temps, et la reconnaissance par la collectivité comme juridiquement contraignant. Les conditions de durée et de caractère obligatoire manquent.",
    estimated: false,
  },
  {
    id: "pc-bases-12",
    themeId: "bases-du-droit",
    type: "reflexion",
    title: "Garanties de procédure",
    scenario:
      "Une personne sans moyens est poursuivie ; l'autorité refuse de l'entendre avant de statuer et tarde à rendre une décision.",
    question: "Quelles garanties de l'art. 29 Cst. sont en jeu ?",
    correction:
      "Droit d'être entendu (art. 29 al. 2), interdiction du déni de justice formel et droit à un procès équitable (al. 1), droit à l'assistance judiciaire gratuite et à un défenseur gratuit (al. 3). Fondement général : art. 6 CEDH, art. 29, 30 et 32 Cst.",
    estimated: false,
  },
  {
    id: "pc-bases-13",
    themeId: "bases-du-droit",
    type: "reflexion",
    title: "Quel tribunal pour un litige de brevet ?",
    scenario:
      "Un litige civil de contrefaçon d'un brevet logiciel doit être jugé.",
    question: "Quel est le tribunal compétent en première instance et où siège-t-il ?",
    correction:
      "Le Tribunal fédéral des brevets (St-Gall) juge en 1ère instance les litiges civils en matière de brevets et de contrefaçon ; ensuite le Tribunal fédéral.",
    estimated: false,
  },
  {
    id: "pc-const-6",
    themeId: "droit-constitutionnel",
    type: "examen",
    title: "Le droit fondamental peut-il être restreint ?",
    scenario:
      "Une loi précise permet d'interdire toute manifestation, sans exception, en tout temps, pour des raisons de tranquillité.",
    question: "Cette restriction respecte-t-elle l'art. 36 Cst. ?",
    correction:
      "Il y a base légale et intérêt public (tranquillité), mais la proportionnalité fait défaut : l'État doit se limiter au strict nécessaire (adapter le parcours plutôt que tout interdire). Par ailleurs, une interdiction totale toucherait à l'essence de la liberté de réunion, qui est inviolable (art. 36 al. 4).",
    estimated: false,
  },
  {
    id: "pc-const-7",
    themeId: "droit-constitutionnel",
    type: "reflexion",
    title: "Fédéral, cantonal ou communal ?",
    scenario:
      "Un Grand conseil, un Conseil communal, un Conseil d'État, un Conseil général, le Conseil fédéral.",
    question: "Associe chaque organe au pouvoir et au niveau.",
    correction:
      "Grand conseil : législatif cantonal. Conseil communal : exécutif communal. Conseil d'État : exécutif cantonal. Conseil général : législatif communal (ou assemblée communale). Conseil fédéral : exécutif fédéral (7 membres, collégial, élus tous les 4 ans par l'Assemblée fédérale).",
    estimated: false,
  },
  {
    id: "pc-const-8",
    themeId: "droit-constitutionnel",
    type: "reflexion",
    title: "Les deux Chambres",
    scenario:
      "Un projet de loi est débattu au Parlement fédéral.",
    question: "Quelles Chambres, comment siègent-elles et qui représentent-elles ?",
    correction:
      "Système bicaméral : le Conseil national (Chambre du peuple) et le Conseil des États (Chambre haute, Chambre des cantons) se partagent le même pouvoir, traitent les mêmes affaires et siègent séparément.",
    estimated: false,
  },
  {
    id: "pc-const-9",
    themeId: "droit-constitutionnel",
    type: "examen",
    title: "Structure de la Constitution",
    scenario:
      "On te demande où trouver (a) les droits fondamentaux, (b) les autorités fédérales, (c) la révision de la Constitution, (d) les dispositions générales.",
    question: "Cite le titre et les articles pour chacun.",
    correction:
      "(a) Titre 2, art. 7-41. (b) Titre 5, art. 173-191. (c) Titre 6, art. 192-196. (d) Titre 1, art. 1-6. Titre 3 (art. 42-135) : Confédération, cantons et communes ; Titre 4 (art. 136-142) : peuple et cantons.",
    estimated: false,
  },
  {
    id: "pc-const-10",
    themeId: "droit-constitutionnel",
    type: "reflexion",
    title: "Contre qui joue un droit fondamental ?",
    scenario:
      "Un employé invoque sa liberté d'opinion contre une décision de l'État, un autre l'invoque contre son collègue.",
    question: "Qui est destinataire des droits fondamentaux ?",
    correction:
      "Les droits fondamentaux sont dirigés contre l'État ou une autorité disposant de la puissance publique, qui doit les respecter ; les individus en sont les bénéficiaires. Le premier cas est typique ; entre particuliers, la liberté d'opinion et d'expression est évoquée comme liberté de communication.",
    estimated: false,
  },
];

export function getPracticeByTheme(themeId: string): PracticeCase[] {
  return practiceCases.filter((p) => p.themeId === themeId);
}
