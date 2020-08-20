const express=require('express');
const app=express();

const router=require('./routes/shortener.js');

app.use('/',router);

app.listen(process.env.PORT||5000);