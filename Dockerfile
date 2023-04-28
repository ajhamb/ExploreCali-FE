#stage 1
FROM node:latest as node
WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN npm install -g clean-css-cli
COPY . .
#RUN npm run build --prod && npm install -g clean-css-cli && clean-css -o dist/styles.min.css dist/styles.css
RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/explorecali-fe-app /usr/share/nginx/html
