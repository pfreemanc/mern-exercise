const express = require('express')
const cors = require('cors')
// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const uri = process.env.ATLAS_URI;
// const uri = "mongodb+srv://dbAdmin:Taako5569@cluster0.ul6bu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
console.log(uri);

  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,
  useUnifiedTopology: true }
  );


const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully.');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})