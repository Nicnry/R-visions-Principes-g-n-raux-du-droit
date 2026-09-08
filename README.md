# 📜 Droit 61-31.3 — App de révision

App de révision mobile-first pour l'unité **61-31.3 « Principes généraux
du droit »** (module 61-31, éthique et droit informatique) : théorie, cas
pratiques et quiz, avec suivi de progression local.

⚠️ **Le contenu initial est déduit** de l'intitulé officiel du cours, pas
du contenu réel donné en classe (qui n'était pas encore connu). Voir
[`CLAUDE.md`](./CLAUDE.md) pour la marche à suivre une fois le cours
commencé (corriger / compléter / supprimer le contenu).

## Stack

- **Next.js 16** (App Router, TypeScript), **Tailwind CSS v4**
- Architecture façon **MVC** : `src/models` (types), `src/content`
  (données = le "contenu du cours"), `src/controllers` (logique : quiz,
  progression), `src/components` + `src/app` (vues)
- Progression sauvegardée en **localStorage** (rien n'est envoyé à un
  serveur — pas de backend)
- Mobile-first, navigation par barre d'onglets en bas d'écran

## Développer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Déployer sur Vercel

1. Pousse ce dossier sur un repo GitHub (voir ci-dessous).
2. Va sur [vercel.com/new](https://vercel.com/new), importe le repo.
3. Vercel détecte Next.js automatiquement — aucune configuration
   nécessaire (build command `next build`, pas de variables d'env).
4. Déploie. Chaque push sur `main` redéploie automatiquement.

### Mettre le projet sur GitHub

```bash
git init
git add .
git commit -m "Init: app de révision droit 61-31.3"
git branch -M main
git remote add origin https://github.com/<ton-compte>/<ton-repo>.git
git push -u origin main
```

## Ajouter / modifier du contenu

Tout le contenu vit dans `src/content/` sous forme de fichiers TypeScript
typés (voir `src/models/types.ts`) — pas besoin de toucher au code de
l'app pour ajouter un thème, une question de quiz ou un cas pratique.
Détail complet dans [`CLAUDE.md`](./CLAUDE.md).

## Structure

```
src/
  models/       Types TS (Modèle)
  content/      Données du cours : thèmes, théorie, pratique, quiz (Modèle)
  controllers/  Logique : progression (localStorage), sessions de quiz
  components/   Composants UI réutilisables (Vue)
  app/          Pages Next.js — accueil, théorie, pratique, quiz, progrès (Vue)
```
