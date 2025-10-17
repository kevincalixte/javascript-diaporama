# javascript-diaporama

## Description
Projet web créé avec le générateur automatique de structure.

## Structure du projet
```
javascript-diaporama/
├── index.html          # Page principale
├── README.md           # Ce fichier
├── package.json        # Configuration npm
└── assets/
    ├── css/
    │   ├── reset.css    # Reset CSS
    │   └── style.css    # Styles principaux
    ├── js/
    │   └── script.js    # JavaScript principal
    ├── img/             # Images
    └── fonts/           # Polices locales
```

## Technologies utilisées
- HTML5
- CSS3
- JavaScript ES6+
- Google Fonts (TOUTES les polices populaires)
- Font Awesome 6.5.1 (Icônes)

## 🎨 Google Fonts intégrées (40+ polices)

### Polices Sans-Serif
- **Inter** - Moderne et lisible
- **Poppins** - Géométrique et friendly
- **Roboto** - Clean et professionnel
- **Open Sans** - Humaniste et accessible
- **Lato** - Élégante et chaleureuse
- **Montserrat** - Urbaine et moderne
- **Source Sans 3** - Adobe, très lisible
- **Raleway** - Élégante et fine
- **Ubuntu** - Friendly et moderne
- **Nunito** - Arrondie et douce
- **PT Sans** - Versatile
- **Oswald** - Condensée et impactante
- **Kanit** - Moderne avec du caractère
- **Exo 2** - Futuriste
- **Barlow** - Légèrement condensée
- **Work Sans** - Optimisée pour l'écran
- **Fira Sans** - Humaniste Mozilla
- **DM Sans** - Low-contrast, très lisible
- **Space Grotesk** - Géométrique moderne
- **Plus Jakarta Sans** - Indonésienne moderne
- **Manrope** - Open-source élégante
- **Lexend** - Optimisée pour la lecture
- **Outfit** - Géométrique et friendly

### Polices Serif
- **Playfair Display** - Élégante et contrastée
- **Merriweather** - Optimisée pour l'écran
- **Crimson Text** - Inspirée de l'ancienne typographie
- **Libre Baskerville** - Basée sur Baskerville

### Polices Script/Handwriting
- **Dancing Script** - Cursive casual
- **Pacifico** - Script brush casual
- **Lobster** - Script bold
- **Sacramento** - Monoline script
- **Great Vibes** - Formelle et élégante
- **Kaushan Script** - Brush script
- **Caveat** - Handwriting casual

### Polices Display/Fantaisie
- **Amatic SC** - Hand-drawn
- **Comfortaa** - Arrondie et friendly
- **Quicksand** - Sans-serif arrondie
- **Anton** - Impact condensée
- **Bebas Neue** - All caps condensée
- **Righteous** - Retro futuriste
- **Bangers** - Comic book style
- **Fredoka** - Friendly et arrondie
- **Patua One** - Display strong
- **Russo One** - Sans-serif audacieuse

### Polices Monospace (Code)
- **JetBrains Mono** - Optimisée pour le code
- **Fira Code** - Avec ligatures
- **Source Code Pro** - Adobe
- **IBM Plex Mono** - Équilibrée
- **Inconsolata** - Humaniste monospace

## 🎯 Font Awesome 6.5.1
Plus de 2000 icônes disponibles :
```html
<i class="fas fa-heart"></i>     <!-- Solid -->
<i class="far fa-heart"></i>     <!-- Regular -->
<i class="fab fa-github"></i>    <!-- Brands -->
```

## Installation
1. Cloner ou télécharger le projet
2. Ouvrir le dossier dans VS Code
3. Installer live-server : `npm install -g live-server`
4. Lancer le serveur : `npm start`

## Utilisation
- Modifier `index.html` pour le contenu
- Personnaliser les styles dans `assets/css/style.css`
- Ajouter vos scripts dans `assets/js/script.js`
- Placer vos images dans `assets/img/`

## 💡 Exemples d'utilisation des polices
```css
/* Sans-Serif modernes */
body { font-family: 'Inter', sans-serif; }
h1 { font-family: 'Poppins', sans-serif; }
.title { font-family: 'Montserrat', sans-serif; }
.text { font-family: 'Open Sans', sans-serif; }

/* Serif élégantes */
.elegant { font-family: 'Playfair Display', serif; }
.readable { font-family: 'Merriweather', serif; }

/* Script/Handwriting */
.fancy { font-family: 'Dancing Script', cursive; }
.casual { font-family: 'Caveat', cursive; }

/* Display/Impact */
.big-title { font-family: 'Bebas Neue', sans-serif; }
.fun { font-family: 'Fredoka', sans-serif; }

/* Code */
code { font-family: 'JetBrains Mono', monospace; }
pre { font-family: 'Fira Code', monospace; }
```

## 🎨 Exemples d'icônes Font Awesome
```html
<!-- Navigation -->
<i class="fas fa-home"></i> Accueil
<i class="fas fa-user"></i> Profil
<i class="fas fa-cog"></i> Paramètres

<!-- Réseaux sociaux -->
<i class="fab fa-facebook"></i>
<i class="fab fa-twitter"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-linkedin"></i>
<i class="fab fa-github"></i>

<!-- Actions -->
<i class="fas fa-download"></i> Télécharger
<i class="fas fa-search"></i> Rechercher
<i class="fas fa-heart"></i> J'aime
<i class="fas fa-share"></i> Partager
```

## Fonctionnalités CSS
- Reset CSS complet
- Variables CSS personnalisées
- Design responsive
- Animations au scroll

## Scripts disponibles
- `npm start` : Lance live-server
- `npm run dev` : Lance live-server sur le port 3000

## Licence
MIT
