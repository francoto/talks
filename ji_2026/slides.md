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
layout: section
---

# Outils


---

## EVERSE

Projet européen qui construit et combine des **outils et ressources** pour la qualité du logiciel de recherche.

<v-click>

### C'est quoi un logiciel de recherche ?


- **exclusif** : code associé au papier de recherche
- **inclusif** tout ce qui a été utile pour réaliser les expériences.

> Aleksandra Nenadic, Daniel Garijo, Laura Portell-Silva, Shoaib Sufi, "_What is Research Software?_". everse.software. [http://everse.software/RSQKit/research_software](http://everse.software/RSQKit/research_software) (accessed 20 November 2026).
</v-click>

<!-- spectre plus ou moins large 
- limité au logiciel qui a produit les résultats scientifiques (cité dans le papier associé)
- ouvert au code qui interface les outils utilisées pour réaliser l'expérience (détecteur, ...) logiciels qui sont sortis du cadre unique de la recherche scientifique ...

-->


---

### Différents tiers

- Analysis code : scripts d'analyse, jupyter notebook, support de publication
- Prototype tools : utilisation plus grande qu'une unique publication. Ex: agnpy, Compas Toolkit, ...
- Research Software infrastructure : gammapy, jupyter notebooks, scikit-learn, ...

> Aleksandra Nenadic, Daniel Garijo, Fotis Psomopoulos, Shoaib Sufi, "Three-Tier Model of Research Software". everse.software. http://everse.software/RSQKit/three_tier_view (accessed 20 November 2026). 


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

# Indicateur de qualité

proxy de la dimension de qualité associée


https://everse.software/indicators/website/indicators.html

---
layout: two-cols
---

::title::

## Les briques d’EVERSE

::left::

### resqui

CLI Python pour analyser un repo à partir de son url

https://github.com/EVERSE-ResearchSoftware/QualityPipelines


::right::

 ### DashVerse 
 dashboard de présentation des analyses produites par resqui 
 
https://www.dashverse.cloud/


---
layout: two-cols
---

::title::

# Codemetasoft

## Métadonnées

::left::

```json
{
    "@context": "https://doi.org/10.5063/schema/codemeta-2.0",
    "@type": "SoftwareSourceCode",
    "license": "https://spdx.org/licenses/MIT",
    "codeRepository": "git+https://gitlab.in2p3.fr/gammalearn/gammalearn.git",
    "contIntegration": "https://gitlab.in2p3.fr/gammalearn/gammalearn/-/pipelines",
    "dateCreated": "2017-07-01",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "downloadUrl": "https://gitlab.in2p3.fr/gammalearn/gammalearn/-/archive/v0.16.0/gammalearn-v0.16.0.tar.gz",
    "issueTracker": "https://gitlab.in2p3.fr/gammalearn/gammalearn/-/issues",
    "name": "GammaLearn",
    "version": "v0.16.0",
    "softwareVersion": "v0.16.0",
    "readme": "https://gitlab.in2p3.fr/gammalearn/gammalearn/-/raw/master/README.md",
    "maintainer": {
        "@type": "Person",
        "@id": "https://orcid.org/0000-0002-5686-2078",
        "givenName": "Thomas",
        "familyName": "Vuillaume",
        "email": "thomas.vuillaume@lapp.in2p3.fr",
        "affiliation": {
            "@type": "Organization",
            "name": "Univ. Savoie Mont-Blanc, CNRS, LAPP"
        }
    },
    "description": "GammaLearn is a collaborative project to apply deep learning to the analysis of low-level Imaging Atmospheric Cherenkov Telescopes such as CTA.\nIt provides a framework to easily train and apply models from a configuration file.\nLearn more at https://purl.org/gammalearn ",
    "applicationCategory": "astroparticle, iact, cta",
    "releaseNotes": "Gammalearn v0.16.0 reconstructs (src_x, src_y) instead of (alt, az). It also fixes crashes on invalid reconstructed directions, a prod6 data bug, and slow HDF5 reads in FileLSTDataset, and removes dead code.",
    "funding": "824064",
    "developmentStatus": "active",
    "funder": {
        "@type": "Organization",
        "name": "European Union’s Horizon 2020 research and innovation programme"
    },
    "keywords": [
        "deep learning",
        "machine learning",
        "Gamma-ray telescopes",
        "cta"
    ],
    "programmingLanguage": [
        "Python 3"
    ],
    "relatedLink": [
        "https://purl.org/gammalearn"
    ],
    "author": [
        {
            "@type": "Person",
            "@id": "https://orcid.org/ 0000-0002-4012-6930",
            "givenName": "Mikael",
            "familyName": "Jacquemont",
            "email": "mikael.jacquemont@lapp.in2p3.fr",
            "affiliation": {
                "@type": "Organization",
                "name": "Univ. Savoie Mont-Blanc, CNRS, LAPP"
            }
        },
        {
            "@type": "Person",
            "@id": "https://orcid.org/0000-0002-5686-2078",
            "givenName": "Thomas",
            "familyName": "Vuillaume",
            "email": "thomas.vuillaume@lapp.in2p3.fr",
            "affiliation": {
                "@type": "Organization",
                "name": "Univ. Savoie Mont-Blanc, CNRS, LAPP"
            }
        },
        {
            "@type": "Person",
            "@id": "https://orcid.org/0000-0002-5221-0240",
            "givenName": "Michaël",
            "familyName": "Dell'aiera",
            "email": "michael.dellaiera@lapp.in2p3.fr",
            "affiliation": {
                "@type": "Organization",
                "name": "Univ. Savoie Mont-Blanc, CNRS, LAPP"
            }
        }
    ],
    "contributor": [
        {
            "@type": "Person",
            "@id": "https://orcid.org/0000-0003-1536-9241",
            "givenName": "Thomas",
            "familyName": "Trivellato",
            "email": "thomas.trivellato@lapp.in2p3.fr",
            "affiliation": {
                "@type": "Organization",
                "name": "Univ. Savoie Mont-Blanc, CNRS, LAPP"
            }
        },
        {
            "@type": "Person",
            "@id": "https://orcid.org/0000-0001-5226-3089",
            "givenName": "Tom",
            "familyName": "François",
            "email": "tom.francois@lapp.in2p3.fr",
            "affiliation": {
                "@type": "Organization",
                "name": "Univ. Savoie Mont-Blanc, CNRS, LAPP"
            }
        },
        {
            "@type": "Person",
            "@id": "",
            "givenName": "Vincent",
            "familyName": "Pollet",
            "email": "vincent.pollet@lapp.in2p3.fr",
            "affiliation": {
                "@type": "Organization",
                "name": "Univ. Savoie Mont-Blanc, CNRS, LAPP"
            }
        },
        {
            "@type": "Person",
            "@id": "https://orcid.org/0000-0001-9582-451X",
            "givenName": "Justine",
            "familyName": "Talpaert",
            "email": "justine.talpaert@lapp.in2p3.fr",
            "affiliation": {
                "@type": "Organization",
                "name": "Univ. Savoie Mont-Blanc, CNRS, LAPP"
            }
        }
    ]
}
```

::right::

Elles décrivent le logiciel : **licence, langage, date de modification, mots-clés**…

- Souvent **oubliées**, ou **non maintenues**
- Pourtant c’est **le premier élément lu** par les services
- → **FAIR** : Findable, Accessible, Interoperable, Reusable



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

---

# rsmetacheck-bot en pratique

> 🖼️ **Capture d’écran** : une issue ouverte automatiquement sur un dépôt réel, avec les points détectés (pitfalls et warnings). Annoter 1 ou 2 éléments.

<!--
Exemple concret : l’auteur n’a rien à lancer, l’information arrive là où il travaille déjà.
-->

---
layout: two-cols
---

::title::

# Comment améliorer la qualité logicielle dans une communauté ?

4 piliers

::left::

<v-clicks>

1. **Fixer des exigences partagées**
   - définir des critères requis minimum (indicateurs)
2. **Automatiser** et réduire la friction
   - analyse en continu / régulièrement
3. Donner de la **visibilité** et une incitation
   - partager l'analyse avec les mainteneurs
   - donner des pistes de points à améliorer (depuis existant)
   - donner des exemples de bons élèves 
4. **Mesurer** et suivre dans le temps

</v-clicks>

:: right ::

- configuration / liste d'indicateurs
- autocodemeta
- resqui
- dashverse



---
layout: section
---

# Applications
---

# ESCAPE OSSR : un catalogue pour une communauté

**Open Source Software Repository** : catalogue de dépôts dédié aux communautés d’astro et de physique des particules, hébergé sur Zenodo.

<v-clicks>

- But : regrouper les logiciels d’un même domaine, **avec des exigences de qualité**
- https://escape-ossr.gitlab.io/ossr-pages/
- Communauté Zenodo : https://zenodo.org/communities/escape2020

</v-clicks>

> 🖼️ **Capture d’écran** : page d’accueil du catalogue OSSR et liste des enregistrements de la communauté Zenodo.


---

# OSSR : le fonctionnement actuel

- critères d'entrées → système de curation → ajout dans le catalogue


> 🖼️ **Schéma** : flux horizontal **Dépôt Zenodo → Analyse des critères → Merge request de curation → Validation manuelle (board ESCAPE) → Entrée dans le catalogue**. Mettre en évidence l’étape manuelle.

levier 1 et 3

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

# CLLAPP : le Catalogue de Logiciels du LAPP

<!-- Projet très récent -->

### Motivations

<v-clicks>

- **Comptabilité** : logiciels pas évalués directement dans les productions du laboratoire.
- **Collaboration** : connaissance des autres logiciels développés et maintenus
- **Qualité** : Améliorer la qualité des différents

</v-clicks>

<v-click>

### Création

point d'entrée : codemeta.json

visibilité interne

</v-click>

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

# Conclusion

  > schéma des outils utilisés dasn catalogue OSSR et CLAPP

# Perspectives

- **Catalogue de laboratoire** : étendre CLLAPP à l’**IN2P3**, pour renforcer la collaboration et la réutilisation d’outils entre laboratoires

---
layout: end
class: text-center
---

# Questions ?


- EVERSE : https://everse.software/
- Codemetasoft : https://w3id.org/codemetasoft/
- OSSR : https://escape-ossr.gitlab.io/ossr-pages/

Tom François tom.francois@lapp.in2p3.fr
<!--
5 min prévues pour les questions.
-->