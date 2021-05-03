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

## Liens utiles
Listes de pipes générique Angular : https://angular.io/api?type=pipe