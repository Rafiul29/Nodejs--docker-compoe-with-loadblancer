
const express = require('express')
var http =require('http')
const cors = require('cors');
const axios = require('axios');
const redis =require('redis');
const { createClient } = require('redis');
var querystring = require('querystring');
var bodyParser = require('body-parser')
const app = express()
const port = 3002
app.use(cors());
app.use(bodyParser.json());

app.post('/server2',(req,res)=>{

  let sum = req.body.a+req.body.b 
  (async ()=>{
    const client=createClient({
      url: "redis://docker-composee-redis-1:6379"
    });
    client.on('error',(err)=> console.log("Redis Client Error",err));
    await client.connect();
    await client.set('result',sum);
    const value = await client.get('result')
    console.log("reached here 1")
    res.json({msg:'welcome you all',resultvalue});
  })


})



app.get('/', (req, res) => {
  res.send('Hello World! 02 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
