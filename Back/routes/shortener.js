const express=require('express');
const router=express.Router();
const db_functions=require('../database/db_functions');

const { generateshort } = require('../database/db_functions');

/* router.post('/',(req,res,next)=>{
    console.log('in route');
    db_functions.fetchAll()
    .then(([rows,fieldData])=>{
        res.json({msg:rows});
    })
    .catch((error)=>{
        console.log(error);
    })
    console.log(req.body.argurl);
    
}); */



router.post('/shorten',(req,res,next)=>{
    const shorturl=generateshort();
    console.log("inside middleware");
    db_functions.insert(shorturl,req.body.argurl)
        .then(()=>{

            let sender="http://dhruvurl.ly/"+shorturl;
            res.json({shorturl:sender});
        })
        .catch((error)=>{
            console.log(error);
        })
});

module.exports=router;