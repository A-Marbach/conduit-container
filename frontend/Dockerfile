# Build Stage
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine
COPY --from=build /app/dist/angular-conduit /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]