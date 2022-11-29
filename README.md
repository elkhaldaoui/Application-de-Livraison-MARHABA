# 🔥OUSSAMA ELKHALDAOUI [LIVRAISON-MARHABA]🔥
------------------------------------- Dockerisation De Projet ------------------------ <br>
Étape 1 : Installer Docker sur Windows.<br>
Étape 2 : Installer Wsl app.<br>
Étape 3 : Installer Ubuntu.<br>

<!-- Les étapes pour back-end -->
Étape 4-1 : Créer un Dockerfile.<br>
    (
        FROM node:16
        WORKDIR /app
        COPY package.json .
        RUN npm install
        COPY . .
        EXPOSE 5000 || 5005
        CMD ["npm", "start"]
    ).<br>
Étape 4-2 : Créer un network, et lui donner le nom de livraison-marhaba-back-end-net.<br>
(docker network create livraison-marhaba-back-end-net).<br>

Étape 4-3 : Executez un container basé sur l'image mongo, nommez-le livraison-marhaba-back-end-db et faites-le utiliser avec le network livraison-marhaba-back-end-net.<br>
(docker container run -d --name livraison-marhaba-back-end-db -v livraison-marhaba-back-end-db:/data/db --network livraison-marhaba-back-end-net mongo).<br>

Étape 4-4 : Entrer dans le dossier du serveur où se trouver Dockerfile et creer cette image et nommez-la livraison-marhaba-back-end-docker:test et faire un build.
(docker build -t livraison-marhaba-back-end-docker:test .).<br>

Étape 4-5 : Exécutez un container basé sur cette image que vous venez de créer, nommez-le livraison-marhaba-back-end et faites-le utiliser avec le network livraison-marhaba-back-end-net.
(docker container run -d --name livraison-marhaba-back-end -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-back-end-net -p 9000:9000 livraison-marhaba-back-end-docker:test).<br>

<!-- Les étapes pour front-end -->
Étape 5-1 : Créer un Dockerfile.<br>
    (
        FROM node:16
        WORKDIR /views
        COPY package.json .
        RUN npm install
        COPY . ./
        EXPOSE 3000
        CMD ["npm", "start"]
    ).<br>

Étape 5-2 : Créer un network, et lui donner le nom de livraison-marhaba-front-end-net.
(docker network create livraison-marhaba-front-end-net).<br>

Étape 5-1 : Entrer dans le dossier du serveur où se trouver Dockerfile et creer cette image et nommez-la livraison-marhaba-front-end-docker:test et faire un build.
(docker build -t livraison-marhaba-front-end-docker:test .).<br>

Étape 5-2 : Exécutez un container basé sur cette image que vous venez de créer, nommez-le livraison-marhabafront-end- et faites-le utiliser avec le network livraison-marhabafront-end--net.
(docker container run -d --name livraison-marhaba-front-end- -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-app-backend -p 3000:3000 livraison-marhaba-front-end-docker:test).<br>
