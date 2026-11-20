---
theme: pixel
title: "Comment améliorer la qualité logicielle dans une communauté ?"
subtitle: "Journées Informatique IN2P3/IRFU 2026"
author: "Tom François"
date: 25-11-2026
transition: slide-left
email: tom.francois@lapp.in2p3.fr
mdc: true
layout: cover
class: lapp-cover
aspectRatio: 16/9
favicon: './binaries/favicon.ico'
keywords: fair,software-quality,metadata,research,software,cnrs,in2p3,lapp
themeConfig:
  primary: '#16354a'

logos:
  - /binaries/logos/logo_lapp_50ans.png
  - /binaries/logos/EOSCEverse_PosColour_full.svg
  - /binaries/logos/codemetasoft_logo.png
  - /binaries/logos/eu-funded.svg
  - /binaries/logos/oscars.svg
  - /binaries/logos/logo_cnrs_blanc.png
  - /binaries/logos/logo_usmb_blanc_web_grand_rvb.png
---

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

---
layout: section
---

# Les outils


---

# EVERSE

Projet européen qui construit et combine des **outils et ressources** pour la qualité du logiciel de recherche.



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
layout: two-cols
---

::title::
## La qualité logicielle : un concept multidimensionnel

::left::

| Dimension | Description |
|---|---|
| Community | Santé des relations entre contributeurs, utilisateurs et parties prenantes. |
| Compatibility | Coexistence avec d’autres produits et échange ou réutilisation d’informations. |
| FAIRness | Adhésion aux principes Findable, Accessible, Interoperable et Reusable. |
| Flexibility | Adaptation à de nouveaux besoins, environnements ou charges de travail. |
| Functional Suitability | Fonctions complètes, exactes et adaptées aux tâches visées. |
| Interaction Capability | Interface facile à apprendre, à utiliser, inclusive et prévenant les erreurs. |
| Maintainability | Modifications efficaces grâce à la modularité, les tests et la réutilisabilité. |

::right::
| Dimension | Description |
|---|---|
| Open Source Software | Code accessible pour inspection, modification, vérification et contribution. |
| Performance Efficiency | Délais, débits et charge respectés avec une utilisation efficace des ressources. |
| Reliability | Fonctionnement prévu, disponibilité, tolérance aux fautes et reprise après panne. |
| Safety | Prévention des situations dangereuses pour les personnes, les biens ou l’environnement. |
| Security | Protection contre les attaques et contrôle des données : accès, intégrité et authenticité. |
| Sustainability | Disponibilité durable sur de nouvelles plateformes et pour de nouveaux besoins. |

---

# Par où commencer dans une communauté ?

Trois critères pour choisir un point d’entrée :

<Card tag="concept" title="Title">Body text.</Card>

<v-clicks>

- **Mesurable automatiquement** : pas de relecture manuelle à grande échelle
- **Utile à tous** : lisible par les services de découverte (catalogues, dépôts, moteurs de recherche)
- **Peu coûteux** pour les auteurs de logiciels

</v-clicks>

<v-click>

Notion d'indicateur (proxy d'un aspect appartenant à une dimension)

https://everse.software/indicators/website/indicators.html

</v-click>


---
layout: grid
cols: 2
---

# Les briques d’EVERSE

- **RSQKit** : ressources pédagogiques https://everse.software/RSQKit/

- **TechRadar** : catalogue d’outils, catégorisés par dimension de la qualité - https://everse.software/TechRadar/
- **resqui** : paquet Python qui évalue un logiciel en combinant de nombreux plugins existants - https://github.com/EVERSE-ResearchSoftware/QualityPipelines
- **dashverse** : dashboard de présentation des analyses produites par resqui - https://www.dashverse.cloud/


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
layout: section
---

# Applications
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
layout: image-right
image: /binaries/schemas/schéma_etat_courant_cllapp.png
backgroundSize: 70%
---

# CLLAPP : ce qui existe aujourd’hui (POC)


1. le `codemeta.json` est **généré** à partir de l’url
2. il est **ajouté à la base de données**
3. il apparaît dans le **catalogue**




---
layout: image
image: /binaries/schemas/clapp_dev_schema.svg
backgroundSize: 50em 90%
---

# CLLAPP



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