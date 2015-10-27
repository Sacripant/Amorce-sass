# Amorce-sass

Amorce-sass est un starter kit pour l'intégration de site internet.
Il est une version adapté du starter kit Amorce pour fontionner avec Sass.
Il propose :

* Un Framework CSS (reset, typo, forms, utils, grid)
* Une documentation qu'il suffit de faire évoluer en style guide pour chaque projet.
* Une série de task grunt
	* Sass
	* nunjucks
	* svgmin
	* webfont
	* modernizr
	* autoprefixer

## Requiremement

Le projet le *task runner* [GRUNT](http://gruntjs.com/).
*Grunt* necessite [nodeJS](https://nodejs.org/)

* NodeJS >= 0.8.0
* Grunt-cli

Pour plus de détails pour l'installation sur votre machine : [Grunt getting started](http://gruntjs.com/getting-started)

Cette version necessite aussi [Ruby & Sass](http://sass-lang.com/install) comme pré-requis

## Getting strated

Depuis un shell ou une console (placé à la racine de votre projet).

`npm install`

Pour installer les paquets necessaires.

`grunt init`

Pour faire une compilation manuelle des sources.

## Compiler à la volée

`grunt`

La commande `grunt` est paramétrée pour lancer un *watcher* sur les fichiers sources. Ainsi à chaque modification d'un fichier source html ou css, les fichiers seront compilés.

De plus un serveur [livereload](http://livereload.com) est également lancé permettant de rafraichir votre browser à chaque modification.
Pour en profiter, il suffit d'installer l'[extension Livereload](http://livereload.com/extensions/) correspondant à votre navigateur.


## Commandes de compilation manuelles

`grunt buildcss`

Compile les fichiers SCSS et préfixe les CSS compilés.

`grunt icons`

Compile les fichiers .svg présents dans `src/static/img/icons/`: optimisations des images et génération d'une font icons. Cette tache utilise [grunt webfont](https://github.com/sapegin/grunt-webfont) et necessite d'installer `ttfautohint`.

`grunt nunjucks`

Compile les fichiers sources `.html` qui utilise le sytem de templating [nunjucks](http://mozilla.github.io/nunjucks/)

`grunt modernizr`

Inspecte les fichiers CSS et JS du projet et compile un fichier `modernizr-custom.js` sur mesure.

Pour plus de précision, vous pouvez inspecter les fichiers `package.json` et `gruntfile.js`.


## Documentation


Un style guide `docs/index.html` présentant le framework CSS utilisé et les modules developpés disponibles.
C'est un bon point de départ pour comprendre la nomenclature employée et réutiliser les modules développées.













