const path=require('path');

const express=require('express');


const router=express.Router();
const rootDir=require('../util/path');

const dataBase=require('../database');

router.post('/confirmPage.html',(req,res,next)=>{

    var transferBalance=Number(req.body.lname);
    var clientEmail=req.body.fname;
    console.log(transferBalance);
    console.log(clientEmail);
    dataBase.query('update clients set Balance=Balance+? where Email=?',[transferBalance,clientEmail]);
    res.sendFile(path.join(rootDir,'confirmPage.html'));
    
});
const fs= require('fs');  
module.exports=router;  