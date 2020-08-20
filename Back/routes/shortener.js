const express=require('express');
const router=express.Router();
const db_functions=require('../database/db_functions');

router.post('/',(req,res,next)=>{
    console.log('in route');
    db_functions.fetchAll()
    .then(([rows,fieldData])=>{
        res.json({msg:rows});
    })
    .catch((error)=>{
        console.log(error);
    })
    console.log(req.body.argurl);
    
});

router.get('/',(req,res,next)=>{
    console.log('getting');
    res.send('hi');
});
module.exports=router;