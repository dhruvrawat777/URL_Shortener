const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
const shortrouter=require('./routes/shortener.js');
const searcher=require('./routes/searcher');
const db=require('./database/db');


app.use(cors());
//app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use((req,res,next)=>{
    
    console.log('in main');
    next();
});
app.use('/',searcher);
app.use('/',shortrouter);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Not found</h1>');
});

app.listen(5000);
//app.listen(process.env.PORT||5000);