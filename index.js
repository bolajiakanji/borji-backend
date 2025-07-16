const express = require("express");
const mongoose = require('mongoose');
const app = express();
const config = require("config");



mongoose.connect('mongodb+srv://bolajiakanji21:dsoQ40Z0wLpz5UTq@cluster0.uwhsgsd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('connected to mongoDB...'))
  .catch(err => console.error('Could not connect to mongoDB...', err)) 


  //const port = process.env.PORT || config.get("port");
  const port = process.env.PORT || 3000;
//https://borji-backend-6.onrender.com
  
app.listen(port, function() {
  console.log(`Server started on port ${port}...`);
});
