import { TheoryBlock } from "@/models/types";

// ⚠️ CONTENU DÉDUIT (estimated: true) — voir CLAUDE.md avant de modifier.

export const theory: TheoryBlock[] = [
  {
    themeId: "sources-du-droit",
    estimated: true,
    intro:
      "En Suisse, toutes les règles de droit ne se valent pas : elles s'organisent selon une hiérarchie des normes. Comprendre cet ordre permet de savoir quelle règle l'emporte en cas de conflit.",
    sections: [
      {
        heading: "La hiérarchie des normes",
        content:
          "Du sommet à la base : 1) le droit international (traités ratifiés par la Suisse), 2) la Constitution fédérale (Cst.), 3) les lois fédérales, 4) les ordonnances (fédérales, puis cantonales), 5) le droit cantonal et communal. Une norme inférieure ne peut pas contredire une norme supérieure.",
      },
      {
        heading: "Loi vs ordonnance",
        content:
          "Une loi est adoptée par le Parlement (Assemblée fédérale) et peut être soumise au référendum. Une ordonnance est adoptée par le Conseil fédéral (ou une administration) pour préciser l'application d'une loi ; elle ne peut pas créer de nouvelles obligations qui ne découlent pas de la loi.",
      },
      {
        heading: "La jurisprudence et la doctrine",
        content:
          "La jurisprudence, ce sont les décisions des tribunaux (notamment du Tribunal fédéral) qui interprètent la loi. La doctrine, ce sont les écrits des juristes (commentaires, articles scientifiques). Ni l'une ni l'autre ne sont formellement des « sources » contraignantes comme la loi, mais elles orientent fortement son application.",
      },
      {
        heading: "Le droit privé et le droit public",
        content:
          "Le droit privé règle les rapports entre particuliers sur un pied d'égalité (ex. Code civil, Code des obligations). Le droit public règle les rapports où l'État exerce une forme d'autorité (ex. droit constitutionnel, droit administratif, droit pénal).",
      },
    ],
    keyPoints: [
      "Une ordonnance ne peut jamais contredire une loi, et une loi ne peut jamais contredire la Constitution.",
      "Le Code civil (CC) et le Code des obligations (CO) sont les piliers du droit privé suisse.",
      "La jurisprudence du Tribunal fédéral n'est pas une « loi », mais elle guide l'interprétation du droit.",
    ],
  },
  {
    themeId: "etat-federalisme",
    estimated: true,
    intro:
      "La Suisse est un État fédéral : les compétences sont partagées entre la Confédération, les 26 cantons et les communes. Cette organisation repose aussi sur la séparation des pouvoirs.",
    sections: [
      {
        heading: "Le fédéralisme",
        content:
          "La Confédération n'a que les compétences que la Constitution lui attribue explicitement (principe d'attribution) ; tout le reste relève des cantons (principe de subsidiarité). C'est pourquoi certaines matières varient d'un canton à l'autre (ex. fiscalité, école).",
      },
      {
        heading: "La séparation des pouvoirs",
        content:
          "Pouvoir législatif (fait la loi) : l'Assemblée fédérale (Conseil national + Conseil des États). Pouvoir exécutif (applique la loi) : le Conseil fédéral et l'administration. Pouvoir judiciaire (tranche les litiges) : les tribunaux, dont le Tribunal fédéral. Cette séparation évite la concentration du pouvoir.",
      },
      {
        heading: "Les instruments de démocratie directe",
        content:
          "Le référendum (obligatoire ou facultatif) permet au peuple de se prononcer sur une loi ou une modification constitutionnelle déjà votée par le Parlement. L'initiative populaire permet au peuple de proposer lui-même une modification de la Constitution.",
      },
    ],
    keyPoints: [
      "La Confédération agit seulement là où la Constitution le prévoit ; le reste appartient aux cantons.",
      "Trois pouvoirs distincts : législatif, exécutif, judiciaire.",
      "Référendum = réagir à une décision du Parlement ; initiative = proposer un nouveau texte constitutionnel.",
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
  {
    themeId: "contrats-informatique",
    estimated: true,
    intro:
      "Le domaine informatique combine plusieurs types de contrats du CO : vente, mandat, entreprise (louage d'ouvrage) et licences, souvent adaptés aux réalités du logiciel et du cloud.",
    sections: [
      {
        heading: "Licence logicielle",
        content:
          "La licence donne le droit d'utiliser un logiciel selon des conditions définies (durée, nombre d'utilisateurs, usage commercial ou non), sans transférer la propriété du code. Le droit d'auteur (LDA) protège le logiciel en tant qu'œuvre.",
      },
      {
        heading: "Contrat de prestations IT (développement)",
        content:
          "Selon ce qui est promis, un contrat de développement peut s'analyser comme un contrat d'entreprise (obligation de résultat : livrer un logiciel qui fonctionne, art. 363 ss CO) ou comme un mandat (obligation de moyens : agir avec diligence, art. 394 ss CO).",
        articleRef: "Art. 363 CO",
      },
      {
        heading: "Contrats SaaS / cloud",
        content:
          "Un contrat SaaS combine souvent bail (mise à disposition de l'usage d'un logiciel), mandat (hébergement, maintenance) et parfois licence. Les clauses de niveau de service (SLA), de disponibilité et de localisation/traitement des données y sont centrales, en lien avec la LPD.",
      },
    ],
    keyPoints: [
      "Une licence donne un droit d'usage, pas la propriété du logiciel.",
      "Contrat d'entreprise = obligation de résultat ; mandat = obligation de moyens.",
      "Un contrat SaaS mélange souvent plusieurs qualifications juridiques (bail, mandat, licence).",
    ],
  },
];

export function getTheory(themeId: string): TheoryBlock | undefined {
  return theory.find((t) => t.themeId === themeId);
}
