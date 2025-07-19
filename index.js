// const express = require("express");
// const mongoose = require('mongoose');
// const app = express();
// const config = require("config");
// const cors = require('cors');
// require('dotenv').config()
// const helmet = require("helmet");
// const compression = require("compression");
// const cloudinary = require('cloudinary').v2;




// mongoose.connect('mongodb+srv://bolajiakanji21:dsoQ40Z0wLpz5UTq@cluster0.uwhsgsd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//   .then(() => console.log('connected to mongoDB...'))
//   .catch(err => console.error('Could not connect to mongoDB...', err)) 

// app.use(cors())
// app.use(express.static("public"));
// app.use(express.json());
// app.use(helmet());
// app.use(compression());



//   //const port = process.env.PORT || config.get("port");
//   const port = process.env.PORT || 3000;
// //https://borji-backend-6.onrender.com
  
// app.listen(port, function() {
//   console.log(`Server started on port ${port}...`);
// });
const express = require("express");
const categories = require("./routes/categories");
const listings = require("./routes/listings");
const listing = require("./routes/listing");
const users = require("./routes/users");
const userListings = require("./routes/userListings");
const contacts = require("./routes/contact");
const comments = require("./routes/comments");
const likes = require("./routes/likes");
const user = require("./routes/user");
const auth = require("./routes/auth");
const my = require("./routes/my");
const profileImage = require("./routes/profileImage");
//const messages = require("./routes/messages");
//const expoPushTokens = require("./routes/expoPushTokens");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});


mongoose.connect('mongodb+srv://bolajiakanji21:dsoQ40Z0wLpz5UTq@cluster0.uwhsgsd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
   { ignoreUndefined: true})
  .then(() => console.log('connected to mongoDB...'))
  .catch(err => console.error('Could not connect to mongoDB...dsoQ40Z0wLpz5UTq', err)) 

app.use(cors())
app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use((x,y,z) => {
  console.log('nextnextnnext')
  z()
});


app.get('/api/ok', (req, res) => {
  console.log('ok')
  res.send('ok')
})

app.use("/api/categories", categories);
app.use("/api/listing", listing);
app.use("/api/listings", listings);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/mk", userListings);
app.use("/api/contacts", contacts);
app.use("/api/comments", comments);
app.use("/api/likes", likes);
app.use("/api/profileImage", profileImage);
app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/expoPushTokens", expoPushTokens);
app.use("/api/messages", messages);

const port = process.env.PORT || config.get("port");
app.listen(port, function() {
  console.log(`Server started on port ${port}...`);
});
