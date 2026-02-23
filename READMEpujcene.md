# AgentAIBank.com — Web

Prezentační web pro AgentAIBank — clearingová infrastruktura pro strojovou ekonomiku.

---

## Co to je

Statický multi-page web (5 stránek) bez frameworku, bez buildu, bez závislostí. Čistý HTML + CSS + JS. Otevřeš `index.html` v prohlížeči a jede to.

**Stránky:**
| Soubor | Obsah |
|---|---|
| `index.html` | Úvodní stránka — hero s brandovým obrázkem, navigace na sekce |
| `problem.html` | 01 — Problém + 10 use casů strojové ekonomiky |
| `architecture.html` | 02 — Filozofie, co nejsme, 5 principů protokolu, origin story |
| `roadmap.html` | 04 — Jedno číslo, roadmap, EU AI Act regulatorní přehled |
| `who.html` | 07 — Zakladatel, patent, kontakt |

---

## Tech stack

- **HTML5** — sémantický markup, `data-i18n` atributy pro překlad
- **CSS3** — custom properties, grid, clamp(), mask-image, backdrop-filter
- **Vanilla JS** — i18n systém (CS/EN), scroll reveal (IntersectionObserver)
- **Fonty** — JetBrains Mono (nadpisy), Inter (body) přes Google Fonts
- **Žádný build** — žádný npm, webpack, framework. Dvojklik na HTML = funguje

---

## Kde to žije

| Co | Kde | URL |
|---|---|---|
| **Produkce** | Vercel | [agentaibank-web.vercel.app](https://agentaibank-web.vercel.app) |
| **Doména** | agentaibank.com | [www.agentaibank.com](https://www.agentaibank.com) |
| **Repo** | GitHub | [github.com/farkasvladan-bot/agentaibank-web](https://github.com/farkasvladan-bot/agentaibank-web) |
| **DNS** | Forpsi | [admin.forpsi.com](https://admin.forpsi.com) |

**Deploy:** Automatický. Push na `main` branch → Vercel nasadí do 30 sekund.

---

## Přístupy

| Služba | Účet | Poznámka |
|---|---|---|
| **GitHub** | `farkasvladan-bot` | `gh auth login` pro CLI přístup |
| **Vercel** | přihlášení přes GitHub | Hobby plan (free), tým "Farky's projects" |
| **Forpsi** | admin.forpsi.com | DNS správa domény agentaibank.com |

---

## DNS záznamy (Forpsi)

```
agentaibank.com        A       216.198.79.1          (Vercel)
www.agentaibank.com    CNAME   81afb16b6bf08035.vercel-dns-017.com
agentaibank.com        MX      10 mxavas.forpsi.com  (email)
agentaibank.com        TXT     v=spf1 a mx include:_spf.forpsi.com -all
_dmarc.agentaibank.com TXT     v=DMARC1; p=quarantine
```

---

## Struktura projektu

```
web/
├── index.html              # Homepage
├── problem.html            # Problém + use cases
├── architecture.html       # Filozofie + architektura
├── roadmap.html            # Roadmap + EU AI Act
├── who.html                # Kdo + kontakt
├── styles.css              # Kompletní design system
├── main.js                 # i18n + scroll reveal
├── loga/
│   ├── nhand.png           # Brandový obrázek (hero background)
│   ├── nhand-icon.png      # Ikonka do navigace (výřez modrého kruhu)
│   └── metal-texture.png   # Kovová textura na pozadí body
├── AGENTAIBANK_WEB_BRIEF_CZ.md  # Původní obsahový brief
└── README.md               # Tento soubor
```

---

## Jak udělat změnu

```bash
# 1. Edituj soubory lokálně
# 2. Commitni a pushni
cd "/Users/farkyfarkas/Desktop/pracovni/techguru/nhand autonomni protokoly/web"
git add -A
git commit -m "popis změny"
git push

# 3. Vercel automaticky nasadí (30s)
```

Pokud chceš přidat/editovat překlady, uprav objekt `translations` v `main.js` — klíče `cs` a `en`.

---

## Design system

**Barvy:**
| Proměnná | Hodnota | Použití |
|---|---|---|
| `--bg-primary` | `#e7ebf0` | Hlavní pozadí |
| `--navy` | `#102f51` | Tmavé texty |
| `--glow` | `#2d7bb8` | Akcentová modrá (labely, linky, glow) |
| `--text-primary` | `#183657` | Hlavní text |
| `--text-muted` | `#607892` | Sekundární text |
| `--border-glow` | `rgba(45,123,184,0.26)` | Aktivní okraje |

**Typografie:**
- Nadpisy: `JetBrains Mono` (monospace, industriální)
- Body: `Inter` (čistý sans-serif)
- Velikosti: `clamp()` pro responzivitu

**Vizuální efekty:**
- Brushed metal pozadí (`metal-texture.png` + gradienty)
- Scanline overlay (jemné diagonální pruhy)
- Noise textura (SVG filter)
- Scroll reveal animace (fade in + translateY)

---

## Co doporučuji doplnit

### Priorita 1 — teď
- [ ] **Favicon** — vytvořit z `nhand-icon.png` jako `.ico` + `apple-touch-icon`
- [ ] **Open Graph meta tagy** — pro sdílení na LinkedIn/Twitter (og:title, og:description, og:image)
- [ ] **LinkedIn odkaz** — aktuální URL místo generic `https://linkedin.com`
- [ ] **Google Analytics / Plausible** — základní analytika návštěvnosti

### Priorita 2 — brzy
- [ ] **Mobilní hamburger menu** — navigace je na mobilu skrytá, chybí alternativa
- [ ] **Sitemap.xml + robots.txt** — SEO základ
- [ ] **Stránka 404** — custom error page na Vercelu
- [ ] **Kontaktní formulář** — jednoduchý (Formspree / Netlify Forms) místo jen emailu
- [ ] **Performance** — obrázky v `loga/` jsou velké (nhand.png = 1.8 MB). Konvertovat na WebP, zmenšit rozlišení

### Priorita 3 — časem
- [ ] **Blog / Updates sekce** — živý obsah pro SEO a důvěryhodnost
- [ ] **Whitepaper / Technical Brief** — PDF ke stažení pro seriózní zájemce
- [ ] **Case study landing pages** — jednotlivé use casy jako samostatné stránky pro SEO
- [ ] **Cookie consent** — pokud přidáš analytics, GDPR vyžaduje souhlas
- [ ] **Structured data (JSON-LD)** — schema.org markup pro Organization, Patent

---

## Kontakt

**farky@farky.tech** — Ostrava, Czech Republic
