FROM node:8
RUN mkdir /Q-hiring-hapi
WORKDIR /Q-hiring-hapi
ADD . /Q-hiring-hapi
RUN npm --version
RUN npm install -g sequelize-cli
RUN npm install
EXPOSE 3001