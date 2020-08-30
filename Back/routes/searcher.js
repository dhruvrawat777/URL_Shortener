const express=require('express');
const url = require('url');
const db = require('../database/db');
const db_functions = require('../database/db_functions');
const router=express.Router();

router.get('/*',(req,res,next)=>{
    console.log("Searching");
    console.log(req.originalUrl);
    let keypath=req.originalUrl.substring(3);
   console.log(keypath);
   db_functions.find(keypath)
        .then(()=>{
            console.log("found");
            res.send('hi');
        })
        .catch((error)=>{
            console.log("Nein");
            res.send("Not found");
        })
       ;
    //res.redirect(finalurl);
    
});

module.exports=router;