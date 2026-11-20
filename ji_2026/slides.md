---
theme: seriph
title: Comment améliorer la qualité logicielle dans une communauté ?
author: Tom François
date: 2026-11
transition: slide-left
mdc: true
layout: cover
class: lapp-cover
aspectRatio: 16/9
favicon: './binaries/favicon.ico'
keywords: fair,software-quality,metadata,research,software,cnrs,in2p3,lapp,
---

<div class="cover-shell">
  <div class="cover-lapp">
    <img src="./binaries/logos/logo_lapp_50ans.png" alt="LAPP — 50 ans" />
  </div>

  <div class="cover-title">
    <h1>Comment améliorer la<br/>qualité logicielle en pratique<br/>dans une communauté</h1>
    <p class="cover-subtitle">Création d'un catalogue de logiciels au LAPP</p>
  </div>

  <div class="cover-author">
    <p><strong>Tom François</strong></p>
  </div>

  <div class="cover-projects" aria-label="Projets">
    <img class="logo-codemetasoft" src="./binaries/logos/codemetasoft_logo.png" alt="CodeMetaSoft" />
    <img class="logo-everse" src="./binaries/logos/EOSCEverse_PosColour_full.svg" alt="EVERSE" />
  </div>

  <div class="cover-funders" aria-label="Institutions et financeurs">
    <img class="logo-oscars" src="./binaries/logos/oscars.svg" alt="OSCARS" />
    <img class="logo-eu" src="./binaries/logos/eu-funded.svg" alt="Financé par l'Union européenne" />
    <img class="logo-cnrs" src="./binaries/logos/logo_cnrs_blanc.png" alt="CNRS" />
    <img class="logo-usmb" src="./binaries/logos/logo_usmb_blanc_web_grand_rvb.png" alt="USMB"/>
  </div>
</div>

<style>
.lapp-cover {
  background:
    radial-gradient(circle at 82% 68%, rgba(23, 187, 210, .13), transparent 28%),
    #16354a;
}

.lapp-cover::before {
  content: "";
  position: absolute;
  right: -18%;
  top: 8%;
  width: 74%;
  height: 58%;
  border-radius: 50%;
  background: #fff;
  transform: rotate(-7deg);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .6);
}

.lapp-cover::after {
  content: "";
  position: absolute;
  right: -20%;
  bottom: 10%;
  width: 72%;
  height: 24%;
  border: 2px solid rgba(45, 200, 220, .85);
  border-left: 1px solid rgba(45, 200, 220, .35);
  border-radius: 50%;
  transform: rotate(-8deg);
}

.cover-shell {
  position: absolute;
  inset: 0;
  color: #082b63;
}

.cover-lapp {
  position: absolute;
  left: 5%;
  top: 7%;
  width: 33%;
  z-index: 2;
}

.cover-lapp img {
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  object-position: left center;
}

.cover-title {
  position: absolute;
  right: 5.5%;
  top: 24%;
  width: 57%;
  z-index: 3;
  text-align: right;
}

.cover-title h1 {
  margin: 0;
  color: #082b63;
  font-size: 2.45rem;
  line-height: 1.08;
  font-weight: 750;
  letter-spacing: -.02em;
}

.cover-subtitle {
  margin: .55rem 0 0;
  color: #16b8d1;
  font-size: 1.08rem;
  font-weight: 500;
}

.cover-author {
  position: absolute;
  right: 5.5%;
  top: 48.5%;
  z-index: 3;
  color: #082b63;
  text-align: right;
  font-size: 1.32rem;
}

