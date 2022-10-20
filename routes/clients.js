const path=require('path');

const express=require('express');

const router=express.Router();
const rootDir=require('../util/path')
const dataBase=require('../database');


const fs= require('fs');

// var results=dataBase.query(' select * from clients');

//view clients page make an html file for the clients and route to it 
router.get('/data' , async(req,res)=>{
    dataBase.query('select * from clients ',(err,results)=>{
        if(err){
        console.log(err.message);
        }
        else{
        res.json(results);
        }
        })
})


module.exports=router;
