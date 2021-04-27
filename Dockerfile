FROM node:14

WORKDIR /app


COPY . .

RUN npm cache clean
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]