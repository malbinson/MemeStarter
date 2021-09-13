const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', ejs)
app.use(express.static("public"))
app.use(require('./routes'));

//add the db Connect String from doc here


//*********


app.listen(3000, () => {
  console.log('server started');
});