.cover-projects {
  position: absolute;
  left: 5%;
  bottom: 14.5%;
  width: 36%;
  height: 15%;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.cover-projects img {
  object-fit: contain;
}

.logo-codemetasoft {
  width: 48%;
  max-height: 90px;
}

.logo-everse {
  width: 42%;
  max-height: 72px;
}

.cover-funders {
  position: absolute;
  left: 5%;
  right: 4.5%;
  bottom: 3.2%;
  height: 8.5%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(.8rem, 2vw, 2rem);
}

.cover-funders img {
  max-height: 58px;
  width: auto;
  object-fit: contain;
}

.logo-oscars {
  margin-right: auto;
  max-width: 155px;
}

.logo-eu {
  max-width: 150px;
}

.logo-cnrs {
  max-width: 78px;
}

.logo-usmb-placeholder {
  width: 125px;
  height: 58px;
  border: 2px dashed rgba(255, 255, 255, .75);
  border-radius: 8px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;
}

.logo-usmb-placeholder span {
  font-size: 1.15rem;
  font-weight: 750;
  letter-spacing: .05em;
}

.logo-usmb-placeholder small {
  margin-top: .35rem;
  font-size: .52rem;
  letter-spacing: .08em;
  opacity: .85;
}

@media (max-height: 700px) {
  .cover-title h1 {
    font-size: 2.15rem;
  }

  .cover-lapp {
    max-width: 28%;
  }
}
</style>

---
layout: image
image: ./binaries/schemas/intro_schema.svg
backgroundSize: 50em 90%
---

# Introduction

<!-- 
Dans cette présentation je vais parler de qualité logicielle.
Après une définition rapide, on va parler d'outils qui ont été développés dans les projets EVERSE et Codemetasoft.
Et comment s'en servir de briques pour d'autres projets.

-->


---

# Notre question, et 4 leviers

**Comment améliorer la qualité logicielle dans une communauté ?**

<v-clicks>

1. **Fixer des exigences partagées**
2. **Automatiser** et réduire la friction
3. Donner de la **visibilité** et une incitation
4. **Mesurer** et suivre dans le temps

</v-clicks>

<div class="mt-8 text-sm opacity-70">

Plan : qualité logicielle → outils (EVERSE, Codemetasoft) → applications (OSSR, CLLAPP) → retour sur les leviers

</div>


<div

</div>
<!--
On annonce les leviers maintenant, on y reviendra en conclusion.
Sur les slides suivantes, un petit badge rappelle le levier illustré.
-->

---


### C'est quoi un logiciel de recherche ?

spectre plus ou moins inclusif:
- tendance à voir uniquement le code intégré dans le processus de la découverte scientifique
- on peut aussi considérer tout code qui a été utilisé/produit ou lié au processus de recherche dans un plusieurs étapes de cycle de vie de la recherche. 
	- code pour interfacer des détecteurs ou des logiciels qui sont sortis de l'exclusivité du monde de la recherche.

> Aleksandra Nenadic, Daniel Garijo, Laura Portell-Silva, Shoaib Sufi, "_What is Research Software?_". everse.software. [http://everse.software/RSQKit/research_software](http://everse.software/RSQKit/research_software) (accessed 20 November 2026).

<v-click>

### Différents tiers

- Analysis code : scripts d'analyse, jupyter notebook, support de publication
- Prototype tools : utilisation plus grande qu'une unique publication. Ex: agnpy, Compas Toolkit, ...
- Research Software infrastructure : gammapy, jupyter notebooks, scikit-learn, ...

> Aleksandra Nenadic, Daniel Garijo, Fotis Psomopoulos, Shoaib Sufi, "Three-Tier Model of Research Software". everse.software. http://everse.software/RSQKit/three_tier_view (accessed 20 November 2026). 

</v-click>

---

### La qualité logicielle : un concept multidimensionnel

<div class="grid grid-cols-2 gap-5 mt-3">

<table class="w-full text-[10px] leading-[1.22] border-separate border-spacing-y-0.5">
  <thead>
    <tr class="text-left">
      <th class="w-[31%] px-2 py-1.5 text-[11px] bg-slate-100 rounded-l-lg">Dimension</th>
      <th class="px-2 py-1.5 text-[10px] bg-slate-100 rounded-r-lg">Description synthétique</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Community</td><td class="px-2 py-1">Santé des relations entre contributeurs, utilisateurs et parties prenantes.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Compatibility</td><td class="px-2 py-1">Coexistence avec d’autres produits et échange ou réutilisation d’informations.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">FAIRness</td><td class="px-2 py-1">Adhésion aux principes Findable, Accessible, Interoperable et Reusable.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Flexibility</td><td class="px-2 py-1">Adaptation à de nouveaux besoins, environnements ou charges de travail.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Functional Suitability</td><td class="px-2 py-1">Fonctions complètes, exactes et adaptées aux tâches visées.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Interaction Capability</td><td class="px-2 py-1">Interface facile à apprendre, à utiliser, inclusive et prévenant les erreurs.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Maintainability</td><td class="px-2 py-1">Modifications efficaces grâce à la modularité, les tests et la réutilisabilité.</td></tr>
  </tbody>
</table>

<table class="w-full text-[10px] leading-[1.22] border-separate border-spacing-y-0.5">
  <thead>
    <tr class="text-left">
      <th class="w-[31%] px-2 py-1.5 text-[11px] bg-slate-100 rounded-l-lg">Dimension</th>
      <th class="px-2 py-1.5 text-[10px] bg-slate-100 rounded-r-lg">Description synthétique</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Open Source Software</td><td class="px-2 py-1">Code accessible pour inspection, modification, vérification et contribution.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Performance Efficiency</td><td class="px-2 py-1">Délais, débits et charge respectés avec une utilisation efficace des ressources.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Reliability</td><td class="px-2 py-1">Fonctionnement prévu, disponibilité, tolérance aux fautes et reprise après panne.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Safety</td><td class="px-2 py-1">Prévention des situations dangereuses pour les personnes, les biens ou l’environnement.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Security</td><td class="px-2 py-1">Protection contre les attaques et contrôle des données : accès, intégrité et authenticité.</td></tr>
    <tr><td class="px-2 py-1 font-semibold text-[12px] align-top">Sustainability</td><td class="px-2 py-1">Disponibilité durable sur de nouvelles plateformes et pour de nouveaux besoins.</td></tr>
  </tbody>
</table>

</div>

<div class="mt-2 text-xs opacity-60">Source : EVERSE, « Research Software Quality and Project Health Dimensions ».</div>

---

# Par où commencer dans une communauté ?

Trois critères pour choisir un point d’entrée :

<v-clicks>

- **Mesurable automatiquement** : pas de relecture manuelle à grande échelle
- **Utile à tous** : lisible par les services de découverte (catalogues, dépôts, moteurs de recherche)
- **Peu coûteux** pour les auteurs de logiciels

</v-clicks>

<v-click>

**→ Les métadonnées répondent aux trois critères.**

</v-click>

> 🖼️ **Schéma** : 3 critères qui convergent vers une pastille « métadonnées ».

<!--
Cette slide justifie le zoom sur Codemetasoft, et plus largement le choix des outils d’EVERSE.
-->

---

# EVERSE : ne pas tout recréer

Projet européen qui construit et combine des **outils et ressources** pour la qualité du logiciel de recherche.

- Principe : **utiliser l’existant** et améliorer son utilisabilité
- https://everse.software/

> 🖼️ **Illustration** : logo EVERSE, entouré des logos d’outils existants qui s’assemblent comme un puzzle.

---

# Les briques d’EVERSE

- **RSQKit** : ressources pédagogiques
- **TechRadar** : catalogue d’outils, catégorisés par dimension de la qualité
- **resqui** : paquet Python qui évalue un logiciel en combinant de nombreux plugins existants
- **dashverse** : dashboard de présentation des analyses produites par resqui

> 🖼️ **Schéma** : chaîne horizontale en 4 blocs **Apprendre → Choisir → Évaluer → Présenter** (RSQKit → TechRadar → resqui → dashverse), avec une capture d’écran sous chaque bloc.

<div class="abs-br m-6 text-sm opacity-60">Levier ④ Mesurer</div>

<!--
Si le temps manque, se concentrer sur resqui et dashverse, qui reviennent dans OSSR et CLLAPP.
-->

---

# Les métadonnées : petites, mais décisives

Elles décrivent le logiciel : **licence, langage, date de modification, mots-clés**…

<v-clicks>

- Souvent **oubliées**, ou **non maintenues**
- Pourtant c’est **le premier élément lu** par les services
- → **FAIR** : Findable, Accessible, Interoperable, Reusable

</v-clicks>

> 🖼️ **Schéma** : à gauche un extrait de `codemeta.json`, à droite des flèches vers les « lecteurs » (catalogues, dépôts, moteurs de recherche).

<!--
Site du projet : https://softwareunderstanding.github.io/CodeMetaSoft_website/website/
-->

---

# Codemetasoft : créer, analyser, maintenir

Des outils pour **faciliter l’usage des métadonnées et automatiser leur maintien** :

- **autocodemeta** : assistant de création de `codemeta.json`
- **rsmetacheck** : analyse des métadonnées
- **rsmetacheck-bot** : lance l’analyse et la soumet sous forme d’issues sur la forge

> 🖼️ **Schéma** : cycle **Créer → Analyser → Signaler (issue) → Corriger → Créer…**, avec le nom de l’outil sur chaque flèche.

<div class="abs-br m-6 text-sm opacity-60">Levier ② Automatiser</div>

---

# rsmetacheck-bot en pratique

> 🖼️ **Capture d’écran** : une issue ouverte automatiquement sur un dépôt réel, avec les points détectés (pitfalls et warnings). Annoter 1 ou 2 éléments.

<div class="abs-br m-6 text-sm opacity-60">Levier ② Automatiser · ④ Mesurer</div>

<!--
Exemple concret : l’auteur n’a rien à lancer, l’information arrive là où il travaille déjà.
-->

---

# Des briques aux applications

On réutilise l’existant, comme le préconise EVERSE :

| Brique | OSSR | CLLAPP |
|---|---|---|
| autocodemeta | ? | ✅ génération du codemeta |
| rsmetacheck / bot | pas encore utilisé | pas encore utilisé |
| resqui | 🔜 curation + suivi | 🚧 quality pipeline |
| dashboard (dashverse) | 🔜 qualité du catalogue | ? |

<div class="mt-6 text-sm opacity-70">✅ en place · 🚧 en cours · 🔜 prévu</div>

<!--
Les « ? » sont à compléter. Les icônes ou logos des outils seront repris sur les slides OSSR et CLLAPP.
-->

---

# ESCAPE OSSR : un catalogue pour une communauté

**Open Source Software Repository** : catalogue de dépôts dédié aux communautés d’astro et de physique des particules, hébergé sur Zenodo.

- But : regrouper les logiciels d’un même domaine, **avec des exigences de qualité**
- https://escape-ossr.gitlab.io/ossr-pages/
- Communauté Zenodo : https://zenodo.org/communities/escape2020

> 🖼️ **Capture d’écran** : page d’accueil du catalogue OSSR et liste des enregistrements de la communauté Zenodo.

<div class="abs-br m-6 text-sm opacity-60">Levier ① Exigences partagées</div>

---

# OSSR : le fonctionnement actuel

La curation analyse le dépôt Zenodo et vérifie les critères requis. Le résultat est reporté dans une **merge request** dédiée, **validée manuellement** par le board ESCAPE.

> 🖼️ **Schéma** : flux horizontal **Dépôt Zenodo → Analyse des critères → Merge request de curation → Validation manuelle (board ESCAPE) → Entrée dans le catalogue**. Mettre en évidence l’étape manuelle.

<div class="abs-br m-6 text-sm opacity-60">Levier ① Exigences partagées</div>

---

# OSSR : limites et prochaines étapes

<div class="grid grid-cols-2 gap-8">
<div>

### Limites

- Validation manuelle
- Pas de suivi de la qualité dans la durée

</div>
<div>

### Prochaines étapes

- Ajouter **resqui** pour la curation et le suivi des projets ajoutés
- Créer un **dashboard** de suivi de la qualité du catalogue

</div>
</div>

> 🖼️ **Schéma** : même flux que la slide précédente, avec en couleur différente (pointillés) les ajouts prévus : resqui dans l’analyse, dashboard en sortie. Légende existant / prévu.

<div class="abs-br m-6 text-sm opacity-60">Levier ④ Mesurer · ③ Visibilité</div>

<!--
Les limites justifient les prochaines étapes : c’est l’articulation à faire entendre.
-->

---

# CLLAPP : le catalogue de logiciels du LAPP

Projet très récent : voici les premières étapes.

<v-clicks>

- Les logiciels du laboratoire ne sont pas forcément mis en avant lors des évaluations : ils apparaissent surtout s’ils sont associés à des publications
- Les projets informatiques sont mal connus au sein du laboratoire → **favoriser la collaboration**
- Mettre en place des **outils de qualité logicielle** sur ces dépôts

</v-clicks>

> 🖼️ **Illustration** (facultative) : trois icônes, une par motivation (évaluation, collaboration, qualité).

<div class="abs-br m-6 text-sm opacity-60">Levier ③ Visibilité</div>

---

# CLLAPP : ce qui existe aujourd’hui (POC)

L’utilisateur **ajoute l’url d’un dépôt** :

<v-clicks>

1. le `codemeta.json` est **généré** à partir de l’url
2. il est **ajouté à la base de données**
3. il apparaît dans le **catalogue**

</v-clicks>

> 🖼️ **Capture d’écran** : formulaire d’ajout d’une url, puis l’entrée apparue dans le catalogue (webview).

<div class="abs-br m-6 text-sm opacity-60">Levier ② Automatiser · ③ Visibilité</div>

---

# CLLAPP : la vision cible

> 🖼️ **Schéma** : pipeline de création et maintien du catalogue, avec **code couleur** :
> - 🟩 **existe** : url de dépôt → génération du codemeta → base de données de codemeta → catalogue (webview) ;
> - 🟧 **en cours**, bords en pointillés : url de groupe/propriétaire → sélection des dépôts, mise à jour des codemeta, quality pipeline → évaluations de qualité (affichées dans le catalogue).
>
> Légende en bas à droite.

<!--
Ce qui est vert existe déjà : ajout d’une url, génération du codemeta, ajout en base et dans le catalogue. Le reste est en cours de développement.
-->

---

# Retour sur la question : 4 leviers

| Levier | Outils | Applications |
|---|---|---|
| ① Exigences partagées | TechRadar, resqui | OSSR (curation) |
| ② Automatiser | autocodemeta, rsmetacheck-bot | CLLAPP (génération des codemeta) |
| ③ Visibilité | dashverse | CLLAPP (catalogue), OSSR |
| ④ Mesurer | resqui, rsmetacheck | OSSR (prévu), CLLAPP (en cours) : suivi dans la durée |

<!--
Reprendre les 4 leviers de l’intro : la question du titre trouve sa réponse ici.
-->

---

# Perspectives

- **Catalogue de domaine** : généraliser le modèle OSSR à d’autres communautés
- **Catalogue de laboratoire** : étendre CLLAPP à l’**IN2P3**, pour renforcer la collaboration et la réutilisation d’outils entre laboratoires
- Qui veut tester ou contribuer ?

> 🖼️ **Schéma** : du LAPP vers plusieurs laboratoires IN2P3 reliés autour d’un catalogue commun.

---
layout: center
class: text-center
---

# Questions ?

Tom François · LAPP

EVERSE : https://everse.software/ · Codemetasoft : https://softwareunderstanding.github.io/CodeMetaSoft_website/website/ · OSSR : https://escape-ossr.gitlab.io/ossr-pages/

<!--
5 min prévues pour les questions.
-->