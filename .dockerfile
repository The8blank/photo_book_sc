# Utilisez l'image Node.js 14.x la plus récente comme image parent
FROM node:14

# Définit le répertoire de travail de l'application à /app
WORKDIR /app

# Copie le contenu de votre application dans l'image Docker
COPY ./dist .

# Installez le serveur web HTTP Simple à partir de NPM
RUN npm install http-server -g

# Exposez le port sur lequel l'application écoute
EXPOSE 8080

# Démarrez le serveur web HTTP Simple pour servir le contenu de /dist
CMD ["http-server", "-p", "8080", "-c-1", "."]
