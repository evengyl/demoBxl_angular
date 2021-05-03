# Demarrer

Pour démarrer cette démo vous devrez impérativement avoir angular installer par le NPM
et lancer la commande suivante `npm install`

## Development server

Run `ng serve` va démarrer le serveur sur le port 4200 par défaut
Run `ng serve --port 4200` va démarrer le serveur en forcant sur le port 4200, on peux donc le changer
## Code scaffolding

Pour creér un compo, on utilise la commande `ng g cpath/path/componame`
qui est l'abréviation de angular generate component

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