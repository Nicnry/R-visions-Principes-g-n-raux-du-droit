import { TheoryBlock } from "@/models/types";

// Contenu 100% réel, issu du support de cours (Chapitre 1 - Les bases du
// droit, PGD IG 25/26). Aucun contenu déduit/estimé n'est conservé ici —
// voir CLAUDE.md avant d'ajouter un nouveau thème.

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
      {
        heading: "Loi au sens formel et au sens matériel",
        content:
          "Au quotidien, on emploie « loi » au sens large (matériel) pour toute règle de droit émanant d'une autorité ayant des compétences législatives ou réglementaires (ex. LAVS, ordonnance OLAA). Juridiquement, la « loi » au sens strict (formel) désigne uniquement les règles adoptées par le Parlement dans le cadre de la procédure législative (ex. LTVA, LAVS) ; le texte normatif porte en principe le mot « loi ». Principe de la primauté du droit écrit.",
      },
      {
        heading: "Droit intercantonal",
        content:
          "Concordat ou convention entre deux ou plusieurs cantons (ex. Harmos). Il est intégré dans les RO et RS de chaque canton concerné.",
      },
      {
        heading: "Trouver la loi : FF, RO, RS, fedlex",
        content:
          "Les lois fédérales sont édictées par le peuple et l'Assemblée fédérale (CN et CE) ; on les trouve sur fedlex (par le nom de la loi, des mots-clés, ou idéalement par le numéro RS). FF (Feuille fédérale) = première publication du projet de loi, mais on ne se base pas dessus. RO (Recueil officiel) = classé par ordre chronologique, rassemble tous les textes normatifs (Constitution, lois, arrêtés, ordonnances, traités internationaux, traités Confédération-cantons) ; c'est la version publiée au RO qui fait foi. RS (Recueil systématique) = classé par domaine/matière en neuf thématiques, rassemble tous les actes en vigueur à la date de la dernière mise à jour (RO + modifications) ; on se base sur lui pour consulter les lois. Depuis le 1er janvier 2026, c'est la version électronique (et non plus imprimée) du RO et de la FF qui fait foi. Chaque canton a son RO et son RS (ex. RSJU, RSN). Google est parfois pratique mais il faut s'assurer d'avoir la bonne version.",
      },
      {
        heading: "Structure d'une loi fédérale et d'un arrêt",
        content:
          "Une loi fédérale comprend : l'intitulé, le préambule, le corps du texte et les dispositions finales (ex. la LTVA, divisée en titres, avec des dispositions pénales, finales et transitoires). Un arrêt (jurisprudence) comprend : le préambule, l'état de fait, le droit et le dispositif (= la décision).",
      },
      {
        heading: "Où chercher chaque source (exercice en classe)",
        content:
          "Loi : édictée par le peuple et l'Assemblée fédérale ; fedlex ; recherche par nom de la loi ou mots-clés (idéalement RS). Jurisprudence : rendue par l'ensemble des tribunaux suisses ; bger.ch et sites cantonaux (portail du canton). Doctrine : écrite par les juristes, professeurs d'université, juges, milieux académiques ; bibliothèques, revues, articles en ligne, moteurs de recherche, sites spécialisés (Schulthess, Legalis). Coutume : difficile à trouver, spécificités = droit non écrit, usage durable, reconnu comme obligatoire.",
      },
      {
        heading: "Rôle du juge : le syllogisme judiciaire",
        content:
          "Le juge tranche les litiges en appliquant une règle de droit (générale et abstraite) à une situation concrète (les faits) qui en remplit les conditions, et en déduit les conclusions (la décision) : c'est le syllogisme judiciaire. Une décision se structure en faits – droit – dispositif. Les tribunaux sont compétents pour trancher les litiges de manière définitive ; une fois le jugement entré en force, il ne peut plus être renversé (sauf circonstances exceptionnelles) et doit être considéré comme vrai. L'interprétation de la loi est un exercice pratiqué par différentes personnes : juges, autorités, avocats, particuliers.",
      },
      {
        heading: "Les tribunaux fédéraux et le canton de Neuchâtel",
        content:
          "Tribunal fédéral (TF) : instance judiciaire suprême, garantit l'application uniforme du droit fédéral et le respect des droits fondamentaux. Tribunal pénal fédéral (TPF, Bellinzone) : juge en 1ère instance notamment les infractions visant les intérêts de la Confédération, le crime organisé. Tribunal administratif fédéral (TAF, St-Gall) : statue sur les recours contre les décisions de l'administration fédérale et de certains gouvernements cantonaux. Tribunal fédéral des brevets (St-Gall) : 1ère instance, litiges civils en matière de brevets et de contrefaçon. Exemple neuchâtelois — tribunaux régionaux (1ère instance) : Tribunal régional des Montagnes et du Val-de-Ruz (10 juges) et Tribunal régional du Littoral et du Val-de-Travers (15 juges), composés de la chambre de conciliation, du tribunal civil, de l'APEA, du tribunal pénal des mineurs, du tribunal de police, du tribunal criminel et du tribunal des mesures de contrainte. Tribunal cantonal (2e instance, recours) : Cour civile, Cour des mesures de protection de l'enfant et de l'adulte, autorité de recours en matière pénale, Cour pénale, Cour de droit public, Tribunal arbitral.",
      },
      {
        heading: "Classer les matières : droit privé ou droit public (exercice en classe)",
        content:
          "Droit privé : droit du travail (aussi des aspects de droit public, cf. Wooclap : « les deux selon le contexte »), droit bancaire, droit des obligations, droit des contrats, droit des sociétés. Droit public : droit des assurances sociales, poursuite pour dettes et faillites, droit fiscal, droit administratif, droit pénal, droit constitutionnel, droit pénal des mineurs.",
      },
      {
        heading: "Abréviations utiles et liens du cours",
        content:
          "Art. = article ; al. = alinéa ; ATF = Arrêt du Tribunal fédéral ; CC = Code civil ; CO = Code des obligations ; Cst (féd.) = Constitution fédérale ; TF = Tribunal fédéral ; TC = Tribunal cantonal. Liens : www.admin.ch (administration fédérale), www.bger.ch (jurisprudence du TF), www.be.ch, www.jura.ch, www.ne.ch (cantons de Berne, Jura, Neuchâtel).",
      },
    ],
    keyPoints: [
      "Droit objectif = les règles ; droit subjectif = mes droits (droits, pouvoirs, libertés, obligations).",
      "FF = première publication (on ne s'y base pas) ; RO = chronologique, fait foi (version électronique dès 2026) ; RS = par matière, version à jour.",
      "Structure d'un arrêt : préambule, état de fait, droit, dispositif ; syllogisme judiciaire : règle + faits → décision.",
      "Les 4 sources du droit (art. 1 CC) : la loi (source primaire), puis la coutume, la jurisprudence et la doctrine (sources secondaires).",
      "Droit privé = rapports horizontaux entre particuliers ; droit public = rapports verticaux avec l'État, règles souvent impératives.",
      "Hiérarchie des normes : droit international > Constitution fédérale > loi > ordonnances > autres actes.",
      "Organisation judiciaire à 3 échelons : cantonal (1ère et 2e instance) → fédéral (TF et tribunaux spéciaux) → international (CEDH).",
      "Le Tribunal fédéral garantit une application uniforme du droit fédéral ; il ne légifère pas.",
    ],
  },
  {
    themeId: "droit-constitutionnel",
    estimated: false,
    intro:
      "Chapitre 2 du cours : l'État et la Constitution, le droit constitutionnel et ses piliers (fédéralisme, démocratie, droits fondamentaux), l'organisation des pouvoirs, puis le catalogue des droits fondamentaux, leurs restrictions (art. 36 Cst.) et deux exemples détaillés : la liberté personnelle et les libertés de communication.",
    sections: [
      {
        heading: "La notion d'État",
        content:
          "L'État a trois éléments constitutifs : la population, le territoire et la souveraineté (autorité détentrice de la force publique étatique). On oppose l'État unitaire à l'État fédéral. L'État moderne suisse est défini aux art. 1 à 5 Cst.",
        articleRef: "Art. 1-5 Cst.",
      },
      {
        heading: "La Constitution : définition et rôle",
        content:
          "La Constitution (au sens formel) est la loi fondamentale de la Suisse, édictée par le pouvoir constituant ; c'est une loi au sens formel qui se distingue d'une loi ordinaire par son objet, sa portée et sa procédure de confection. Son rôle : (1) loi fondamentale — elle contient les règles cardinales de l'État et les droits fondamentaux ; (2) limitation du pouvoir — par ses règles d'organisation de l'État, notamment la séparation des pouvoirs ; (3) expression de la volonté commune — la Cst. est votée par le peuple.",
      },
      {
        heading: "Le droit constitutionnel et ses sources",
        content:
          "Le droit constitutionnel est une discipline de droit public (relation État-citoyens) qui a pour objet la Constitution. Au sens formel, c'est le texte de la Cst. ; au sens matériel, ce sont les règles juridiques fondamentales relatives à un État, à son organisation et à son fonctionnement, supérieures aux autres règles. Source au sens formel : la Constitution. Sources au sens matériel : la loi fédérale sur les droits politiques, la loi sur l'Assemblée fédérale, la loi fédérale sur l'organisation du gouvernement et de l'administration, la loi sur le TF, les constitutions cantonales et le droit international.",
      },
      {
        heading: "Les trois piliers du droit constitutionnel",
        content:
          "(1) Le fédéralisme : structure de l'État — la Suisse (Confédération + cantons) est un État fédéral et les cantons sont des États fédérés. (2) La démocratie : représentative et directe / semi-directe. (3) Les droits fondamentaux.",
      },
      {
        heading: "Structure de la Constitution fédérale de 1999",
        content:
          "Elle comprend six titres : Titre 1 Dispositions générales (art. 1-6) ; Titre 2 Droits fondamentaux, citoyenneté et buts sociaux (art. 7-41) ; Titre 3 Confédération, cantons et communes (art. 42-135) ; Titre 4 Peuple et cantons (art. 136-142) ; Titre 5 Autorités fédérales (art. 173-191) ; Titre 6 Révision de la Constitution et dispositions transitoires (art. 192-196).",
      },
      {
        heading: "Droit fédéral et traités internationaux",
        content:
          "Un traité international (aussi appelé convention internationale) est un contrat entre deux ou plusieurs sujets de droit international qui créent des règles de droit. Art. 5 al. 4 Cst. : la Confédération et les cantons respectent le droit international = primauté du droit international. Art. 190 Cst. : le Tribunal fédéral et les autres autorités sont tenus d'appliquer les lois fédérales et le droit international = incorporation du droit international. Les conventions intercantonales sont des accords entre cantons (similitude au niveau des principes).",
        articleRef: "Art. 5 al. 4 et 190 Cst.",
      },
      {
        heading: "Le fédéralisme : structure de l'État",
        content:
          "La Confédération helvétique compte 26 cantons (dont des demi-cantons) = États fédérés. La Constitution définit les domaines de compétence : les cantons sont souverains tant que leur compétence n'est pas limitée par la Cst. Le pouvoir constituant suisse = les cantons + le peuple. Trois niveaux juridiques : fédéral (droit fédéral), cantonal (droit cantonal), communal (droit communal).",
      },
      {
        heading: "La séparation des pouvoirs",
        content:
          "Principe : les diverses fonctions de l'État doivent être dévolues à des organes distincts et indépendants. Les trois pouvoirs : législatif (le Parlement édicte les lois), exécutif (le gouvernement exécute les lois) et judiciaire (les tribunaux veillent à la bonne application des lois).",
      },
      {
        heading: "Pouvoir législatif : l'Assemblée fédérale",
        content:
          "Art. 143 à 173 et 179 Cst. Les députés sont élus par le peuple pour le représenter. Système bicaméral : deux Chambres se partagent le même pouvoir, traitent les mêmes affaires et siègent séparément — le Conseil national (CN, Chambre du peuple) et le Conseil des États (CE, Chambre haute, Chambre des cantons). Au niveau cantonal : Parlement / Grand conseil ; au niveau communal : Conseil général ou assemblée communale. Le cours distingue le scrutin à la proportionnelle du scrutin majoritaire.",
        articleRef: "Art. 143-173, 179 Cst.",
      },
      {
        heading: "Pouvoir exécutif : le Conseil fédéral",
        content:
          "Art. 174 à 187 Cst. L'autorité exécutive fonctionne de manière permanente, ses débats ne sont pas publics et elle agit de manière collégiale (principe de collégialité). Elle compte 7 conseillers fédéraux élus tous les 4 ans par l'Assemblée fédérale ; le Président est élu pour une année. Au niveau cantonal : Gouvernement / Conseil d'État ; au niveau communal : Conseil communal.",
        articleRef: "Art. 174-187 Cst.",
      },
      {
        heading: "Les droits fondamentaux : définition et caractéristiques",
        content:
          "Définition (Le Roy) : droits que l'État reconnaît à l'homme tant comme individu que comme membre d'une collectivité et qui constituent le cadre assurant le respect de la dignité humaine. Caractéristiques : ils sont au bénéfice des individus (bénéficiaires) ; dirigés contre l'État ou une autorité disposant de la puissance publique, qui doit les respecter (destinataire) ; composés de droits, de libertés, de garanties, voire de buts sociaux ; et peuvent être limités à des conditions strictes.",
      },
      {
        heading: "Sources et catalogue des droits fondamentaux",
        content:
          "Sources : la Constitution fédérale (art. 7 à 36), les constitutions cantonales, la Convention européenne des droits de l'homme (CEDH) et le Pacte international relatif aux droits civils et politiques (Pacte ONU II). Catalogue (art. 7 à 34, Titre 2) : égalité, droit à la vie, droit au mariage et à la famille, liberté d'opinion, de réunion, droit à la formation de base, liberté de la science, liberté de la langue, garantie de la propriété, liberté d'établissement, liberté économique, liberté syndicale, liberté d'association.",
        articleRef: "Art. 7-34 Cst.",
      },
      {
        heading: "Restrictions des droits fondamentaux (art. 36 Cst.)",
        content:
          "L'État peut restreindre les droits fondamentaux à 4 conditions très restrictives : (1) base légale ; (2) intérêt public ou protection d'un droit fondamental d'autrui ; (3) proportionnalité ; (4) respect de l'essence (noyau) des droits fondamentaux, qui est inviolable. Texte : al. 1 Toute restriction doit être fondée sur une base légale ; les restrictions graves doivent être prévues par une loi ; les cas de danger sérieux, direct et imminent sont réservés. Al. 2 Toute restriction doit être justifiée par un intérêt public ou par la protection d'un droit fondamental d'autrui. Al. 3 Toute restriction doit être proportionnée au but visé. Al. 4 L'essence des droits fondamentaux est inviolable.",
        articleRef: "Art. 36 Cst.",
      },
      {
        heading: "Condition 1 : la base légale",
        content:
          "Toute restriction à un droit fondamental doit avoir une base légale. Il s'agit de garantir la sécurité et la prévisibilité du droit, l'égalité de traitement et la séparation des pouvoirs. L'exigence d'une base légale formelle permet le contrôle de la démocratie directe. La base légale doit avoir un degré de précision suffisant.",
      },
      {
        heading: "Condition 2 : l'intérêt public",
        content:
          "L'intérêt public est un principe général de l'activité publique : l'État doit agir pour le bien des citoyen-ne-s ; mais c'est aussi lui qui peut justifier la restriction d'un droit fondamental. Il vise à maintenir l'ordre public, soit : la sécurité (ex. pas de publicité le long des autoroutes), la santé (ex. limitations de la vente de médicaments en ligne), la tranquillité (ex. restrictions dans le parcours d'une manifestation).",
      },
      {
        heading: "Condition 3 : la proportionnalité",
        content:
          "La poursuite d'un intérêt public légitime ne permet pas l'utilisation de n'importe quel moyen : la proportionnalité exige que l'État limite la restriction d'un droit fondamental au strict nécessaire.",
      },
      {
        heading: "Liberté personnelle (art. 10 Cst.)",
        content:
          "Elle protège la vie, l'intégrité physique et psychique, la vie privée et la liberté de mouvement. Vie : interdiction de la peine de mort. Intégrité physique : ex. consentement du patient pour un acte opératoire. Intégrité psychique : manifestations élémentaires de la personne humaine (mode de vie, loisirs, choix du médecin). Vie privée : sphère privée et intime, relations personnelles et familiales, honneur et réputation. Liberté de mouvement : liberté d'aller et de venir (exemple négatif : la détention préventive).",
        articleRef: "Art. 10 Cst.",
      },
      {
        heading: "Les libertés de communication (art. 16, 17, 20-23, 33 Cst.)",
        content:
          "Elles protègent la personne en tant qu'être social : liberté d'opinion et d'expression (entre particuliers), liberté de la presse ou des médias (communication), liberté de la science (enseignement et recherche), liberté de l'art (création et expression artistiques), liberté de réunion, liberté d'association, droit de pétition.",
        articleRef: "Art. 16, 17, 20-23, 33 Cst.",
      },
    ],
    keyPoints: [
      "L'État = population + territoire + souveraineté ; Cst. = loi fondamentale, limite le pouvoir, votée par le peuple.",
      "3 piliers : fédéralisme, démocratie (représentative, directe / semi-directe), droits fondamentaux.",
      "La Cst. 1999 : 6 titres ; droits fondamentaux = Titre 2 (art. 7-41) ; autorités fédérales = Titre 5 (art. 173-191).",
      "Art. 5 al. 4 Cst. : primauté du droit international ; art. 190 Cst. : le TF applique lois fédérales et droit international.",
      "Séparation des pouvoirs : Assemblée fédérale (CN + CE, bicaméral), Conseil fédéral (7 membres, collégial, élus 4 ans par l'AF), tribunaux.",
      "Droits fondamentaux : bénéficiaires = individus ; destinataire = l'État.",
      "Art. 36 Cst. : restriction = base légale + intérêt public + proportionnalité + respect de l'essence (noyau intangible).",
    ],
  },
];

export function getTheory(themeId: string): TheoryBlock | undefined {
  return theory.find((t) => t.themeId === themeId);
}
