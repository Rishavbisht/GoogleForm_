const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const formRoutes = require('./routes/formRoutes');


mongoose.connect('mongodb://127.0.0.1:27017/googleform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
  
  app.use('/api/form', formRoutes);


app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});


// const  express= rquire('express');
// const cors= require('cors');
// const bodyParser= require ('body-parser');
// const mongoose= reuire('moongoose');


// // app initilissation

// const app=express();

// //middleware setup

// app.use(cors());   /// ka matlab hai: server ko batao ki har request pe yeh cheezein chalayega:

// app.use(bodyParser.json());  

// // cors() = dusre server se request allow karta hai (like frontend port 3000 → backend port 5000)

// // json formot m data ata h like name; rishav 

// // mongo db connection 

// mongoose.connect('mongodb://127.0.0.1:27017/mygoogleform',{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// // if mongfdb connect then it shows message otherwise error 

// .then(()=> console.log('MongoDB connected'))
// .catch(err=>console.error(err));

// // server start 
// app.listen(5000,()=>{
//   console.log('server running on http://localhost:5000');
// });