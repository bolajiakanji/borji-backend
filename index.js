const express = require("express");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/borjiNew', { ignoreUndefined: true})
  .then(() => console.log('connected to mongoDB...'))
  .catch(err => console.error('Could not connect to mongoDB...', err)) 
