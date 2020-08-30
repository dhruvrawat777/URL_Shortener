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
        .then((val)=>{
            console.log("found");
            console.log(val.longg);
            var x=(val[0][0].longg);
            res.redirect(x);
        })
        .catch((error)=>{
            console.log("Nein");
            console.log(error);
            res.send("Not found");
        })
       ;
    //res.redirect(finalurl);
    
});

module.exports=router;