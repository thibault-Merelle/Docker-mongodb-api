FROM mongo

WORKDIR /data

CMD ["mongod"]

COPY init.sh /docker-entrypoint-initdb.d
COPY users.json /docker-entrypoint-initdb.d

EXPOSE 27017
