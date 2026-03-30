import { KBArticle } from "./knowledgeBaseData";

export const kbArticlesFr: KBArticle[] = [
  // Getting Started
  {
    id: "gs-1",
    slug: "book-a-personalised-product-demonstration",
    title: "Réserver une Démonstration Personnalisée du Produit",
    category: "getting-started",
    content: `## Réserver une Démonstration Personnalisée du Produit

### Nous sommes là pour vous aider à tirer le meilleur parti de notre outil.

Nous sommes une équipe de passionnés de cinéma et de professionnels de la création et de la production. S'il y a une chose que nous aimons plus que les films, c'est aider les autres cinéastes à réussir et à réaliser leurs ambitions créatives !

C'est pourquoi nous sommes disponibles chaque jour pour échanger par appel vidéo si vous souhaitez nous parler de vos besoins ou en apprendre davantage sur les fonctionnalités de l'application.

## Contactez-nous dès aujourd'hui !

Pour organiser une démonstration personnalisée et approfondie avec nous, cliquez simplement sur le lien Calendly suivant et suivez les instructions : [RÉSERVER UN APPEL](https://calendly.com/filmmaking-app/30min)`,
    relatedSlugs: ["writing-your-script-with-pzaz", "getting-started-with-workflows", "pzaz-101"],
  },
  {
    id: "gs-2",
    slug: "writing-your-script-with-pzaz",
    title: "Écrire Votre Scénario avec Pzaz",
    category: "getting-started",
    content: `## Écrire Votre Scénario avec Pzaz

### Introduction

Avec l'outil d'écriture de scénario, vous pouvez transformer vos idées en un scénario entièrement structuré — que vous partiez de zéro ou que vous importiez un projet existant. L'outil simplifie chaque étape, vous permettant de personnaliser votre page de titre, d'ajouter des actes, des scènes, des personnages, des dialogues et des transitions, et de construire un flux narratif fluide.

## Pour Commencer

Commencez votre scénario en l'important ou en en créant un nouveau. Le premier scénario que vous créez sera marqué comme le **"Scénario principal"** — ce qui signifie que seul ce scénario peut être utilisé pour le dépouillement, le storyboarding, l'organisation des feuilles de service et la création automatique d'éléments, d'équipements, d'équipe & casting et d'objets de localisation dans la section Production du menu principal. Tous les autres scénarios importés, créés ou dupliqués seront comptés comme des brouillons.

Si vous avez plusieurs scénarios dans votre projet, le premier de la liste sera marqué comme "Scénario Principal" par défaut.

## Import/Export de Scénario

Lorsque vous appuyez sur le bouton **"Nouveau Scénario"**, vous aurez 2 options — "Commencer un nouveau scénario" ou "Importer existant". L'application prend en charge l'import .PDF et l'import de fichiers Final Draft (.FDX).

Pour exporter votre scénario, cliquez sur le menu à 3 points en haut à droite de l'outil d'écriture et appuyez sur l'option **"Exporter le Scénario"**. Vous pouvez choisir le format — .FDX ou .PDF — et inclure ou exclure la page de titre.

> Veuillez noter que si le fichier est volumineux, vous devrez peut-être attendre quelques secondes avant que le document soit prêt pour l'impression.

## Navigation

La navigation est intuitive grâce à la barre latérale, vous permettant de réorganiser rapidement les scènes, modifier les dialogues ou accéder à des sections spécifiques via la fonction de recherche. Chaque mise à jour se fait en temps réel.

## L'Assistant IA

Besoin d'un soutien créatif ? L'assistant IA intégré fournit des suggestions et des analyses intelligentes pour affiner votre scénario, rendant le processus d'écriture plus rapide et plus intuitif.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "ai-security-and-privacy-at-pzaz", "getting-started-with-workflows"],
  },
  {
    id: "gs-3",
    slug: "ai-security-and-privacy-at-pzaz",
    title: "IA, Sécurité et Confidentialité",
    category: "getting-started",
    content: `## IA, Sécurité et Confidentialité

Nous prenons la sécurité et la confidentialité au sérieux, garantissant que votre travail créatif reste protégé.

**Nous n'utilisons jamais vos scénarios, notes ou données pour l'entraînement de l'IA. Votre travail est privé et accessible uniquement par vous et les collaborateurs que vous choisissez.**

## Sécurité des Données

Pour protéger vos données, l'application utilise le chiffrement de bout en bout avec **TLS** pour les données en transit et le chiffrement **AES-256** pour les fichiers stockés. Notre infrastructure suit les normes de sécurité les plus élevées du secteur.

## Contrôles d'Accès

Nous fournissons des contrôles d'accès stricts pour que vous puissiez gérer qui voit et modifie votre contenu. Vos projets restent dans un espace de travail privé.

## Perspectives

Nous élargissons nos mesures de sécurité avec :

- **Authentification à deux facteurs (2FA)** — une couche supplémentaire de protection de connexion
- **Permissions avancées de fichiers** — un contrôle plus granulaire sur qui peut accéder à quoi
- **Partage de liens sécurisé** — un contrôle renforcé sur le contenu partagé

Avec notre application, vous pouvez vous concentrer sur votre travail créatif sans souci de sécurité. Des questions ? Contactez-nous via le Chat en Direct dans la section **OBTENIR DE L'AIDE**.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "writing-your-script-with-pzaz", "pzaz-101"],
  },
  {
    id: "gs-4",
    slug: "getting-started-with-workflows",
    title: "Premiers Pas avec les Workflows",
    category: "getting-started",
    content: `## Premiers Pas avec les Workflows

### Que sont les Workflows ?

Les workflows représentent des processus internes — une série d'étapes répétables nécessaires pour atteindre un résultat. Un workflow peut être aussi simple que "À faire > En cours > Terminé" ou plus complexe, comme les étapes d'un cycle de vente.

Les workflows sont visualisés sur des tableaux. Vous pouvez créer autant de tableaux que nécessaire, chacun représentant un processus différent (ex : Développement, Marketing, Recrutement). Vous créez un workflow en ajoutant des colonnes à un tableau. Les cartes sont glissées d'une colonne à l'autre au fur et à mesure de leur progression. Ce format est souvent appelé un **tableau Kanban**.

## Créer Votre Premier Workflow

Au démarrage, un tableau Kanban se charge avec une seule colonne, représentant le début de votre workflow — elle ne peut être ni supprimée ni renommée. Pour ajouter des colonnes, cliquez sur les trois points verticaux et sélectionnez **Ajouter un En-tête**.

Par exemple, un workflow de marketing de contenu pourrait inclure : Non assigné, Priorisé, Rédaction, Édition et Publié.

## Ajouter un Workflow Supplémentaire

Seul le propriétaire du Filmspace peut ajouter un nouveau workspace. Sélectionnez la section **'Gérer'** dans le menu latéral, puis **'+ Nouveau Workflow'**.

## Ajouter des Éléments de Travail

Pour créer des cartes, cliquez sur les trois points verticaux de n'importe quelle colonne et sélectionnez **Ajouter une Carte**. Chaque carte doit avoir un titre clair et descriptif. Vous pouvez documenter les cartes avec :

- Descriptions
- Dates d'échéance
- Pièces jointes (documents ou liens)
- Tâches et sous-tâches
- Assignation de membres d'équipe`,
    relatedSlugs: ["pzaz-101", "writing-your-script-with-pzaz", "book-a-personalised-product-demonstration"],
  },
  {
    id: "gs-5",
    slug: "pzaz-101",
    title: "Le Principe",
    category: "getting-started",
    content: `## Le Principe

## Introduction au "Principe"

Bienvenue sur notre plateforme, où la simplicité rencontre la puissance. Nous croyons que les outils doivent s'adapter à vous — et non l'inverse. C'est pourquoi nous avons construit notre plateforme sur le **Principe**, une philosophie UX conçue pour rendre facile pour quiconque de démarrer, développer ses capacités, collaborer et débloquer des fonctionnalités puissantes à son propre rythme.

### Qu'est-ce que le Principe ?

Le Principe repose sur trois idées fondamentales :

1. **La plateforme grandit avec vous :** C'est comme une toile vierge, prête pour n'importe quelle tâche ou projet. Les bases viennent naturellement et la maîtrise se fait de manière intuitive.
2. **Flexibilité type Lego :** Chaque fonctionnalité est construite avec des blocs simples et modulaires. Comme les briques Lego, ils s'assemblent facilement et vous permettent de construire n'importe quoi.
3. **Soutien là où ça compte :** L'IA n'est pas là pour remplacer votre créativité mais pour l'inspirer, la stimuler et la soutenir.

## Votre Toile : Objets et Cartes

Commencez avec une toile vierge où vous pouvez créer des **objets** pour suivre les tâches, projets, scénarios, fichiers, budgets et plus encore.

Chaque objet affiche des détails clés (comme les échéances et priorités). Ouvrez-le pour accéder à une **carte** — un espace personnalisable pour gérer tous les détails.

## Blocs : Construire Votre Workflow

Les cartes sont composées de blocs qui représentent des segments logiques d'information ou de fonctionnalités.

## Organiser Votre Travail

Chaque objet est regroupé dans une **catégorie**, commençant par la **Boîte de réception** par défaut. Vous pouvez créer autant de catégories que nécessaire.

Gérez votre travail avec :

- **Vue Liste** — Idéale pour trier par thèmes
- **Vue Tableau** — Suivre la progression par étapes`,
    relatedSlugs: ["getting-started-with-workflows", "writing-your-script-with-pzaz", "ai-security-and-privacy-at-pzaz"],
  },

  // Functions
  {
    id: "fn-1",
    slug: "pzaz-security-features",
    title: "Nos Fonctionnalités de Sécurité : Protéger Vos Données",
    category: "functions",
    content: `## Nos Fonctionnalités de Sécurité : Protéger Vos Données

Nous comprenons que la sécurité est une priorité absolue pour nos utilisateurs. Que vous collaboriez sur un scénario, partagiez des plans de production ou stockiez des détails sensibles de projet, vos données méritent le plus haut niveau de protection.

## Chiffrement : Protéger Vos Données Partout

Chaque fois que vous uploadez ou accédez à un fichier, il est protégé par le chiffrement. Pendant le transit, vos fichiers sont sécurisés avec **TLS**. Une fois stockés sur nos serveurs, vos données sont protégées avec le chiffrement **AES-256**.

## Contrôles d'Accès : Simplicité Gérée

Nous permettons aux administrateurs d'accorder ou de restreindre l'accès au stockage, garantissant que seuls les utilisateurs autorisés peuvent utiliser cette fonctionnalité. Nous travaillons à fournir un contrôle encore plus granulaire.

## Perspectives : Améliorations Futures

- **Authentification à deux facteurs (2FA)** — couche supplémentaire de protection de connexion
- **Contrôles d'accès améliorés** — permissions au niveau des fichiers
- **Options avancées de partage de liens** — protection par mot de passe et paramètres d'expiration

Nous ne sommes pas qu'un outil pour cinéastes — nous sommes un partenaire de confiance dans votre parcours créatif.`,
    relatedSlugs: ["card-anatomy", "delete-your-account", "get-support"],
  },
  {
    id: "fn-2",
    slug: "card-anatomy",
    title: "Anatomie d'une Carte",
    category: "functions",
    content: `## Anatomie d'une Carte

### De quoi sont composées les cartes ?

Avec les cartes dans l'outil, vous pouvez créer des workflows adaptés aux exigences uniques de la production cinématographique. Les cartes sont la fondation de cette plateforme — elles capturent des idées, documentent des tâches et exécutent des initiatives.

## Gérer les Cartes

Le conteneur de carte affiche des informations de haut niveau : titre, date d'échéance, membres d'équipe assignés, statut du workflow, taille de tâche et pièces jointes. Cliquer sur une carte ouvre ses détails.

Vous pouvez gérer plusieurs cartes en cochant les cases. Maintenez **CTRL** et cliquez sur une carte pour activer la case à cocher — une fois sélectionnées, vous pouvez filtrer, déplacer, refuser ou supprimer via la barre d'outils du tableau.

## #BonÀSavoir

Les blocs de cartes offrent de la flexibilité en vous permettant de personnaliser les cartes pour des besoins spécifiques. Certains blocs se chargent par défaut et le bloc description ne peut pas être supprimé.`,
    relatedSlugs: ["add-or-remove-blocks", "pzaz-security-features", "your-pzaz-profile"],
  },
  {
    id: "fn-3",
    slug: "delete-your-account",
    title: "Supprimer Votre Compte",
    category: "functions",
    content: `## Supprimer Votre Compte

Pour supprimer définitivement votre compte, veuillez contacter notre équipe via la page **Chat en Direct** de l'application, située dans la section **Obtenir de l'Aide**. Notre équipe traitera votre demande et supprimera votre compte de notre base de données de manière sécurisée.

Veuillez noter que nous sommes légalement tenus de conserver les informations financières, mais toutes les autres données seront définitivement effacées — cette action est irréversible.

Avant de procéder, nous vous encourageons à partager vos préoccupations ou commentaires. Nous sommes là pour garantir que votre expérience réponde à vos attentes.

> **Avertissement :** La suppression du compte est permanente et irréversible. Tous vos projets et données seront effacés.`,
    relatedSlugs: ["cancelling-or-closing-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-4",
    slug: "cancelling-or-closing-your-account",
    title: "Annulation ou Fermeture de Votre Compte",
    category: "functions",
    content: `## Annulation ou Fermeture de Votre Compte

Si vous souhaitez fermer votre compte, contactez notre équipe via la page **Chat en Direct** de l'application, située dans la section **Obtenir de l'Aide**. Nous vous assisterons dans le processus.

## Avant de Partir

Nous aimerions comprendre votre expérience et comment nous pouvons nous améliorer. Si quelque chose ne fonctionne pas pour vous, notre équipe de support est prête à vous aider — n'hésitez pas à nous contacter avant de prendre cette décision.

> **Note :** Si vous souhaitez uniquement annuler un abonnement plutôt que supprimer entièrement votre compte, notre équipe peut vous aider via le même canal de Chat en Direct.`,
    relatedSlugs: ["delete-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-5",
    slug: "your-pzaz-profile",
    title: "Votre Profil Pzaz",
    category: "functions",
    content: `## Votre Profil Pzaz

Votre profil est votre identité — prenez un moment pour le personnaliser. Mettre à jour vos informations ou ajouter un avatar créatif garantit que votre compte reflète votre style.

## Modifier Votre Profil

Pour modifier votre profil, cliquez sur l'icône du menu dans le coin inférieur gauche. De là, vous pouvez :

- **Changer votre nom d'utilisateur** — Comment votre nom apparaît aux collaborateurs
- **Mettre à jour votre adresse e-mail** — Gardez vos coordonnées à jour
- **Réinitialiser votre mot de passe** — Maintenez la sécurité du compte
- **Uploader une nouvelle photo de profil** — Ajoutez un avatar qui vous représente`,
    relatedSlugs: ["card-anatomy", "pzaz-security-features", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-6",
    slug: "add-or-remove-blocks",
    title: "Ajouter ou Supprimer des Blocs",
    category: "functions",
    content: `## Ajouter ou Supprimer des Blocs

**Personnalisez les Cartes pour une Flexibilité Maximale**

Vous pouvez personnaliser les cartes pour enrichir votre workflow de production en ajoutant ou supprimant des fonctionnalités.

## Comment Ça Marche

Tous les blocs ne sont pas compatibles avec chaque type de carte. Certains se chargent par défaut, d'autres doivent être ajoutés manuellement. Le titre et la description ne sont pas des blocs et ne peuvent donc pas être supprimés.

Cliquez sur l'**icône 'Blocs'** dans l'en-tête de la carte pour ajouter ou supprimer un bloc.

## Points Clés

- **Blocs par défaut** se chargent automatiquement à la création d'une carte
- **Blocs optionnels** peuvent être ajoutés manuellement
- **Le titre et la description** sont permanents et ne peuvent pas être supprimés
- La disponibilité des blocs varie selon le type de carte`,
    relatedSlugs: ["card-anatomy", "your-pzaz-profile", "pzaz-security-features"],
  },
  {
    id: "fn-7",
    slug: "leave-feedback",
    title: "Laisser un Commentaire",
    category: "functions",
    content: `## Laisser un Commentaire

**Aidez à Façonner l'Avenir**

Nous aimerions vous entendre ! Partagez vos impressions — ce que vous aimez, ce qui pourrait être amélioré et les nouvelles fonctionnalités que vous aimeriez voir.

## Comment Donner Votre Avis

Vos idées jouent un rôle crucial pour nous aider à prioriser les fonctionnalités et affiner la plateforme pour mieux servir la communauté cinématographique et créative.

Partagez vos réflexions via la page **Chat en Direct** de l'application, dans la section **Obtenir de l'Aide**.

Merci de nous aider à grandir !`,
    relatedSlugs: ["get-support", "reporting-a-bug", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-8",
    slug: "helpful-tools-for-capturing-screenshots-and-videos",
    title: "Outils Utiles pour Capturer des Captures d'Écran et Vidéos",
    category: "functions",
    content: `## Outils Utiles pour Capturer des Captures d'Écran et Vidéos

Si vous utilisez Google Chrome, nous recommandons l'extension **Nimbus Screen Shot and Video Recorder**. Cet outil vous permet de :

- Capturer des captures d'écran complètes ou partielles
- Enregistrer votre écran pour montrer le problème
- Éditer, annoter et sauvegarder vos captures ou enregistrements

Vous pouvez joindre ces fichiers à votre message de support pour une communication plus précise et une résolution plus rapide.

## Pourquoi C'est Utile

Fournir un contexte visuel — captures d'écran ou enregistrements d'écran — accélère considérablement notre capacité à diagnostiquer et résoudre les problèmes.

Notre équipe s'engage à vous offrir la meilleure expérience possible.`,
    relatedSlugs: ["reporting-a-bug", "get-support", "leave-feedback"],
  },
  {
    id: "fn-9",
    slug: "reporting-a-bug",
    title: "Signaler un Bug",
    category: "functions",
    content: `## Signaler un Bug

Si vous rencontrez un bug, veuillez fournir autant de détails que possible pour nous aider à diagnostiquer et résoudre le problème efficacement.

## Que Inclure

- **Une description détaillée** du bug
- **Comportement attendu vs réel** — ce que vous attendiez vs ce qui s'est passé
- **Étapes pour reproduire** — les étapes spécifiques qui ont déclenché le bug
- **Votre environnement** — l'appareil, le système d'exploitation et le navigateur
- **Captures d'écran ou vidéos** — toute capture pertinente

## Comment Signaler

Contactez notre équipe via la page **Chat en Direct** de l'application, dans la section **Obtenir de l'Aide**.

> Astuce : Utilisez l'extension Chrome Nimbus Screen Shot & Video Recorder pour capturer et annoter facilement.`,
    relatedSlugs: ["helpful-tools-for-capturing-screenshots-and-videos", "get-support", "leave-feedback"],
  },
  {
    id: "fn-10",
    slug: "get-support",
    title: "Obtenir du Support",
    category: "functions",
    content: `## Obtenir du Support

### Nous Sommes Là pour Vous Aider !

Un problème ou besoin de conseils ? Notre équipe est prête à vous assister.

## Comment Nous Contacter

Contactez notre équipe via la page **Chat en Direct** de l'application, dans la section **Obtenir de l'Aide**. Un membre de l'équipe répondra rapidement.

## Comment Nous Pouvons Vous Aider

- Problèmes techniques et bugs
- Questions de compte et facturation
- Conseils sur les fonctionnalités
- Commentaires et demandes de fonctionnalités
- Questions générales sur le produit`,
    relatedSlugs: ["reporting-a-bug", "leave-feedback", "helpful-tools-for-capturing-screenshots-and-videos"],
  },

  // Tools & Features
  {
    id: "tf-1",
    slug: "script-breakdown",
    title: "Dépouillement de Scénario",
    category: "tools-and-features",
    content: `## Dépouillement de Scénario

## Introduction

Nous sommes ravis de présenter la fonctionnalité **Dépouillement de Scénario** — un outil puissant conçu pour vous aider à préparer et planifier votre production cinématographique ou télévisuelle avec plus de détails que jamais.

Cette fonctionnalité vous permet d'utiliser votre scénario comme base pour organiser tout ce dont vous aurez besoin pour la production — des accessoires et costumes aux lieux et casting.

## Pour Commencer

Créez ou uploadez d'abord votre scénario. Une fois uploadé, votre scénario sera traité comme le **scénario maître** — seul celui-ci sera analysé pour le dépouillement.

L'application générera automatiquement une liste de toutes les scènes. Sélectionnez **Dépouillement** dans le menu de navigation.

## Fonctionnalités

- **Générer automatiquement une liste de scènes** à partir du scénario maître
- **Voir les métadonnées de scène** — présence des personnages et couverture
- **Taguer des éléments essentiels** — casting, accessoires, véhicules, costumes, cascades, effets spéciaux, etc.
- **Organiser avec des surlignages colorés** par catégorie
- **Rechercher et filtrer les éléments tagués**
- **Créer ou supprimer des catégories personnalisées**

## Taguer des Éléments dans Votre Scénario

1. Naviguez vers la section **Dépouillement** et sélectionnez la scène
2. Dans la vue focalisée, surlignez le mot ou la phrase à taguer
3. Un popup apparaîtra — choisissez la section et la catégorie
4. Cliquez **Taguer** — l'élément sera surligné avec un code couleur

## Et Ensuite

Après le taguage, tous les éléments pertinents apparaîtront automatiquement dans leurs sections respectives de l'application.`,
    relatedSlugs: ["scenes", "storyboard", "stripboard"],
  },
  {
    id: "tf-2",
    slug: "documents-section",
    title: "Section Documents",
    category: "tools-and-features",
    content: `## Section Documents

### Introduction

Nous avons réintroduit la section Documents suite aux retours de nos utilisateurs !

## Pour Commencer

La section Documents vous permet de créer un nombre illimité de livres et de pages. Chaque page doit être contenue dans un livre. Cliquez dans le champ de texte en haut de l'écran, entrez un titre et appuyez sur Entrée.

## Fonctionnalités

- Créez un nombre illimité de pages dans un nombre illimité de livres
- Formatez avec des en-têtes (H1–H6), puces, listes numérotées et hyperliens
- Organisez toute votre documentation de projet en un seul endroit
- Créez tout type de document — des traitements aux procédures sur le plateau

Pour toute assistance, contactez l'équipe de support via le Chat en Direct.`,
    relatedSlugs: ["your-filmspace", "manage-section", "card-blocks"],
  },
  {
    id: "tf-3",
    slug: "manage-section",
    title: "Section Gérer",
    category: "tools-and-features",
    content: `## Section Gérer

### Votre Tableau Personnel

Le tableau personnel est votre espace pour voir le travail et les tâches qui ne concernent que vous. Vous verrez deux types d'éléments :

1. **Todos** — tâches visibles uniquement par vous.
2. **Cartes de workflow** — si vous êtes propriétaire d'une carte de workflow ou y avez été ajouté, elle apparaîtra ici aussi.

Le tableau est divisé en deux sections — la boîte de réception (liste à gauche) et les colonnes du tableau (à droite). Vous pouvez glisser-déposer les todos ou cartes de la liste vers les colonnes.

Pour ajouter des colonnes supplémentaires, cliquez sur l'icône **"+"** en haut de n'importe quelle colonne.

## Tableau de Workflow

Le propriétaire du Filmspace peut créer autant de tableaux de workflow qu'il souhaite avec le bouton **"+ Nouveau Workflow"**.

Seules les cartes seront visibles sur un tableau de workflow, pas les todos personnels.`,
    relatedSlugs: ["board-views", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-4",
    slug: "shots",
    title: "Plans",
    category: "tools-and-features",
    content: `## Plans

### Planifiez et suivez tous les plans individuels de votre film.

La fonctionnalité Plans vous permet de décomposer chaque scène en plans de caméra spécifiques et de les organiser selon votre planning de tournage.

## Comment la Fonctionnalité Plans Peut-elle M'aider ?

En tant que producteur, réalisateur ou autre personne impliquée dans une production, vous pouvez être confiant que la fonctionnalité Plans vous permet d'enregistrer toutes les informations pertinentes — angles de caméra, mouvements requis, objectifs spécifiques, etc.

De plus, l'outil contient un **assistant IA** intégré qui peut automatiquement générer des images d'aperçu pour chacun de vos plans, basées sur les prompts que vous fournissez.

Vous pouvez soumettre des prompts 'positifs' et 'négatifs'. L'IA peut générer vos images dans différents styles — photographique, futuriste, anime, etc. !`,
    relatedSlugs: ["scenes", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-5",
    slug: "scenes",
    title: "Scènes",
    category: "tools-and-features",
    content: `## Scènes

### Organisez et gérez la structure narrative de votre film ; décomposez votre scénario en scènes et suivez leur progression pendant la production.

La fonctionnalité Scènes vous permet de diviser votre scénario en unités gérables et de suivre le statut de chaque scène tout au long du processus de production.

## Comment Ça Marche ?

- En entrant dans la section Scènes pour la première fois, sélectionnez un scénario dans le menu de gauche
- Une fois le scénario sélectionné, chaque scène génèrera un panneau
- Notre outil vous permet d'utiliser l'**Assistant IA** pour générer une image d'aperçu pour chaque scène
- Vous avez une grande flexibilité — vous pouvez générer des images dans de nombreux styles et fournir des prompts très variés. Vous pouvez aussi uploader vos propres images !`,
    relatedSlugs: ["shots", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-6",
    slug: "storyboard",
    title: "Storyboard",
    category: "tools-and-features",
    content: `## Storyboard

### Organisez et visualisez les moments clés et plans de votre film

La fonctionnalité Storyboard vous aide à planifier visuellement et organiser les scènes clés de votre film — décomposez chaque scène en plans individuels et représentez-les avec des images, dessins ou notes.

## Où le Trouver

Vous trouverez le **Storyboard** dans la section **"Pré-production"** du menu de navigation de gauche.

## Deux Façons de Créer Votre Storyboard

### 1. Auto-Génération à partir du Scénario Maître

Uploadez votre scénario et l'application extraira automatiquement vos scènes. Chaque scène devient son propre storyboard — prêt à ajouter des plans, angles de caméra et détails.

### 2. Construire de Zéro

Créez un storyboard personnalisé et ajoutez manuellement des scènes — idéal pour les projets expérimentaux ou documentaires.

## Ajoutez des Plans Détaillés à Chaque Scène

- Lieu et moment de la scène
- Dialogues des personnages
- Détails du plan (angle, mouvement, taille)
- Informations de caméra
- Timing
- Commentaires et notes`,
    relatedSlugs: ["scenes", "shots", "stripboard"],
  },
  {
    id: "tf-7",
    slug: "stripboard",
    title: "Stripboard",
    category: "tools-and-features",
    content: `## Stripboard

### Organisez et fluidifiez votre planning de production

La fonctionnalité Stripboard est conçue pour vous aider à gérer votre planning de tournage. Elle vous permet de décomposer votre scénario en scènes et de les organiser visuellement pour planifier chaque jour de tournage.

## Comment Utiliser le Stripboard Efficacement ?

Créez d'abord un scénario. Ouvrez la section Stripboard, sélectionnez un scénario existant dans le menu de gauche — vous verrez un dépouillement clair de chaque scène. Puis assignez des jours de tournage et des ressources.

Vous pouvez :

- Déplacer les scènes quand le planning change
- Surveiller la disponibilité de l'équipe et des lieux
- Suivre quelles scènes sont prêtes, en cours ou terminées
- Visualiser tout le flux de production du début à la fin`,
    relatedSlugs: ["call-sheets", "scenes", "storyboard"],
  },
  {
    id: "tf-8",
    slug: "call-sheets",
    title: "Feuilles de Service",
    category: "tools-and-features",
    content: `## Feuilles de Service

### Coordonnez et communiquez la logistique de votre tournage

La fonctionnalité Feuilles de Service vous permet d'organiser et distribuer les plannings quotidiens à votre équipe — tout le monde sait où être et quand.

## Comment Utiliser les Feuilles de Service ?

Commencez par planifier les jours de tournage et entrez les détails pertinents :

- Heure d'appel pour chaque membre d'équipe
- Informations de lieu
- Exigences spéciales du jour

Vous pouvez distribuer les feuilles de service par e-mail directement depuis la plateforme.

L'application permet de suivre la disponibilité de l'équipe et de gérer les changements. Les mises à jour en temps réel et les notifications instantanées sont disponibles.`,
    relatedSlugs: ["stripboard", "department", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-9",
    slug: "department",
    title: "Section Production",
    category: "tools-and-features",
    content: `## Section Production

### Gérez tous les aspects de votre processus de production dans un hub centralisé.

La section Production de l'application fournit des outils pour suivre tout ce dont vous avez besoin pour que votre production se déroule sans accroc.

## Que Contient cette Section ?

La section Production comprend : **Casting, Équipe, Lieux, Éléments et Équipements**.

## Comment la Section Production Peut-elle M'aider ?

De la coordination des tâches entre les équipes au suivi du statut des éléments de production — la fonctionnalité Production fournit tous les outils pour garder tout synchronisé.

Vous pouvez ajouter toutes les informations pertinentes :

- Détails financiers
- Détails de la société ou de l'agence
- Détails et adresses de prise en charge
- Commentaires illimités`,
    relatedSlugs: ["call-sheets", "script-breakdown", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-10",
    slug: "moodboard",
    title: "Moodboard",
    category: "tools-and-features",
    content: `## Moodboard

### Enregistrez vos idées pour le ton et le style de votre projet

La fonctionnalité **Moodboard** permet aux cinéastes de conceptualiser visuellement et communiquer l'esthétique et le ton de leurs projets — un outil créatif pour compiler images, palettes de couleurs et éléments de design.

## Que Pouvez-vous Faire ?

- **Compilation Visuelle** — Rassemblez et arrangez des éléments pour créer une représentation visuelle cohérente
- **Différents Types d'Éléments** — Ajoutez des images, des couleurs spécifiques (format RGBA) et des polices (format TTF)
- **Édition Collaborative** — Partagez les moodboards avec les membres de l'équipe pour une direction visuelle unifiée`,
    relatedSlugs: ["scenes", "storyboard", "documents-section"],
  },
  {
    id: "tf-11",
    slug: "team-chats",
    title: "Chats d'Équipe",
    category: "tools-and-features",
    content: `## Chats d'Équipe

### Améliorez la communication de votre projet avec les Chats d'Équipe

Une communication efficace est vitale en production cinématographique et vidéo. La fonctionnalité de messagerie offre des capacités de messagerie en temps réel, permettant une collaboration fluide entre les membres de l'équipe.

## Que Propose la Fonctionnalité Chat d'Équipe ?

- **Messagerie en Temps Réel** — Conversations instantanées pour résoudre les problèmes rapidement
- **Polyvalence** — Messagerie vocale, emojis et pièces jointes
- **Chats de Groupe** — Discussions entre plusieurs membres, départements ou groupes de projet
- **Intégration avec d'Autres Outils** — Hub de communication centralisé complémentaire à la gestion des tâches`,
    relatedSlugs: ["file-sharing-media-storage", "add-and-remove-team-members-filmspace", "your-filmspace"],
  },
  {
    id: "tf-12",
    slug: "file-sharing-media-storage",
    title: "Partage de Fichiers & Stockage Média",
    category: "tools-and-features",
    content: `## Partage de Fichiers & Stockage Média

### Simplifiez la gestion et le partage de vos fichiers et médias

Notre fonctionnalité **Drive** fournit un dépôt centralisé pour tous les documents et médias liés à la production.

## Fonctionnalités Détaillées

- **Stockage Centralisé** — Stockez scénarios, storyboards, plannings et documents essentiels en un seul endroit sécurisé
- **Intégrations Fluides** — L'application s'intègre avec Google Drive, Slack et Adobe Suite
- **Contrôle de Version** — Suivez les changements et maintenez l'historique des versions`,
    relatedSlugs: ["team-chats", "documents-section", "your-filmspace"],
  },
  {
    id: "tf-13",
    slug: "budgeting",
    title: "Budget",
    category: "tools-and-features",
    content: `## Budget

**Comment Fonctionne le Budget dans l'Application ?**

Notre application offre un outil de budgétisation automatisé conçu pour simplifier la planification financière des productions cinématographiques et vidéo. En intégrant le budget directement avec l'écriture de scénario, les dépouillements et la planification.

## Que Signifie 'Au-dessus' et 'En-dessous' de la Ligne ?

- **Coûts Au-dessus de la Ligne (ATL)** — Coûts fixes et initiaux associés aux rôles créatifs et décisionnels (scénaristes, réalisateurs, producteurs)
- **Coûts En-dessous de la Ligne (BTL)** — Dépenses variables de production (salaires d'équipe, location d'équipement, frais de location)

L'application vous permet de voir les coûts ATL ou BTL séparément ou combinés.

## Fonctionnalités Clés de l'Outil Budget

- **Menu de Gauche** — Catégories : Au-dessus de la Ligne, En-dessous de la Ligne, et Vue Budget Combinée
- **Panneau de Droite** — Tous les postes budgétaires, avec sélection de devise flexible (Euros, Livres, Dollars)
- **Montant total** affiché en haut à droite

## Ajouter et Gérer les Postes Budgétaires

Cliquez sur le bouton violet, sélectionnez le type, entrez le nom et appuyez sur Entrée.

## Exporter Votre Budget

Exportez en **PDF** ou **Excel (.xls)**.`,
    relatedSlugs: ["department", "script-breakdown", "your-filmspace"],
  },
  {
    id: "tf-14",
    slug: "board-views",
    title: "Vues de Tableau",
    category: "tools-and-features",
    content: `## Vues de Tableau

### Que sont les Tableaux ?

Les tableaux de workflow offrent une vue hybride — une liste d'éléments à gauche et une vue en colonnes à droite. Vous pouvez facilement déplacer les Todos et Cartes entre ces deux sections.

## Gestion Flexible des Workflows

La vue en colonnes s'organise en colonnes verticales représentant les étapes du workflow. Les cartes peuvent être déplacées entre les colonnes au fur et à mesure de leur progression. Vous pouvez facilement ajouter, supprimer et renommer ces colonnes.

Par exemple, vous pourriez les nommer "Pré-Production" ou "Revue" — ou simplement "À faire", "En cours" et "Terminé".`,
    relatedSlugs: ["manage-section", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-15",
    slug: "add-and-remove-team-members-filmspace",
    title: "Ajouter et Supprimer des Membres d'Équipe – Filmspace",
    category: "tools-and-features",
    content: `## Ajouter et Supprimer des Membres d'Équipe – Filmspace

Invitez des personnes à rejoindre votre équipe ou ajoutez des collaborateurs à votre Filmspace pour collaborer sur vos projets créatifs.

## Ajouter des Membres d'Équipe

Naviguez vers **Profil et Paramètres** et cliquez **Inviter des Membres**. Entrez le nom et l'adresse e-mail, ajoutez éventuellement une note personnelle, et cliquez **Envoyer l'Invitation**. Une fois acceptée, la personne accédera à votre Filmspace.

## Supprimer des Membres d'Équipe

Ouvrez **Paramètres**. Cliquez sur l'**icône Plus d'Options (trois points)** à côté du membre et confirmez.

## #BonÀSavoir

Seuls les **Propriétaires de Filmspace** peuvent ajouter ou supprimer des membres d'équipe.`,
    relatedSlugs: ["roles-permissions-in-pzaz", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-16",
    slug: "roles-permissions-in-pzaz",
    title: "Rôles & Permissions dans Pzaz",
    category: "tools-and-features",
    content: `## Rôles & Permissions dans Pzaz

### Rôles & Permissions Mis à Jour

Chaque membre de Filmspace a un rôle avec des permissions spécifiques. Il y a cinq rôles principaux :

1. **Propriétaire du Filmspace** — Contrôle total sur le Filmspace, la facturation et tous les paramètres
2. **Administrateur du Filmspace** — Peut partager les tâches administratives
3. **Responsable Créatif** — Focalisé sur la direction créative et les décisions éditoriales
4. **Membre d'Équipe** — Accès de travail complet ; peut créer son propre Filmspace
5. **Collaborateur** — Accès minimal, spécifique aux tâches assignées, sans siège payant

## Personnaliser les Rôles

Vous pouvez personnaliser les permissions de tous les rôles sauf le Propriétaire du Filmspace.

Les Collaborateurs sont uniques — leurs permissions sont toujours minimales et spécifiques.

## Sièges et Accès

Les quatre premiers rôles ont des **sièges payants**. Les Collaborateurs n'occupent pas de sièges payants.

## #BonÀSavoir

Les rôles et permissions sont conçus pour favoriser la collaboration tout en maintenant des limites claires.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-17",
    slug: "personal-to-dos",
    title: "Todos Personnels",
    category: "tools-and-features",
    content: `## Todos Personnels

### Quelle est la Différence entre une Carte et un Todo ?

Un **todo** n'est visible que par l'utilisateur qui l'a créé. En revanche, une **carte** est visible par tous les membres du tableau.

## Que sont les Todos Personnels ?

Gardez le contrôle de vos priorités avec les Todos Personnels. Ce sont des éléments privés, visibles uniquement par vous, accessibles via la Boîte de réception.

## La Boîte de Réception — Votre Outil Puissant

Quel que soit le nombre de projets de films que vous gérez — tout est consolidé dans votre Boîte de réception.

Elle affiche une vue hybride — une liste à gauche et autant de colonnes que vous souhaitez à droite. Les éléments archivés sont stockés dans une section Archive dédiée.

## Gérer les Todos Personnels

- Ajoutez des notes, dates d'échéance ou pièces jointes à chaque tâche
- Priorisez en les marquant ou en les déplaçant entre les étapes
- Convertissez les Todos en cartes partagées

## #BonÀSavoir

Vos Todos sont plus que des rappels — ils font partie d'une boîte à outils rationalisée pour soutenir votre processus créatif.`,
    relatedSlugs: ["manage-section", "board-views", "card-blocks"],
  },
  {
    id: "tf-18",
    slug: "card-blocks",
    title: "Blocs de Carte",
    category: "tools-and-features",
    content: `## Blocs de Carte

### Que sont les Blocs ?

Les blocs sont des composants modulaires que vous pouvez ajouter ou supprimer des cartes pour les adapter à vos besoins. Chaque bloc fournit une fonctionnalité unique — rendant les cartes adaptables à différentes tâches et workflows.

Par exemple, le bloc description permet d'ajouter des informations détaillées, tandis que d'autres comme les checklists ou dates d'échéance permettent le suivi des tâches et la gestion des délais.

## Pourquoi les Blocs sont Importants

Les blocs aident à personnaliser les cartes selon les besoins de votre projet :

- Flexibilité pour adapter les cartes aux différentes étapes de la production
- Amélioration de la collaboration avec commentaires et pièces jointes
- Outils et informations facilement accessibles

L'ajout ou la suppression de blocs est simple via le panneau **'Ajouter/Supprimer des Blocs'** dans l'en-tête de la carte.

## #BonÀSavoir

Certains blocs se chargent par défaut, d'autres sont optionnels. Sauf le **bloc Description**, tous les blocs peuvent être supprimés — les cartes sont entièrement personnalisables.`,
    relatedSlugs: ["card-anatomy", "add-or-remove-blocks", "personal-to-dos"],
  },
  {
    id: "tf-19",
    slug: "your-filmspace",
    title: "Votre Filmspace",
    category: "tools-and-features",
    content: `## Votre Filmspace

### Qu'est-ce qu'un Filmspace ?

Le Filmspace est votre espace de travail tout-en-un, conçu spécifiquement pour les cinéastes, créateurs vidéo et équipes de production. C'est là que vous pouvez développer et affiner vos idées, prioriser vos projets, planifier et exécuter des workflows de production, et favoriser une collaboration fluide au sein de votre équipe.

## Votre Hub Créatif

Contrairement aux outils de gestion de projet standards, un Filmspace est construit spécifiquement pour l'industrie du film et de la vidéo — combinant des outils de workflow puissants pour fluidifier chaque étape du processus de production.

- **Un Filmspace** est idéal pour les petits et moyens projets
- **Plusieurs Filmspaces** conviennent aux grandes équipes gérant différents projets, clients ou visions créatives

## #BonÀSavoir

Vous ne suivez pas juste des tâches — vous gérez l'ensemble du parcours créatif, de la pré-production à la livraison finale.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "roles-permissions-in-pzaz", "manage-section"],
  },
];

export const kbCategoriesFr = [
  {
    id: "getting-started",
    title: "Pour Commencer",
    description: "Tout ce que vous devez savoir pour démarrer avec Pzaz.",
    icon: "🚀",
  },
  {
    id: "functions",
    title: "Fonctions",
    description: "Découvrez les fonctions IA de Pzaz et comment les utiliser.",
    icon: "⚡",
  },
  {
    id: "tools-and-features",
    title: "Outils & Fonctionnalités",
    description: "Guides détaillés de chaque outil de production disponible dans votre espace de travail.",
    icon: "🛠️",
  },
] as const;
