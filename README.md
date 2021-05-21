# Créer un projet
Pour créer un projet, ouvrir le dossier choisi dans visual code, ouvrir l'invite de commande, et lancer la commande "ng new NomDuPorjet"
quand fini, fermer visual code, se redéplacer dans le dossier qu'il a créé, et relancer visual studio code dessus, rouvrir le console, et pour démarrer le projet, ng serve --port 4200 par exemple
# Demarrer

Pour démarrer cette démo vous devrez impérativement avoir angular installer par le NPM
et lancer la commande suivante `npm install`

## Development server

Run `ng serve` va démarrer le serveur sur le port 4200 par défaut
Run `ng serve --port 4200` va démarrer le serveur en forcant sur le port 4200, on peux donc le changer
## Code scaffolding

Pour creér un compo, on utilise la commande `ng g path/path/componame`
qui est l'abréviation de angular generate component

Pour créer un pipe custom, on utilise la commande `ng g p path/path/pipeName`

Pour créer une directive custom, on utilise la commande `ng g d path/path/DirectiveName`

Pour créer un service, on utilise la commande `ng g s path/path/ServiceName`
->attention il faut le rajouter dans le app.module.ts dans les provider

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Exos 1
Créer ou reprendre l'app que nous avons faite,
créer un parent (app.routing) nommé exos
et créer un compo children exos1

Créer de base une page prévue pour la 404 si ce n'est pas fait

dans le compo exos/exos1
-> réaliser une page permettant lors d'un clic,
de calculer la suite de fibonacci

réaliser un deuxième bouton, qui permettra de sauvegarder
dans un simple array, les différents résultat.

en gros, un bouton pour voyager dans la suite de fibo
et un bouton pour save une des valeurs voulue.
réaliser simplement l'affichage de la DERNIERE value.


## Exos 2 : Les pipes customs
Créer un compo exos 2
Dans se compo, créer un pipe, que vous nommerez convertTime
ce pipe devra, sans fonctions !!!javascript!!!,
Convertir un nombre entier ! en jour(S) heure(S) minute(S) seconde(S)
et le retourner pour l'affichage
Pour créer un pipe : ng g p path/NomPipe -> ng generate pipe path/NomPipe


## Exos 3 : Les panier
Créer un compo exos 3
Dans ce compo, se retrouver deux colonnes, la première avec une input simple,
ce input permettra l'ajout d'un article dans le panier, 
la colonne de droite quant à elle permettra l'affichage du contenu de ce panier,
chaque élement de ce panier pour être supprimé.

BONUS 1 : l'affichage des contenu sera suffisamement dynamique pour n'afficher 
que les colonnes ou infos si elles existent.
BONUS 2 : votre panier permettra de gérer des quantités également.
BONUS 3 : votre panier permettra de gérer une valeur UNITAIRE de ces article et donc d'afficher un total HTVA et TVAC également.

## Exos 4 : les Services
Reprennez les exos 2 et 3 et transformer les pour avoir un services dans chaque ! 
seule condition : analisez les deux exos -> déterminer le plus opportun à avoir l'approche private ou public.

## Exos 5 : Les promesses
Créer un compo exos 5
ce compo devra tout simplement faire 3 appel de promesse au choix (différentes !!!), comme vu dans la demo,
Attention, ne pas copier coller c'est ridicule.
Promesse 1 : parle de sauvegarde de donnée bancaire.
Promesse 2 : parle de skynautique.
Promesse 3 : parle de commande de matériel informatique.

## Exos 6 : Les reactives forms
Créer un formulaire reactif sur base de => 
    nom de la ville  : -> 3 char min -> 20 char max -> requis
    nom des habitant : -> 5 char min -> 30 char max -> requis
    nombre d'hab     : -> 100 min -> 1000000 max -> requis
    langue parlée[]  : -> requis
    superficie km²   : -> 7 min -> 150 max -> requis
## Exos 7 : Les validators custom
Rajouter des validateurs custom => devra vérifier que la ville ne contient pas de chiffre et de caractères spéciaux :)
## Exos 8-9 : Les Call API externe & Les validators async custom
Créer un select sur les pays exsitant -> pour choisir la ou l'on veux créer notre ville
Rajouter des validateurs async custom - > aller chercher les nombres d'habitant et la superficie, 
-> calculer ensuite le total hab et le total superficie 









## Liens utiles
Listes de pipes générique Angular : https://angular.io/api?type=pipe