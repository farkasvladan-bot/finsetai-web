# FinSetAI Web

Staticky prezentační web projektu FinSetAI.

## O projektu

Web je bez frameworku a bez buildu:
- HTML + CSS + Vanilla JS
- zadne npm zavislosti
- lokalne staci otevrit `index.html`

## Stranky

- `index.html` - uvod
- `problem.html` - problem statement
- `architecture.html` - principy a architektura
- `roadmap.html` - roadmap
- `who.html` - founder a kontakt
- `404.html` - custom 404

## Struktura

- `styles.css` - design system a styly
- `main.js` - i18n + UI interakce
- `sitemap.xml` - sitemap
- `robots.txt` - robots
- `vercel.json` - Vercel rewrites + security headers

## Lokalni spusteni

Bez instalace:

1. Otevri `index.html` v prohlizeci

Nebo pres jednoduchy lokalni server:

```bash
python3 -m http.server 8080
```

Pak otevri `http://localhost:8080`.

## Novy Git repo (first-time)

```bash
git init
git add .
git commit -m "Initial FinSetAI static site"
git branch -M main
git remote add origin <GITHUB_REPO_URL>
git push -u origin main
```

## Novy Vercel projekt

```bash
vercel login
vercel
```

Pri prvnim spusteni vyber:
- create new project
- tento adresar jako root
- bez special build commandu (staticky web)

Produkce:

```bash
vercel --prod
```

## Poznamky

- `READMEpujcene.md` je puvodni pujcena sablona z jineho projektu.
- Pro tenhle web pouzivej `README.md`.
