const express = require('express');
const app = express();
app.use(express.json());
var fs = require('fs');
var util = require('util');
var path = require('path');


var server = app.listen(3001 , ()=>{console.log('Server is listening at port '+ server.address().port)});

app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.get('/show',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    console.log("request is " + req);
    res.send({
        name:'Nithin kumar',
        surname:'Alladi'
    });
});
app.get('/users/:id',(req,res)=>{
    var allUsers = [];
    var filePath = path.join(__dirname,'/Data/allUsers.json');
    fs.readFile(filePath,(err,data)=>{
        // allUsers = util.format(data);
        res.send(data);
    })
});

app.post('/data',(req,res)=>{
    console.log(req.body);
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send('your data is stored');
})