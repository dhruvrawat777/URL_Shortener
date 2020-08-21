const express=require('express');
const url = require('url');
const router=express.Router();

router.get('/',(req,res,next)=>{
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject)
    console.log('getting');
    res.send('hi');
});

module.exports=router;