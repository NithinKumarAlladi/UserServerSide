const express = require('express');
const app = express();

var server = app.listen(3001 , ()=>{console.log('Server is listening at port '+ server.address().port)});

app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.get('/show',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send({
        name:'Nithin kumar',
        surname:'Alladi'
    });
});
