FROM node:8
RUN mkdir /Q-hiring-hapi
WORKDIR /Q-hiring-hapi
ADD . /Q-hiring-hapi
ARG NODE_ENV=production
ENV NODE_ENV=production
RUN npm --version
RUN npm install
EXPOSE 3001