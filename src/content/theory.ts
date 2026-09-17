import { TheoryBlock } from "@/models/types";

// ⚠️ Le bloc "bases-du-droit" (estimated: false) vient du support de cours
// réel (Chapitre 1 - Les bases du droit, PGD IG 25/26). Les autres blocs
// restent déduits du plan d'études (estimated: true) — voir CLAUDE.md
// avant de modifier.

export const theory: TheoryBlock[] = [
  {
    themeId: "bases-du-droit",
    estimated: false,
    intro:
      "Le droit est omniprésent dans la vie quotidienne. Ce chapitre pose les notions de base : qu'est-ce que le droit, comment se distingue-t-il selon ses domaines, d'où vient-il (ses sources), qui l'applique (l'organisation de la justice) et comment l'applique-t-on concrètement.",
    sections: [
      {
        heading: "Définition du droit : objectif et subjectif",
        content:
          "Le droit objectif est l'ensemble de règles générales et abstraites qui indiquent ce qui doit être fait dans un cas donné, édictées ou reconnues par une autorité compétente, dans le but de régir les relations sociales, et dont le respect est assuré par des moyens de contrainte (sanction de la force publique). Le droit subjectif (« mon droit », « mes droits ») est une prérogative accordée à une personne physique ou morale de faire, d'exiger, ou d'être obligée à faire quelque chose ; il se décline en 4 catégories : les droits (exercés dans l'intérêt propre du titulaire), les pouvoirs (exercés dans l'intérêt d'autrui, ex. l'autorité parentale), les libertés (droits vis-à-vis de la puissance publique, ex. droits fondamentaux) et les obligations (ex. livrer la marchandise vendue).",
      },
      {
        heading: "Droit de fond et droit de procédure",
        content:
          "Le droit de fond (ou droit matériel) définit les droits et obligations des sujets visés par un acte juridique — c'est le contenu. Le droit de procédure (ou droit formel) règle la mise en œuvre des droits subjectifs : il régit le déroulement et les formes des procès et organise les voies de recours.",
      },
      {
        heading: "Droit positif : impératif vs dispositif",
        content:
          "Une règle de droit impérative doit être respectée par tout le monde, sans possibilité d'y déroger par accord entre les parties (ex. art. 361 CO). Une règle dispositive peut au contraire être écartée ou modifiée par un accord entre les parties ; elle ne s'applique qu'à défaut d'un tel accord (ex. art. 364 al. 3 CO).",
      },
      {
        heading: "Droit national et droit international",
        content:
          "Le droit national (ou droit interne) s'applique à une population donnée, sur un territoire donné, à un moment donné ; il se décline sur trois niveaux (fédéral, cantonal, communal). Le droit international (ou droit externe) s'applique à plusieurs États ou entre eux. Dans les deux cas, on distingue encore droit public et droit privé. En Suisse, le droit international est supérieur au droit national : chaque norme doit être conforme à une norme supérieure.",
      },
      {
        heading: "Droit privé et droit public",
        content:
          "Le droit privé régit les rapports entre particuliers (personnes physiques ou morales) sur un pied d'égalité (rapports horizontaux) ; il vise à sauvegarder les intérêts individuels. Ex. : droit civil, droit des obligations. Le droit public organise l'État, règle son fonctionnement et ses relations avec les particuliers (rapports verticaux, où les parties ne sont pas sur un pied d'égalité) ; il vise à protéger l'intérêt général, et ses règles sont souvent impératives, assorties de sanctions strictes. Ex. : droit constitutionnel, droit pénal, droit administratif. Les grandes divisions du droit public sont : droit administratif, droit constitutionnel, droit pénal et droit de procédure (CPC, CPP, PA). Les grandes divisions du droit privé sont : droit civil (droit des personnes, droit de la famille, droit réel, droit des successions), droit des obligations, droit commercial et droit de la propriété intellectuelle.",
      },
      {
        heading: "Les quatre sources du droit",
        content:
          "Le droit se manifeste par des normes (générales et abstraites, de manière générale) et par des décisions ou jugements relatifs à un cas particulier (de manière concrète). Ses quatre sources, mentionnées à l'art. 1 CC, sont : la législation (la loi), la coutume, la jurisprudence et la doctrine. La loi est la source primaire ; la coutume, la jurisprudence et la doctrine sont des sources secondaires, auxquelles le juge recourt lorsque la loi ne suffit pas.",
        articleRef: "Art. 1 CC",
      },
      {
        heading: "La législation (droit écrit) et sa hiérarchie",
        content:
          "La législation englobe toutes les règles juridiques contenues dans les textes édictés ou approuvés par une autorité investie du pouvoir législatif ou réglementaire. Au sens strict, la « loi » désigne les règles adoptées par le Parlement selon la procédure législative. Hiérarchie des normes (du sommet à la base) : droit international, Constitution fédérale, loi, ordonnances, autres actes. On distingue législation fédérale (Cst. fédérale, loi fédérale, code, arrêté fédéral, ordonnance législative), cantonale (Cst. cantonale, loi cantonale, loi intercantonale) et communale (règlement communal, intercommunal). Le Recueil officiel (RO) rassemble les textes normatifs par ordre chronologique et fait foi ; le Recueil systématique (RS) les classe par domaine et intègre les modifications à jour (chaque canton a aussi son RO et son RS, ex. RSJU, RSN).",
      },
      {
        heading: "La coutume",
        content:
          "La coutume est l'ensemble des règles non écrites qui résultent d'un usage implanté dans une collectivité et tenu par elle comme juridiquement obligatoire. Trois conditions : être généralement du droit non écrit, être née d'un usage d'une certaine durée qui persiste dans le temps, et être reconnue par la collectivité comme juridiquement contraignante.",
      },
      {
        heading: "La jurisprudence",
        content:
          "La jurisprudence est l'ensemble des jugements des tribunaux et des décisions rendues par d'autres autorités investies du pouvoir judiciaire dans un cas d'espèce. En Suisse, il appartient au Tribunal fédéral (TF) de veiller à une application uniforme du droit fédéral. Le juge tranche les litiges en appliquant la loi à des cas concrets, ce qui implique souvent de l'interpréter pour garantir l'égalité devant la loi. Une fois entré en force, un jugement ne peut plus être annulé, sauf circonstances exceptionnelles. Au niveau fédéral, les arrêts du TF sont publiés sur www.bger.ch (ex. ATF 119 IV 59) ; au niveau cantonal, chaque canton publie ses propres décisions.",
      },
      {
        heading: "La doctrine",
        content:
          "La doctrine est l'ensemble des textes publiés par des auteurs sur des sujets de caractère juridique (ouvrages, revues, bases de données en ligne). Elle facilite la compréhension et la résolution des problèmes juridiques et constitue un outil essentiel utilisé par les tribunaux pour appliquer et faire évoluer le droit.",
      },
      {
        heading: "Organisation de la justice et séparation des pouvoirs",
        content:
          "Toute règle de droit est en principe assortie d'une sanction ; pour l'appliquer et la contrôler, il faut des institutions (tribunaux) et des règles de procédure. L'organisation des tribunaux relève de la compétence des cantons (art. 122-123 Cst.), mais il existe une organisation judiciaire fédérale (TF, Tribunal administratif fédéral à St-Gall, Tribunal pénal fédéral à Bellinzone, Tribunal fédéral des brevets à St-Gall) et une organisation internationale (Cour européenne des droits de l'Homme, CEDH), soit trois échelons : cantonal, fédéral, international. Au niveau cantonal, chaque canton a ses propres tribunaux de première instance (ex. tribunaux régionaux) puis une autorité de recours (tribunal cantonal, 2e instance).",
      },
      {
        heading: "Compétence territoriale et matérielle",
        content:
          "Les règles de procédure sont les formalités prévues par la loi pour agir en justice (qualité pour agir, délais, compétence, forme, récusation, etc.). La compétence territoriale concerne le lieu du procès : le principe veut que la loi prévoie les règles de compétence, avec pour exception l'élection de for. La compétence matérielle concerne le sujet du procès : tribunaux civils pour les litiges entre particuliers, tribunaux administratifs pour les litiges de droit public, tribunaux pénaux pour les litiges pénaux.",
      },
      {
        heading: "Garanties fondamentales de procédure",
        content:
          "Ces garanties trouvent leur fondement à l'art. 6 CEDH et aux art. 29, 30 et 32 Cst. féd. Elles incluent notamment le droit à un procès équitable (art. 29 al. 1 Cst.), l'interdiction du déni de justice formel (art. 29 al. 1 Cst.), le droit à l'assistance judiciaire gratuite et à l'assistance gratuite d'un défenseur (art. 29 al. 3 Cst.), et le droit d'être entendu (art. 29 al. 2 Cst.).",
        articleRef: "Art. 29, 30, 32 Cst.",
      },
      {
        heading: "Application du droit : la primauté de la loi",
        content:
          "L'art. 1 CC pose le principe de la primauté du droit écrit : la loi régit toutes les matières auxquelles se rapportent la lettre ou l'esprit de l'une de ses dispositions ; à défaut d'une disposition légale applicable, le juge prononce selon le droit coutumier et, à défaut d'une coutume, selon les règles qu'il établirait s'il avait à faire acte de législateur ; il s'inspire des solutions consacrées par la doctrine et la jurisprudence. Difficulté : le texte de la loi est général alors que les situations sont particulières, et les dispositions légales ne sont pas toujours claires (notions non définies comme « justes motifs », notions évolutives comme la bonne foi, formulations incomplètes, lacunes ou contradictions).",
        articleRef: "Art. 1 CC",
      },
    ],
    keyPoints: [
      "Droit objectif = les règles ; droit subjectif = mes droits (droits, pouvoirs, libertés, obligations).",
      "Les 4 sources du droit (art. 1 CC) : la loi (source primaire), puis la coutume, la jurisprudence et la doctrine (sources secondaires).",
      "Droit privé = rapports horizontaux entre particuliers ; droit public = rapports verticaux avec l'État, règles souvent impératives.",
      "Hiérarchie des normes : droit international > Constitution fédérale > loi > ordonnances > autres actes.",
      "Organisation judiciaire à 3 échelons : cantonal (1ère et 2e instance) → fédéral (TF et tribunaux spéciaux) → international (CEDH).",
      "Le Tribunal fédéral garantit une application uniforme du droit fédéral ; il ne légifère pas.",
    ],
  },
  {
    themeId: "droits-fondamentaux",
    estimated: true,
    intro:
      "Les droits fondamentaux protègent chaque personne face à l'État. Ils figurent principalement dans la Constitution fédérale (art. 7 à 36 Cst.) et dans la CEDH.",
    sections: [
      {
        heading: "Panorama des droits fondamentaux",
        content:
          "Parmi les principaux : la dignité humaine (art. 7 Cst.), l'égalité (art. 8 Cst.), la protection contre l'arbitraire (art. 9 Cst.), la liberté personnelle (art. 10 Cst.), la sphère privée (art. 13 Cst.), la liberté économique (art. 27 Cst.) et la garantie de la propriété (art. 26 Cst.).",
        articleRef: "Art. 7–36 Cst.",
      },
      {
        heading: "Restreindre un droit fondamental : les conditions",
        content:
          "Une restriction n'est licite que si elle repose sur une base légale, se justifie par un intérêt public (ou la protection d'un droit fondamental d'autrui), respecte le principe de proportionnalité, et ne touche pas à l'essence intangible du droit.",
        articleRef: "Art. 36 Cst.",
      },
      {
        heading: "Droits fondamentaux entre particuliers",
        content:
          "Les droits fondamentaux protègent avant tout contre l'État. Entre particuliers, ils ne s'appliquent pas directement, mais influencent l'interprétation du droit privé (ex. via les règles sur la protection de la personnalité).",
      },
    ],
    keyPoints: [
      "Restriction valable = base légale + intérêt public + proportionnalité + respect du noyau intangible.",
      "La liberté économique (art. 27 Cst.) est particulièrement pertinente pour l'activité d'une entreprise IT.",
      "Les droits fondamentaux visent d'abord la relation individu-État, pas directement les rapports entre particuliers.",
    ],
  },
  {
    themeId: "protection-personnalite",
    estimated: true,
    intro:
      "L'art. 28 CC protège la personnalité de chacun (honneur, image, vie privée, données) contre les atteintes illicites d'autrui — un thème central dès qu'on manipule des données ou des contenus en ligne.",
    sections: [
      {
        heading: "Le principe de l'art. 28 CC",
        content:
          "Toute personne victime d'une atteinte illicite à sa personnalité peut agir en justice contre son auteur. L'atteinte est présumée illicite, sauf si elle est justifiée (consentement de la victime, intérêt prépondérant privé ou public, ou loi qui l'autorise).",
        articleRef: "Art. 28 CC",
      },
      {
        heading: "Les moyens d'action",
        content:
          "La victime peut demander au juge de faire cesser l'atteinte, d'interdire une atteinte imminente, d'en constater le caractère illicite, et le cas échéant obtenir réparation (dommages-intérêts, tort moral) selon les art. 28a ss CC.",
        articleRef: "Art. 28a CC",
      },
      {
        heading: "Application numérique",
        content:
          "Publier une photo, un commentaire diffamatoire ou des données personnelles sans droit peut constituer une atteinte à la personnalité. S'y ajoute, en parallèle, la législation spécifique sur la protection des données (LPD).",
      },
    ],
    keyPoints: [
      "Une atteinte à la personnalité est présumée illicite ; c'est à l'auteur de justifier son geste.",
      "Justifications possibles : consentement, intérêt prépondérant, base légale.",
      "L'art. 28 CC et la LPD se complètent, notamment pour les données en ligne.",
    ],
  },
  {
    themeId: "droit-contrats",
    estimated: true,
    intro:
      "Le Code des obligations (CO) règle la formation et la validité des contrats entre particuliers, y compris les contrats informatiques.",
    sections: [
      {
        heading: "La formation du contrat",
        content:
          "Un contrat naît de l'échange de manifestations de volonté concordantes : une offre et une acceptation (art. 1 CO). Sauf exception, la forme est libre — un contrat oral ou même par actes concluants est en principe valable.",
        articleRef: "Art. 1 CO",
      },
      {
        heading: "Les conditions de validité",
        content:
          "Pour être valable, un contrat suppose : des parties capables de contracter, un consentement libre et éclairé (pas de dol, d'erreur essentielle ou de crainte fondée), un contenu possible et licite, et le respect d'une forme particulière si la loi l'exige (ex. écrite pour la vente d'immeuble).",
      },
      {
        heading: "L'inexécution du contrat",
        content:
          "Si une partie n'exécute pas ou exécute mal ses obligations, l'autre partie peut en principe exiger l'exécution, résilier/résoudre le contrat et/ou réclamer des dommages-intérêts, selon les règles générales des art. 97 ss CO.",
      },
    ],
    keyPoints: [
      "Offre + acceptation = contrat, en principe sans exigence de forme particulière.",
      "Un vice du consentement (erreur, dol, crainte fondée) peut permettre d'invalider un contrat.",
      "L'inexécution ouvre la voie à l'exécution forcée, la résolution et/ou des dommages-intérêts.",
    ],
  },
  {
    themeId: "contrat-travail",
    estimated: true,
    intro:
      "Le contrat de travail (art. 319 ss CO) est le contrat par lequel une personne s'engage à fournir un travail contre un salaire, sous la direction d'un employeur.",
    sections: [
      {
        heading: "Les éléments essentiels",
        content:
          "Quatre éléments caractérisent le contrat de travail : une prestation de travail, un lien de subordination (l'employeur dirige et contrôle), une rémunération, et une certaine durée. L'absence de subordination oriente plutôt vers un contrat de mandat ou d'entreprise.",
        articleRef: "Art. 319 CO",
      },
      {
        heading: "Obligations de l'employeur",
        content:
          "Payer le salaire convenu, protéger la santé et la personnalité du travailleur (art. 328 CO), respecter les délais de congé et les règles sur les vacances, et établir un certificat de travail si demandé.",
        articleRef: "Art. 328 CO",
      },
      {
        heading: "Obligations du travailleur",
        content:
          "Exécuter le travail avec soin et diligence, respecter son devoir de fidélité (ne pas concurrencer ou nuire à l'employeur), et suivre les instructions raisonnables données dans le cadre du contrat.",
      },
      {
        heading: "Fin des rapports de travail",
        content:
          "Le contrat prend fin par accord des parties, par l'échéance d'un CDD, ou par résiliation (congé) dans le respect des délais légaux ou contractuels. Un congé abusif (art. 336 CO) peut donner droit à une indemnité.",
      },
    ],
    keyPoints: [
      "Le lien de subordination est le critère clé qui distingue le contrat de travail du mandat.",
      "L'employeur doit protéger la personnalité et la santé du travailleur (art. 328 CO).",
      "Un congé peut être valable mais abusif si les motifs invoqués sont contraires à la bonne foi.",
    ],
  },
];

export function getTheory(themeId: string): TheoryBlock | undefined {
  return theory.find((t) => t.themeId === themeId);
}
