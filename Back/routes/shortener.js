const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log('in route');
    res.setHeader('html');
    res.render('hi');
});
module.exports=router;