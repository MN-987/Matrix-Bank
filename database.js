
const express=require('express');
const router=express.Router();
const rootDir=require('./util/path')
const path=require('path');

var mysql = require('mysql');
const { response } = require('express');
const { dirname } = require('path');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'toor',
  database        : 'world'
});

//try router method 
/*router.get("/clients.js",function(req,res,next){
var query="select * from Clients";
/*
pool.query(query,function(error,data){
  if(error)
  {
    console.log(error);
  }
  else{
    response.render(path.join(rootDir,'/clients2.html'), {title: 'Node.js My sql application', action:'list',sampleData:data})
  }
})

})*/
 
/*pool.query(' select * from Clients ',(err,res,field)=>{
    if(res)
    console.log(res);

})  */


module.exports=pool;
//module.exports=router;