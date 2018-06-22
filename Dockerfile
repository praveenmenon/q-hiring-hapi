FROM node:8
RUN mkdir /Q-hiring-hapi
WORKDIR /Q-hiring-hapi
ADD . /Q-hiring-hapi
RUN npm --version
RUN npm install
CMD npm start
EXPOSE 3001
