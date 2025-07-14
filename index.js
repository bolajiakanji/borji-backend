const express = require("express");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bolajiakanji21:dsoQ40Z0wLpz5UTq@cluster0.uwhsgsd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('connected to mongoDB...'))
  .catch(err => console.error('Could not connect to mongoDB...', err)) 
