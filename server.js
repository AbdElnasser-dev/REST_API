require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const productRouter  = require('./routes/productRouter');



const app = express();
app.use(express.json())
app.use('/api/product',productRouter)

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log("server is lisenign on port 5000"))

//connect to mongodb
const URL = process.env.MNGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true
},err=>{
    if(err) throw err;
    console.log("Connected Succefully")
})