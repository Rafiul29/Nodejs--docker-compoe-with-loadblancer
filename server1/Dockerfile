FROM node:alpine3.14
WORKDIR /src/app
COPY ./package.json /src/app/package.json
RUN npm install
COPY . /src/app/
EXPOSE  4000
CMD ["node","server.js"]
