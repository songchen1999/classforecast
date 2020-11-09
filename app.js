const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 5000;
require('dotenv').config();
const mongoURI = process.env.MONGOURL;

mongoose.connect(mongoURI,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
const Course = require('./models/Course');


// testing 
app.get('/',(req,res)=>{
  res.send('Running');
})

app.get('/instructors', (req, res) => {
  res.send('instructors')
})

app.get('/courses',(req,res)=>{
  Course.find({}).then(
    a=>{
      res.send(a);
    }).catch((e)=>{
      res.send(e);
    })
  
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})