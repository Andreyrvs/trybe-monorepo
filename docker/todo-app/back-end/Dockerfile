FROM node:14-alpine AS todobackend
WORKDIR /docker/todo-app/back-end
COPY package*.json ./
ADD  node_modules.tar.gz ./
RUN npm install
EXPOSE 3001
COPY . .
CMD [ "npm", "start" ]