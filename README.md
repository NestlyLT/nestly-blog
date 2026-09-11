# Nestly tinklaraštis — paruošta GitHub Pages

Šiame aplanke yra pilnai paruoštas Nestly tinklaraštis: pagrindinis puslapis su visų straipsnių sąrašu ir 6 SEO optimizuoti straipsniai. Viskas – be jokių papildomų priklausomybių, veiks tiesiog atidarius naršyklėje arba įkėlus į GitHub Pages.

## 📁 Kas yra šiame aplanke

```
├── index.html              ← pagrindinis tinklaraščio puslapis (visų straipsnių sąrašas)
├── robots.txt               ← nurodo paieškos sistemoms, kad galima indeksuoti
├── sitemap.xml               ← padeda Google greičiau surasti visus puslapius
├── assets/
│   ├── style.css             ← visas dizainas (spalvos, šriftai, animacijos)
│   └── script.js              ← animacijos (kortelių atsiradimas slenkant, ir kt.)
└── articles/
    ├── kaip-padidinti-nuomos-pajamas.html
    ├── airbnb-vs-booking-com.html
    ├── 5-klaidos-savininkams.html
    ├── kaip-paruosti-buta-sveciams.html
    ├── dinamine-kainodara-paaiskinta.html
    └── trumpalaikes-nuomos-mokesciai-lietuvoje.html
```

**Svarbu:** neišimkite jokio failo iš savo vietos ir nekeiskite aplankų pavadinimų (`assets`, `articles`) – nuorodos tarp puslapių veikia būtent pagal šią struktūrą.

---

## 🚀 Kaip įkelti į GitHub Pages (žingsnis po žingsnio)

### 1 žingsnis: susikurkite GitHub paskyrą (jei dar neturite)
Eikite į [github.com](https://github.com) ir užsiregistruokite – nemokama.

### 2 žingsnis: sukurkite naują repozitoriją (repository)
1. Prisijungę spauskite žalią mygtuką **„New"** (arba `+` viršuje dešinėje → „New repository")
2. **Repository name** įrašykite, pvz.: `nestly-blog`
3. Pasirinkite **Public** (kad veiktų GitHub Pages nemokamai)
4. **NEPAŽYMĖKITE** „Add a README file" – jį jau turite
5. Spauskite **„Create repository"**

### 3 žingsnis: įkelkite visus failus
1. Naujai sukurtame (tuščiame) repozitorijos puslapyje spauskite nuorodą **„uploading an existing file"**
2. **Nutempkite (drag & drop)** visą šio aplanko turinį į naršyklės langą:
   - `index.html`
   - `robots.txt`
   - `sitemap.xml`
   - visą `assets` aplanką
   - visą `articles` aplanką
   
   *(Jei nutempimas neveikia visam aplankui iš karto – galite pažymėti visus failus/aplankus Finder/Explorer lange ir nutempti juos visus kartu vienu metu, GitHub tvarkingai išlaikys aplankų struktūrą.)*
3. Apačioje spauskite **„Commit changes"**

### 4 žingsnis: įjunkite GitHub Pages
1. Repozitorijoje spauskite **„Settings"** (viršuje, meniu juostoje)
2. Kairėje pusėje spauskite **„Pages"**
3. Ties **„Source"** pasirinkite **„Deploy from a branch"**
4. Ties **„Branch"** pasirinkite **`main`** ir **`/ (root)`**
5. Spauskite **„Save"**

### 5 žingsnis: palaukite ir atsidarykite
Po 1–2 minučių GitHub sugeneruos jums nuorodą, kažkur panašią į:
```
https://jusu-vartotojo-vardas.github.io/nestly-blog/
```
Ši nuoroda bus rodoma tame pačiame **Settings → Pages** puslapyje, kai viskas bus paruošta (atsiras žalias pranešimas „Your site is live at...").

---

## 🔗 Jei norite prijungti prie nestly.lt (ne github.io adreso)

Jei norite, kad tinklaraštis būtų pasiekiamas per `nestly.lt/blog`, o ne `github.io`, reikės:
1. **Settings → Pages → Custom domain** įrašyti `nestly.lt` arba `blog.nestly.lt`
2. Pas savo domeno registratorių (kur pirkote nestly.lt) pridėti DNS įrašą, nukreipiantį į GitHub – tam geriausia paprašyti programuotojo pagalbos, nes tikslūs žingsniai priklauso nuo jūsų domeno valdymo skydelio.

**Paprasčiausias variantas be domeno derinimo:** tiesiog naudokite `github.io` nuorodą reklamoje/soc. tinkluose, arba paprašykite programuotojo įkelti šiuos failus tiesiai į jūsų esamą svetainės serverį, `/blog/` aplanke – jie veiks lygiai taip pat, be jokio GitHub.

---

## ✏️ Kaip redaguoti tekstą vėliau

Kiekvienas straipsnis yra atskiras `.html` failas `articles/` aplanke. Galite:
- Atidaryti failą su bet kokiu teksto redaktoriumi (net Notepad/TextEdit)
- Rasti tekstą, kurį norite keisti (jis atrodo kaip įprastas tekstas tarp `<p>` ir `</p>` žymių)
- Pakeisti, išsaugoti
- GitHub'e: atidaryti tą failą repozitorijoje → paspausti pieštuko ikoną (Edit) → įklijuoti naują tekstą → „Commit changes"

Pakeitimai atsinaujins svetainėje per ~1 minutę automatiškai.

---

## 🔍 SEO – kas jau padaryta

- Kiekvienas straipsnis turi unikalų `<title>` ir `<meta description>` – tai, ką Google rodo paieškoje
- `sitemap.xml` – sąrašas visų puslapių, padedantis Google juos greičiau rasti
- `robots.txt` – leidžia paieškos sistemoms indeksuoti viską
- Struktūrizuoti duomenys (JSON-LD) kiekviename straipsnyje – padeda Google suprasti, kad tai tinklaraščio įrašas su data ir autoriumi
- Aiški `<h1>`/`<h2>` antraščių hierarchija kiekviename puslapyje

**Ką dar verta padaryti** (nebūtina dabar, bet pravers ateityje):
- Užregistruoti svetainę [Google Search Console](https://search.google.com/search-console) ir pateikti `sitemap.xml` nuorodą – taip Google sužinos apie puslapius greičiau, nei laukiant, kol pats atras
- Kai turėsite savo domeną (nestly.lt/blog), atnaujinti `sitemap.xml` faile esančius adresus, jei jie skirsis nuo dabartinių

---

## ❓ Jei kas nors neveikia

- **Puslapis atrodo be spalvų/šriftų** → patikrinkite, ar `assets` aplankas įkeltas kartu, tuo pačiu pavadinimu
- **Nuorodos į straipsnius neveikia** → patikrinkite, ar `articles` aplankas įkeltas, ir failų pavadinimai nepasikeitė
- **GitHub Pages sako „404"** → paspauskite Settings → Pages ir įsitikinkite, kad Branch nustatytas į `main` / `root`, ir palaukite 1-2 min.

Jei kils klausimų – atsiųskite ekrano nuotrauką, ką matote, ir padėsiu išsiaiškinti.
