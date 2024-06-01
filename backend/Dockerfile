# Dockerfile for backend server
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the port
EXPOSE 5000

# Run the server
CMD ["node", "server.js"]