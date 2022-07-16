var express = require('express');
var app = express();
var port = 3002;

var probabilityCaos = 0;
var sleepTime = 0;

app.use(express.json()) 

app.post('/caos', function(req, res) {
  probabilityCaos = req.body["probability"]
  sleepTime = req.body["sleep"]
  res.status(200).end();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {

  // console.log("Request", req.rawHeaders)
  console.log("Request:", req.headers['x-request-id'])


  var response = 'fast'
  var status = 200

  if (probabilityCaos > 0 ) {
    var erro = isNOk();    
    if (erro) {
      status = 500;
    }
  }

  if (sleepTime > 0) {
    response = 'slow '+ sleepTime+'ms'
  }

  if (sleepTime > 0) {
    sleep(sleepTime).then(() => {
      res.status(status).json({'request': response, 'service': 'b'});
    });  
  } else {    
    res.status(status).json({'request': response, 'service': 'b'});
  }

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
  