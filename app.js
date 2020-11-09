const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 5000;
require('dotenv').config();
const mongoURI = process.env.MONGOURL;

mongoose.connect(mongoURI,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
// testing 
app.get('/instructors', (req, res) => {
  res.send('instructors')
})

app.get('/courses',(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})