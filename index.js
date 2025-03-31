const express= require('express');

const app = express();


app.get('/',( req,res)=>{
    res.send("heloo World")
})

app.get('/us',(req,res)=>{
    res.send("this is us")
})


app.listen(3000,()=>{
console.log('server is running on  port 3000');
})