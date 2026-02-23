/* ==========================================================================
   FinSetAI.com — Main Script (i18n + Scroll Reveal)
   ========================================================================== */

const translations = {
  en: {
    patentBadge: 'Patent Pending',
    heroPretitle: 'The missing layer',
    heroTitle: '95% of people don\'t pay for AI. <br>Not because they won\'t.',
    heroSub: 'Every AI app needs inference. Every inference costs money. No standard exists to bill users fairly and pay developers transparently.',
    heroAside: 'Est. 2025 — Ostrava, Czech Republic',

    s01Label: '01 — The Problem',
    s01Title: 'Developers build. Users consume. Nobody settles.',
    s01P1: 'You build an AI app. A user asks 47 questions. Each one costs you inference. Who pays? You? The user? Some vague subscription that 95% of people cancel after one month?',
    s01P2: 'Right now, the developer bears the cost of AI consumption. That\'s why most AI apps are either free demos or enterprise-only. The middle — <strong>normal people paying fair prices for AI they actually use</strong> — doesn\'t exist. Because the billing layer doesn\'t exist.',

    tl2022: 'ChatGPT. Everybody uses AI. Nobody pays.',
    tl2023: 'Subscriptions everywhere. $20/month for everything. 95% churn.',
    tl2024: 'Developers avoid consumer AI. Too expensive to give away. Too complex to bill.',
    tl2025: 'We started solving it. From Ostrava.',

    s01bLabel: '01b — Real scenarios',
    s01bTitle: '10 apps that need AI billing. And don\'t have it.',
    uc01Title: 'Indie dev builds a writing assistant.',
    uc01Text: 'Users love it. Each query costs $0.03 in inference. Dev can\'t charge per-query — too complex. Can\'t do subscription — nobody pays $20/month for occasional use. FinSetAI: prepaid wallet, pay-per-use, developer gets margin. Done.',
    uc02Title: 'Real estate company adds AI training.',
    uc02Text: '200 brokers, variable usage. Flat license = overpaying or underpaying. FinSetAI: each broker has a prepaid wallet. Company tops up. Usage tracked per session. Transparent.',
    uc03Title: 'SaaS wants to add AI features.',
    uc03Text: 'Product works. AI would make it 10x better. But who pays for the inference? Passing API costs to users = complexity nightmare. FinSetAI: one SDK, user-funded wallets, you set the margin.',    uc04Title: 'Developer builds a multi-model pipeline.',
    uc04Text: 'GPT-4 for reasoning, Claude for writing, Whisper for transcription. Three providers, three pricing models, one user. FinSetAI normalizes everything to UOU. One bill. One wallet. One truth.',
    uc05Title: 'Education startup creates AI tutor.',
    uc05Text: 'Students use it differently — some ask 5 questions, some ask 500. Flat pricing = unfair. Per-query = scary for parents. FinSetAI: prepaid wallet with cost cap. Parent loads €10, student uses until it runs out. No surprises.',
    uc06Title: 'Healthcare app adds AI symptom checker.',
    uc06Text: 'Compliance matters. Every query must have audit trail. FinSetAI: Hash Ledger records every transaction. Who asked, what model answered, what it cost. Immutable. EU AI Act ready.',
    uc07Title: 'Legal tech adds contract analysis.',
    uc07Text: 'Big documents = expensive inference. Client shouldn\'t pay unknowable amount. FinSetAI: pre-calculate cost, deduct from wallet atomically. If wallet insufficient — transaction doesn\'t start. No runaway bills.',
    uc08Title: 'E-commerce adds AI product descriptions.',
    uc08Text: '10,000 products, generated overnight. Cost must be predictable. FinSetAI: batch settlement, bulk pricing visible, Trust Fund covers disputes.',
    uc09Title: 'Agency builds AI tools for clients.',
    uc09Text: 'Each client = different usage, different budget. FinSetAI: per-client wallets, agency sets margin per client, one dashboard for all.',
    uc10Title: 'You. Whatever you\'re building.',
    uc10Text: 'If it uses AI inference, it needs billing. Not your billing. Not Stripe. Not some hack with API keys and spreadsheets. A real settlement layer. That\'s us.',

    closerP1: 'Ten scenarios. One pattern. Developer builds. User pays. AI runs. Everyone knows exactly what it cost and why.',
    closerP2: 'Three US patents pending. Working prototype. Atomic 4-party settlement.',
    closerP3: 'One SDK. Prepaid wallets. Developer margins. Audit trail. That\'s FinSetAI.',

    s02Label: '02 — The Gap',
    s02Title: 'Not a payment gateway. A settlement layer for AI.',
    s02P1: 'Stripe handles payments. OpenAI handles inference. Nobody handles what happens in between — the moment a user\'s money becomes a developer\'s margin becomes a provider\'s revenue.',
    s02P2: 'That\'s the gap. <strong>That\'s what we built.</strong>',
    s02P3: 'Not because it\'s sexy. It isn\'t. Billing infrastructure is the most boring, most invisible, and most critical layer in any economy. It was true for banking in 1472. It\'s true for AI now.',
    s02Quote: 'User pays → Developer earns margin → Provider gets paid → Audit trail recorded. All in one atomic operation. All or nothing. That\'s the protocol.',
    s02QuoteSource: '— Core design principle',

    s02bLabel: '02b — What we\'re not',
    s02bText: 'We\'re not Stripe. We\'re not a crypto project. We\'re not another API wrapper. We don\'t process payments — we settle AI transactions. Atomically. With four parties. In milliseconds.',
    s03Label: '03 — Five principles',
    s03Title: 'The rules are simple.',
    pr01Title: 'Atomic. All or nothing.',
    pr01Text: 'User pays, developer earns, provider gets paid, audit logged — all in one operation, or none of it happens. No intermediate states. No "oops." No reconciliation nightmares.',
    pr02Title: 'Four-party. By design.',
    pr02Text: 'User → App → Provider → FinSetAI. Everyone has skin in the game. Everyone sees their part. Not bilateral. Not a middleman. A settlement protocol.',
    pr03Title: 'Prepaid. Cost cap built in.',
    pr03Text: 'User\'s bank account is never connected to variable AI costs. Wallet runs out → transaction stops. No surprises. No runaway bills. The killer security feature nobody else has.',
    pr04Title: 'Transparent. Every token tracked.',
    pr04Text: 'Hash Ledger records every settlement. Immutable audit trail. Who asked, what model, what it cost, who earned what. EU AI Act compliance by architecture, not by patch.',
    pr05Title: 'Developer-first. You set the margin.',
    pr05Text: '0–100% markup. Fixed price mode. Your app, your economics. We handle the plumbing — settlement, wallets, audit trail. You handle the product.',

    s03bLabel: '03b — How it started',
    s03bP1: 'We weren\'t building a settlement protocol. We were building AI apps for real estate brokers. And we couldn\'t figure out how to bill users for AI they consumed. Nobody could.',
    s03bP2: 'So we built the billing layer first. And realized it was the product.',
    s03bP3: 'Nobody in San Francisco was looking for this from the bottom up. Everyone was solving the trillion-dollar problem top-down. McKinsey reports. Armies of analysts. Result? Paralysis. We started with one invoice. And ended with a protocol.',

    s04Label: '04 — One number',
    s04P1: 'UOU. Universal Output Unit. One normalized unit of AI output. Any model. Any provider. One price.',
    s04Meta: 'GPT-4, Claude, Whisper, Gemini — all normalized to UOU. One bill. One truth.',

    s05Label: '05 — Roadmap',
    s05Title: 'AI billing needs a standard. We\'re building it.',
    s05Sub: 'Not tomorrow. Now.',
    s05P1: 'Every AI app needs inference. Every inference has a cost. Every cost needs settlement. But there\'s no standard for how to bill users, pay developers, and settle with providers. We\'re building that standard.',
    s05P2: 'One SDK. Prepaid wallets. Developer margins. Atomic settlement. <strong>Audit trail for every token.</strong>',
    rmBase: 'Foundation',
    rmBaseText: 'Three US patents filed. Prototype live. Firebase + Stripe + Cloud Functions. Atomic 4-party settlement working.',
    rmNow: 'Now',
    rmNowText: 'SDK in development. First apps onboarding. Developer dashboard. OAuth flow. Admin finance module.',
    rmNext: 'Next',
    rmNextText: 'Multi-provider support — OpenAI, Anthropic, Google. Tier 2.5 containerized licensing for enterprise. Partner onboarding.',
    rmHorizon: 'Horizon',
    rmHorizonText: 'Open protocol. Developer ecosystem. The billing standard for AI. Because infrastructure belongs to everyone. Or no one.',
    s06Label: '06 — EU AI Act',
    s06Title: 'Every AI app will need an audit trail. Article 4 is already in force.',
    s06Intro: 'We\'re tracking it. Responding. And building compliance into the protocol from day one.',
    regNowTitle: 'What\'s already in force — now, today, no exceptions',
    regArt4Title: 'February 2025 — Article 4: AI Literacy',
    regArt4Text: 'Anyone developing or deploying AI systems must ensure adequate AI literacy. Not a recommendation. An obligation. In force since February 2, 2025. Enforcement from August 2026.',
    regArt5Title: 'February 2025 — Article 5: Prohibited Practices',
    regArt5Text: 'Social scoring. Manipulative AI. Real-time biometric identification. Prohibited. In force. Fines? Up to €35 million or 7% of global turnover. Whichever is higher.',
    regGpaiTitle: 'August 2025 — GPAI Obligations',
    regGpaiText: 'Providers of general-purpose AI models — transparency, technical documentation, training rules. Applies to all new models from August 2025.',
    regShiftTitle: 'What shifted — and why',
    regHrTitle: 'High-risk AI systems: from August 2026 to December 2027',
    regHrText: 'The European Commission proposed a shift to December 2027. Standardization bodies failed to create technical standards in time. The delay isn\'t relief — it\'s a window for those who start building now.',
    regViewTitle: 'What it means for developers',
    regViewP1: 'If your AI app has no audit trail, no transaction logging, no accountability layer — you have a compliance problem. Not tomorrow. Now.',
    regViewP2: 'FinSetAI\'s Hash Ledger records every settlement. Who asked, what model answered, what it cost, who earned what. Immutable. Automatic. Built into every transaction.',
    regViewP3: 'Compliance by architecture. Not by patch.',
    regUpdate: 'Last update: February 2026. We track developments continuously.',

    s07Label: '07 — Who',
    s07Title: 'Built in Ostrava. Not in Silicon Valley.',
    s07P1: 'I\'m not a PhD. I can\'t code. I\'m a systems architect from a Czech village of 200 people. 30 years in business. I started building AI apps and hit the same wall every developer hits: who pays for the inference?',
    s07P2: 'Nobody had an answer. So I built one. Three US patents pending. Working prototype. And a deep conviction that if AI is going to be for everyone, someone needs to build the boring part — the billing.',
    s07P3: 'I build the plumbing. And the plumbing works.',
    usPatentPending: '3× US Patent Pending',

    tocLabel: 'Pages',
    toc01Title: 'The Problem — Why nobody pays',
    toc01Text: 'Developers build AI apps. Users consume inference. Nobody knows how to bill it fairly. 10 real scenarios where the billing layer is missing.',
    toc02Title: 'How it works — 4-party settlement',
    toc02Text: 'Not a payment gateway. A settlement layer. Atomic, transparent, with developer margins and audit trail built in.',
    toc03Title: 'Roadmap + EU AI Act',
    toc03Text: 'What\'s live. What\'s next. And why every AI app will need an audit trail before regulators come knocking.',
    toc04Title: 'Who + Contact',
    toc04Text: 'A systems architect from a Czech village of 200 people. Three US patents pending. And a deep conviction that AI billing shouldn\'t be this hard.',

    footerCta: 'If you\'re building AI apps and billing is the part you dread — we should talk.',
    footerQuote: '"Developers build the future. We handle the bill."',
    footerQuoteSource: 'sumofhuman.com',
    footerCopy: '© 2026 FinSetAI — a farky.tech project | Ostrava, Czech Republic | US Patent Pending',
  },
  cs: {
    patentBadge: 'Patent Pending',
    heroPretitle: 'Chybějící vrstva',
    heroTitle: '95 % lidí neplatí za AI. <br>Ne proto, že nechtějí.',
    heroSub: 'Každá AI aplikace potřebuje inference. Každá inference stojí peníze. Žádný standard neexistuje, jak to účtovat férově a transparentně.',
    heroAside: 'Est. 2025 — Ostrava, Česká republika',

    s01Label: '01 — Problém',
    s01Title: 'Developeři staví. Uživatelé spotřebovávají. Nikdo nezúčtuje.',
    s01P1: 'Postavíš AI appku. Uživatel se zeptá 47krát. Každý dotaz tě stojí inference. Kdo platí? Ty? On? Nějaký předplatný za $20 měsíčně, který 95 % lidí zruší po měsíci?',
    s01P2: 'Teď nese náklady na AI spotřebu developer. Proto je většina AI appek buď free demo, nebo enterprise-only. Střed — <strong>normální lidi platící férové ceny za AI, které reálně používají</strong> — neexistuje. Protože neexistuje billing vrstva.',

    tl2022: 'ChatGPT. Všichni používají AI. Nikdo neplatí.',
    tl2023: 'Předplatné všude. $20/měsíc za všechno. 95% churn.',
    tl2024: 'Developeři se vyhýbají consumer AI. Příliš drahé dát zadarmo. Příliš složité účtovat.',
    tl2025: 'Začali jsme to řešit. Z Ostravy.',

    s01bLabel: '01b — Reálné scénáře',
    s01bTitle: '10 appek, které potřebují AI billing. A nemají ho.',
    uc01Title: 'Indie vývojář staví writing assistant.',
    uc01Text: 'Uživatelé ho milují. Každý dotaz stojí $0.03 za inference. Nedá se účtovat per-query — příliš složité. Nedá se udělat předplatné — nikdo neplatí $20/měsíc za občasné použití. FinSetAI: předplacená peněženka, pay-per-use, developer dostane marži. Hotovo.',
    uc02Title: 'Realitní firma přidává AI školení.',
    uc02Text: '200 makléřů, různé využití. Paušální licence = přeplacení nebo podplacení. FinSetAI: každý makléř má předplacenou peněženku. Firma dobíjí. Spotřeba trackovaná per session. Transparentní.',
    uc03Title: 'SaaS chce přidat AI funkce.',
    uc03Text: 'Produkt funguje. AI by ho udělalo 10x lepší. Ale kdo platí inference? Přeúčtovat API náklady uživatelům = komplexní noční můra. FinSetAI: jedno SDK, peněženky financované uživateli, ty nastavíš marži.',
    uc04Title: 'Developer staví multi-model pipeline.',
    uc04Text: 'GPT-4 na reasoning, Claude na psaní, Whisper na přepis. Tři provideři, tři cenové modely, jeden uživatel. FinSetAI normalizuje všechno na UOU. Jeden účet. Jedna peněženka. Jedna pravda.',
    uc05Title: 'Vzdělávací startup vytváří AI tutora.',
    uc05Text: 'Studenti ho používají různě — někdo se zeptá 5krát, někdo 500krát. Paušál = nefér. Per-query = děsí rodiče. FinSetAI: předplacená peněženka s cost capem. Rodič nabije €10, student používá, dokud nedojde. Žádná překvapení.',    uc06Title: 'Zdravotní appka přidává AI kontrolu symptomů.',
    uc06Text: 'Compliance je klíčový. Každý dotaz musí mít audit trail. FinSetAI: Hash Ledger zaznamenává každou transakci. Kdo se ptal, jaký model odpověděl, co to stálo. Neměnitelné. EU AI Act ready.',
    uc07Title: 'Legal tech přidává analýzu smluv.',
    uc07Text: 'Velké dokumenty = drahá inference. Klient by neměl platit neznámou částku. FinSetAI: předkalkulace ceny, atomický odečet z peněženky. Nedostatek prostředků → transakce nezačne. Žádné nekontrolované účty.',
    uc08Title: 'E-shop přidává AI popisky produktů.',
    uc08Text: '10 000 produktů, generováno přes noc. Náklady musí být předvídatelné. FinSetAI: dávkové zúčtování, transparentní ceník, Trust Fund kryje spory.',
    uc09Title: 'Agentura staví AI nástroje pro klienty.',
    uc09Text: 'Každý klient = jiné využití, jiný rozpočet. FinSetAI: peněženky per klient, agentura nastavuje marži per klient, jeden dashboard pro všechny.',
    uc10Title: 'Ty. Cokoliv stavíš.',
    uc10Text: 'Pokud to používá AI inference, potřebuje to billing. Ne tvůj billing. Ne Stripe. Ne nějaký hack s API klíči a tabulkami. Reálnou settlement vrstvu. To jsme my.',

    closerP1: 'Deset scénářů. Jeden vzorec. Developer staví. Uživatel platí. AI běží. Každý přesně ví, co to stálo a proč.',
    closerP2: 'Tři US patenty pending. Funkční prototyp. Atomické 4-stranné zúčtování.',
    closerP3: 'Jedno SDK. Předplacené peněženky. Marže pro developery. Audit trail. To je FinSetAI.',

    s02Label: '02 — Mezera',
    s02Title: 'Ne platební brána. Settlement vrstva pro AI.',
    s02P1: 'Stripe řeší platby. OpenAI řeší inference. Nikdo neřeší, co se děje mezi tím — moment, kdy se peníze uživatele stanou marží developera a příjmem providera.',
    s02P2: 'To je ta mezera. <strong>To jsme postavili.</strong>',
    s02P3: 'Ne proto, že je to sexy. Není. Billing infrastruktura je ta nejnudnější, nejneviditelnější a nejkritičtější vrstva v každé ekonomice. Platilo to pro bankovnictví v roce 1472. Platí to pro AI teď.',
    s02Quote: 'Uživatel platí → Developer dostane marži → Provider dostane zaplaceno → Audit trail zaznamenán. Vše v jedné atomické operaci. Všechno nebo nic. To je protokol.',
    s02QuoteSource: '— Základní designový princip',

    s02bLabel: '02b — Co nejsme',
    s02bText: 'Nejsme Stripe. Nejsme krypto projekt. Nejsme další API wrapper. Nezpracováváme platby — zúčtováváme AI transakce. Atomicky. Čtyři strany. V milisekundách.',

    s03Label: '03 — Pět principů',
    s03Title: 'Pravidla jsou jednoduchá.',
    pr01Title: 'Atomické. Všechno nebo nic.',
    pr01Text: 'Uživatel platí, developer vydělává, provider dostane zaplaceno, audit zalogován — vše v jedné operaci, nebo se nestane nic. Žádné mezistaty. Žádné "ups." Žádné noční můry s reconciliací.',
    pr02Title: 'Čtyři strany. By design.',
    pr02Text: 'Uživatel → Appka → Provider → FinSetAI. Každý má kůži ve hře. Každý vidí svou část. Ne bilaterální. Ne prostředník. Settlement protokol.',    pr03Title: 'Předplacené. Cost cap zabudovaný.',
    pr03Text: 'Bankovní účet uživatele nikdy není napojený na variabilní AI náklady. Peněženka se vyčerpá → transakce se zastaví. Žádná překvapení. Žádné nekontrolované účty. Killer security feature, kterou nemá nikdo jiný.',
    pr04Title: 'Transparentní. Každý token sledovaný.',
    pr04Text: 'Hash Ledger zaznamenává každé zúčtování. Neměnitelný audit trail. Kdo se ptal, jaký model, co to stálo, kdo co vydělal. EU AI Act compliance architekturou, ne záplatou.',
    pr05Title: 'Developer-first. Ty nastavuješ marži.',
    pr05Text: '0–100% přirážka. Režim fixní ceny. Tvoje appka, tvoje ekonomika. My řešíme instalatérku — settlement, peněženky, audit trail. Ty řešíš produkt.',

    s03bLabel: '03b — Jak to vzniklo',
    s03bP1: 'Nestavěli jsme settlement protokol. Stavěli jsme AI appky pro realitní makléře. A nemohli jsme přijít na to, jak účtovat uživatelům AI, které spotřebovali. Nikdo nemohl.',
    s03bP2: 'Tak jsme nejdřív postavili billing vrstvu. A zjistili, že TO je ten produkt.',
    s03bP3: 'Nikdo v San Francisku tohle nehledal zdola. Všichni řešili trilionový problém top-down. McKinsey reporty. Armády analytiků. Výsledek? Paralýza. My jsme začali s jednou fakturou. A skončili s protokolem.',

    s04Label: '04 — Jedno číslo',
    s04P1: 'UOU. Universal Output Unit. Jedna normalizovaná jednotka AI výstupu. Jakýkoliv model. Jakýkoliv provider. Jedna cena.',
    s04Meta: 'GPT-4, Claude, Whisper, Gemini — vše normalizováno na UOU. Jeden účet. Jedna pravda.',

    s05Label: '05 — Plán',
    s05Title: 'AI billing potřebuje standard. Stavíme ho.',
    s05Sub: 'Ne zítra. Teď.',
    s05P1: 'Každá AI appka potřebuje inference. Každá inference má cenu. Každá cena potřebuje zúčtování. Ale neexistuje standard, jak účtovat uživatelům, platit developerům a vypořádat s providery. Stavíme ten standard.',
    s05P2: 'Jedno SDK. Předplacené peněženky. Marže pro developery. Atomické zúčtování. <strong>Audit trail pro každý token.</strong>',
    rmBase: 'Základ',
    rmBaseText: 'Tři US patenty podány. Prototyp živý. Firebase + Stripe + Cloud Functions. Atomické 4-stranné zúčtování funguje.',
    rmNow: 'Teď',
    rmNowText: 'SDK ve vývoji. První appky onboardují. Developer dashboard. OAuth flow. Admin finance modul.',
    rmNext: 'Další',
    rmNextText: 'Multi-provider podpora — OpenAI, Anthropic, Google. Tier 2.5 kontejnerizované licence pro enterprise. Partner onboarding.',
    rmHorizon: 'Horizont',
    rmHorizonText: 'Otevřený protokol. Developer ekosystém. Billing standard pro AI. Protože infrastruktura patří všem. Nebo nikomu.',

    s06Label: '06 — EU AI Act',
    s06Title: 'Každá AI appka bude potřebovat audit trail. Článek 4 už platí.',
    s06Intro: 'Sledujeme to. Reagujeme. A compliance stavíme do protokolu od prvního dne.',
    regNowTitle: 'Co už platí — teď, dnes, bez výjimky',
    regArt4Title: 'Únor 2025 — Článek 4: AI gramotnost',
    regArt4Text: 'Každý, kdo vyvíjí nebo nasazuje AI systémy, musí zajistit dostatečnou AI gramotnost. Ne doporučení. Povinnost. Platí od 2. února 2025. Enforcement od srpna 2026.',
    regArt5Title: 'Únor 2025 — Článek 5: Zakázané praktiky',
    regArt5Text: 'Sociální scoring. Manipulativní AI. Biometrická identifikace v reálném čase. Zakázáno. Platí. Pokuty? Až 35 milionů EUR nebo 7 % globálního obratu. Podle toho, co je vyšší.',
    regGpaiTitle: 'Srpen 2025 — GPAI povinnosti',
    regGpaiText: 'Poskytovatelé general-purpose AI modelů — transparentnost, technická dokumentace, pravidla pro trénink. Platí pro všechny nové modely od srpna 2025.',
    regShiftTitle: 'Co se posunulo — a proč',
    regHrTitle: 'High-risk AI systémy: z srpna 2026 na prosinec 2027',
    regHrText: 'Evropská komise navrhla posun na prosinec 2027. Standardizační orgány nestihly vytvořit technické standardy včas. Odklad není úleva — je to okno pro ty, kdo začnou stavět teď.',
    regViewTitle: 'Co to znamená pro developery',
    regViewP1: 'Pokud tvoje AI appka nemá audit trail, logování transakcí, vrstvu odpovědnosti — máš compliance problém. Ne zítra. Teď.',
    regViewP2: 'FinSetAI Hash Ledger zaznamenává každé zúčtování. Kdo se ptal, jaký model odpověděl, co to stálo, kdo co vydělal. Neměnitelné. Automatické. Zabudované v každé transakci.',
    regViewP3: 'Compliance architekturou. Ne záplatou.',
    regUpdate: 'Poslední aktualizace: únor 2026. Sledujeme vývoj průběžně.',
    s07Label: '07 — Kdo',
    s07Title: 'Postaveno v Ostravě. Ne v Silicon Valley.',
    s07P1: 'Nejsem PhD. Neumím programovat. Jsem systémový architekt z české vesnice s 200 lidmi. 30 let v byznysu. Začal jsem stavět AI appky a narazil na stejnou zeď jako každý developer: kdo platí za inference?',
    s07P2: 'Nikdo neměl odpověď. Tak jsem ji postavil. Tři US patenty pending. Funkční prototyp. A hluboké přesvědčení, že pokud má být AI pro všechny, někdo musí postavit tu nudnou část — billing.',
    s07P3: 'Stavím instalatérku. A instalatérka funguje.',
    usPatentPending: '3× US Patent Pending',

    tocLabel: 'Stránky',
    toc01Title: 'Problém — Proč nikdo neplatí',
    toc01Text: 'Developeři staví AI appky. Uživatelé spotřebovávají inference. Nikdo neví, jak to férově účtovat. 10 reálných scénářů, kde chybí billing vrstva.',
    toc02Title: 'Jak to funguje — 4-stranné zúčtování',
    toc02Text: 'Ne platební brána. Settlement vrstva. Atomická, transparentní, s marží pro developery a audit trailem zabudovaným uvnitř.',
    toc03Title: 'Plán + EU AI Act',
    toc03Text: 'Co funguje. Co bude. A proč každá AI appka bude potřebovat audit trail dřív, než zaklepou regulátoři.',
    toc04Title: 'Kdo + Kontakt',
    toc04Text: 'Systémový architekt z české vesnice s 200 lidmi. Tři US patenty pending. A hluboké přesvědčení, že AI billing nemusí být takhle těžký.',

    footerCta: 'Pokud stavíš AI appky a billing je ta část, ze které se ti dělá špatně — měli bychom si promluvit.',
    footerQuote: '"Developeři staví budoucnost. My řešíme účet."',
    footerQuoteSource: 'sumofhuman.com',
    footerCopy: '© 2026 FinSetAI — a farky.tech project | Ostrava, Česká republika | US Patent Pending',
  }
};

// --- LANGUAGE LOGIC ---
let currentLang = localStorage.getItem('fsai-lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('fsai-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.lang = lang;
}

// --- SCROLL REVEAL ---
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('active'); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
  initScrollReveal();

  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    mainNav.querySelectorAll('.main-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    scrollHint.addEventListener('click', () => {
      const firstSection = document.querySelector('.section');
      if (firstSection) firstSection.scrollIntoView({ behavior: 'smooth' });
    });
    scrollHint.style.cursor = 'pointer';
  }
});