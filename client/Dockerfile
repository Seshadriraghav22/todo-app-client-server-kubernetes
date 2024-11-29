FROM node:alpine as todo-app-build

WORKDIR /client

COPY package.json yarn.lock README.md ./

RUN yarn

COPY ./public ./public

COPY ./src ./src

# Set the legacy OpenSSL provider to avoid Node.js crypto issues
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the application
RUN yarn build

FROM nginx:latest

LABEL maintainer=Aamir-Pinger

# Copy the built React app from the build stage to Nginx's web directory
COPY --from=todo-app-build /client/build/ /usr/share/nginx/html

EXPOSE 80
