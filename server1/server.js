const express = require('express')
var http =require('http')
const cors = require('cors');
const axios = require('axios');
var querystring = require('querystring');
var bodyParser = require('body-parser')
const app = express()
const port = 3001
app.use(cors());
app.use(bodyParser.json());
app.get('/server2',async(req,res)=>{
  try{
    let re = await axios.post("http://docker-compose-web2-1:9002/server2",{a:2,b:3});
    
    if(re){
      console.log('Succesfully posted')
      res.send(re)
    }
  } catch (err) {
    console.log(err);
  }
    
   
})

app.get('/', (req, res) => {
  res.send('Hello World! 01')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
