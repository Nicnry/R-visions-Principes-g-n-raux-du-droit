# CLAUDE.md — Instructions de maintenance du contenu

Ce fichier s'adresse à **toute IA (Claude ou autre) invoquée dans ce repo**,
ainsi qu'à l'étudiant qui maintient le contenu. Le code (composants, pages,
contrôleurs) n'a normalement pas besoin de changer souvent — ce qui change,
c'est le **contenu du cours** dans `src/content/`.

## Contexte important

Tout le contenu actuel provient **du cours réel** (unité 61-31.3 « Principes
généraux du droit », HE-Arc IG 2026/2027) : Chapitre 1 « Les bases du droit »,
Chapitre 2 « Droit constitutionnel et droits fondamentaux », le Wooclap du
chapitre 1, la présentation du cours et les notes de l'étudiant
(`notes_s2.md`). Rien n'est inventé. Les chapitres suivants (personnalité,
contrats, droit du travail) seront ajoutés quand ils seront donnés en cours.

Le flag `estimated: true` / badge « Déduit » existe toujours pour tout
contenu non confirmé par le cours ; ne l'utilise que dans ce cas.

## Ce qu'il faut faire une fois le cours réellement commencé

Après chaque séance (ou à la fin du module), demande à l'IA (ou fais
toi-même) ceci, dans cet ordre :

### 1. Comparer au vrai contenu du cours
Donne à l'IA tes notes de cours, les slides, ou un résumé de ce qui a été
réellement enseigné. Demande-lui de comparer thème par thème avec les
fichiers de `src/content/`.

### 2. Corriger le contenu confirmé
Pour tout contenu qui correspond à ce qui a été enseigné (même
approximativement) :
- Mets à jour le texte pour qu'il colle aux notes de cours réelles
  (formulations, exemples, articles de loi cités).
- Passe `estimated: false` sur l'objet concerné (`Theme`, `TheoryBlock`,
  `PracticeCase`, `QuizQuestion`) une fois le contenu validé. Le badge
  « Déduit » disparaîtra automatiquement.

### 3. Supprimer ce qui n'a PAS été couvert
Si un thème entier (ou une section, un cas pratique, une question de quiz)
ne correspond à rien de vu en cours :
- Supprime l'entrée correspondante dans le fichier de contenu concerné.
- Si un thème entier disparaît, retire-le aussi de `src/content/themes.ts`
  — tout le reste (théorie, pratique, quiz, progression) se met à jour
  automatiquement puisque tout est indexé par `themeId`.
- Ne laisse pas de thème « fantôme » : vérifie que theorie/pratique/quiz
  restent cohérents (mêmes `themeId`).

### 4. Ajouter le contenu manquant
Si le cours a couvert une notion absente de l'app :
- **Nouveau thème** : ajoute une entrée dans `src/content/themes.ts`
  (choisis un `id` kebab-case unique, un `emoji`, une `color` parmi
  `indigo | coral | mint | saffron`). Puis crée le bloc théorique
  correspondant dans `src/content/theory.ts`, éventuellement des cas dans
  `src/content/practice.ts`, et un nouveau fichier
  `src/content/quiz/<theme-id>.ts` (copie un fichier existant comme
  modèle) que tu importes et ajoutes dans `src/content/quiz/index.ts`.
- **Contenu dans un thème existant** : ajoute simplement une entrée dans
  le tableau concerné (`sections`, `keyPoints`, `practiceCases`, ou le
  tableau de quiz du thème). Mets `estimated: false` puisque ce contenu
  vient directement du cours réel.
- Respecte le typage de `src/models/types.ts` : c'est la source de vérité
  de la forme des données. N'ajoute pas de champ sans l'y déclarer d'abord.

### 5. Ne touche pas à l'architecture sauf nécessité
Le code applicatif (composants dans `src/components/`, logique dans
`src/controllers/`, pages dans `src/app/`) n'a pas besoin de changer pour
une mise à jour de contenu classique — tout est piloté par les données de
`src/content/`. Ne modifie le code que si :
- une nouvelle *fonctionnalité* est demandée (ex. filtrage des quiz par
  difficulté), ou
- la structure des données change réellement (ex. ajout d'un champ
  `difficulty` à `QuizQuestion`).

## Où se trouve quoi (rappel rapide de l'architecture)

```
src/
  models/types.ts        → Modèle : types TS de toutes les données
  content/                → Modèle : les données elles-mêmes
    themes.ts             →   liste des thèmes
    theory.ts              →   contenu théorique par thème
    practice.ts            →   cas pratiques par thème
    quiz/<theme-id>.ts     →   questions de quiz, un fichier par thème
    quiz/index.ts           →   agrégateur (à mettre à jour si nouveau thème)
  controllers/             → Contrôleur : logique métier
    progressController.ts →   progression utilisateur (localStorage)
    quizController.ts      →   mélange des questions/réponses, score
  components/              → Vue : composants réutilisables
  app/                      → Vue : pages (App Router de Next.js)
```

## Règle d'or pour les quiz

Ne jamais coder une réponse « correcte » comme étant toujours en première
position dans les données (`correctIndex` peut valoir n'importe quel index
dans `choices` — c'est même recommandé de varier). Le mélange à l'affichage
est déjà géré automatiquement par `useQuizSession` /
`src/controllers/quizController.ts` : n'ajoute jamais de logique
d'affichage des choix ailleurs qui contournerait ce mélange.
