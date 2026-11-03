# Site vitrine Pivot-R

Page unique statique, bilingue FR/EN, construite sur le design system Pivot-R (logo dégradé officiel, indigo, bleu royal et chrome, Barlow Condensed et Barlow, angles vifs, motif de la diagonale du R). Hébergée sur GitHub Pages avec le domaine `pivot-r.com` (DNS chez GoDaddy).

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Structure et texte français |
| `styles.css` | Jetons de la charte (`:root`) et mise en page |
| `main.js` | Bascule FR/EN (textes anglais dans l'objet `EN`) et courriel |
| `assets/pivot-r-logo.png` | Logo dégradé officiel, redimensionné à 1200 px |
| `assets/favicon.png` | Icône d'onglet : bandes obliques de la charte (le R n'est jamais isolé) |
| `CNAME` | Domaine personnalisé lu par GitHub Pages (`www.pivot-r.com`) |
| `README.md` | Ce guide |

> Dépôt **public** et **séparé** du dépôt Pivot-R (privé). Ne jamais y copier de code, de JSON de configuration ni de documentation interne.

## Sécurité du site

- Site 100 % statique : aucun PHP, aucune base de données, aucun formulaire, aucun code exécuté côté serveur. GitHub Pages sert seulement des fichiers.
- Politique de sécurité du contenu (balise `Content-Security-Policy` dans `index.html`) : scripts et styles limités au domaine lui-même; seules exceptions, Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`). Aucun script ni style en ligne, aucun `iframe`, aucun envoi de formulaire.
- Aucun traceur, aucun témoin. Seule la préférence de langue est gardée dans le navigateur du visiteur (`localStorage`).
- HTTPS imposé par GitHub Pages (étape 5).
- Limite connue : GitHub Pages ne permet pas d'ajouter des en-têtes HTTP (`frame-ancestors`, `HSTS` personnalisé). Pour les obtenir, placer Cloudflare (gratuit) devant le site.

## 1. Avant de publier

1. Créer l'adresse courriel publique `info@pivot-r.com` (alias de la boîte existante) ou modifier `CONTACT_EMAIL` en haut de `main.js` **et** l'adresse écrite dans `index.html` (section Contact).
2. Relire le texte avant chaque mise en ligne : il présente l'offre, pas l'état d'avancement interne.
3. Pour ajouter un texte : mettre le français dans `index.html` avec un attribut `data-i18n="cle"`, et l'anglais dans `main.js` sous la même clé.

## 2. Créer le dépôt et activer Pages

1. GitHub → **New repository** → nom `pivot-r-site`, visibilité **Public**.
2. Téléverser tout le contenu du dossier, dont le dossier `assets` (Add file → Upload files, glisser le dossier complet) sur la branche `main`.
3. **Settings → Pages** → Source : *Deploy from a branch* → Branch : `main` / `/ (root)` → Save.
4. Le site est d'abord visible à `https://<compte>.github.io/pivot-r-site/`.

## 3. Vérifier le domaine (anti-détournement) — à faire AVANT le DNS

1. Photo de profil → **Settings → Pages** (paramètres du compte ou de l'organisation, pas du dépôt) → **Add a domain** → `pivot-r.com`.
2. GitHub fournit un enregistrement **TXT** (`_github-pages-challenge-<compte>`). L'ajouter chez GoDaddy, attendre, puis cliquer **Verify**.

## 4. DNS chez GoDaddy

GoDaddy → Mes produits → `pivot-r.com` → **DNS**. Supprimer d'abord les enregistrements `A @` « Parked » et le `CNAME www` existant s'ils pointent ailleurs.

| Type | Nom | Valeur | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | 1 h |
| A | @ | 185.199.109.153 | 1 h |
| A | @ | 185.199.110.153 | 1 h |
| A | @ | 185.199.111.153 | 1 h |
| AAAA | @ | 2606:50c0:8000::153 | 1 h |
| AAAA | @ | 2606:50c0:8001::153 | 1 h |
| AAAA | @ | 2606:50c0:8002::153 | 1 h |
| AAAA | @ | 2606:50c0:8003::153 | 1 h |
| CNAME | www | `<compte>.github.io` | 1 h |

- **Ne pas toucher aux enregistrements MX, TXT (SPF/DKIM/DMARC) ni autodiscover** : ils servent au courriel `@pivot-r.com`.
- Aucun enregistrement générique `*` vers GitHub.
- Le CNAME pointe vers `<compte>.github.io`, sans nom de dépôt.

## 5. Finaliser

1. Dépôt → **Settings → Pages** → Custom domain : `www.pivot-r.com` → Save (cohérent avec le fichier `CNAME`). `pivot-r.com` redirigera vers `www`.
2. Attendre le contrôle DNS (quelques minutes à 24 h), puis cocher **Enforce HTTPS**.
3. Vérifier :

```powershell
Resolve-DnsName pivot-r.com -Type A
Resolve-DnsName www.pivot-r.com -Type CNAME
```

## Mettre à jour le site

Modifier les fichiers, puis commit sur `main`. GitHub Pages republie en une minute environ. Forcer la langue pour tester : `?lang=en` ou `?lang=fr`.
