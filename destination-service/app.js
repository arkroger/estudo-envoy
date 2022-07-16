var express = require('express');
const axios = require('axios');
var app = express();
var port = 3001;

var probabilityCaos = 0;

app.use(express.json()) 

app.post('/caos', function(req, res) {
  probabilityCaos = req.body["probability"]  
  res.status(200).end();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {

  // console.log("Request", req.rawHeaders)
  console.log("Request:", req.headers['x-request-id'])
  console.log("Request: ", req.rawHeaders)


  var response = 'fast'
  var status = 200

  if (probabilityCaos > 0 ) {
    var erro = isNOk();    
    if (erro) {
      status = 500;
    }
  }



  axios.get('http://localhost:3002')
  .then( serviceResponse => {    
    res.status(status).json({
      'request': response,
      'service': {
        'response': serviceResponse.data,
        'status': serviceResponse.status
      }})
  }).catch((err) => {            
      res.status(status).json({
        'request': response,
        'service': {
          'response': err.response.data,
          'status': err.response.status
        }
      });
  })


});

async function sleep(ms) {
  await promiseSleep(ms);
}

function isNOk() {
  value = Math.floor(Math.random() * 100);  
  if (value < probabilityCaos) {
    return true;
  } 

  return false; 
}


function promiseSleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  