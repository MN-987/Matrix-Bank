// const http=require('http');
const mysql=require('mysql');
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
const dataBase=require('./database');


console.log('   The server is working ');


//Routing: 
const bankRouter=require('./routes/bank');
const clientsRouter=require('./routes/clients');
const transferMoneyRouter=require('./routes/transferMoney');

//Serve public files
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'img')))
app.use(express.static(path.join(__dirname,'js')))

// delete this later
app.use(bankRouter);
app.use('/api/clients' , clientsRouter);
app.use(transferMoneyRouter);

//routes


app.get('/' , (req,res,next)=>{
    res.sendFile(__dirname+'/index.html');
    })    

/*app.get('/view-clients',(req,res,next)=>{
    res.sendFile(__dirname+'/clients2.html');
}); */ 

// Fetch Data trial 1 //

app.get('/view-clients',(req,res)=>{
res.sendFile(__dirname + '/clients.html')
});   


// End Fetch Data //


app.get('/transfer-money',(req,res,next)=>{
    res.sendFile(__dirname+'/transferMoney.html');
})

app.get('/clientsData',(req,res,next)=>{
    res.json(results);
 })
 

//app.use('/admin/views-clients')
app.listen(5000 , ()=>{
    console.log('Listening on 5000....')
})