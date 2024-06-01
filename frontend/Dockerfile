# Definiše osnovnu sliku koja se koristi za izgradnju Docker slike
FROM node:latest

# Postavlja radni direktorijum unutar kontejnera
WORKDIR /usr/src/app

# Kopira package.json i package-lock.json (ako postoji) u trenutni radni direktorijum
COPY package*.json ./

# Instalira zavisnosti (potrebne pakete)
RUN npm install

# Kopira sve fajlove u trenutni radni direktorijum
COPY . .

# Informiše Docker da kontejner koristi port 3000 za aplikaciju koja se pokreće unutar njega.
EXPOSE 3000

# Izvršava npm start komandu za pokretanje aplikacije
CMD ["npm", "start"]