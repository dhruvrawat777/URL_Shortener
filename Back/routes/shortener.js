const express=require('express');
const router=express.Router();


router.post('/',(req,res,next)=>{
    console.log('in route');
    console.log(req.body.argurl);
    res.json({msg:'done cors'});
});

router.get('/',(req,res,next)=>{
    console.log('getting');
    res.send('hi');
});
module.exports=router;