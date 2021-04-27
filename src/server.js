const express = require('express')
const app = express()
//const users = require('../data/users.json')

const MongoClient = require('mongodb').MongoClient;

// connection Url:
const user = process.env.MONGO_INITDB_ROOT_USERNAME
const pwd = process.env.MONGO_INITDB_ROOT_PASSWORD

const url = `${user}:${pwd}@mongodb://mongo:27017`; 

// def data base to connect with :
const dbName = 'usersApi';

 
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  const db = client.db(dbName);
});


app.use(express.json())

app.get('/users', async (req,res) => {
    try {
        const docs = await db.collection('users').find({}).toArray()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.get('/users/:id', async (req,res) => {
    const id = parseInt(req.params.id)
    try {
        const docs = await db.collection('users').find({id}).toArray()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.listen(3000, () => {
    console.log("Server listening !")
})