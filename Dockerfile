FROM node:8
RUN mkdir /Q-hiring-hapi
WORKDIR /Q-hiring-hapi
ADD . /Q-hiring-hapi
ARG NODE_ENV=production
ENV NODE_ENV=production
RUN npm --version
RUN npm install
CMD npm install -g sequelize-cli && sequelize db:create && sequelize db:migrate && npm start
EXPOSE 3001