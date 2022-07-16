var express = require('express');
var app = express();
var port = 3000;

app.use(express.json()) 

app.get('/', function(req, res) {
  
  xAuth = req.headers['x-auth']

  console.log("Request: ", req.rawHeaders)
  console.log("x-auth: ", req.headers['x-auth']);
  console.log("Request: ", req.params)
  console.log("============================================")

  if (xAuth === 'valid') {
    res.status(200).end();
  } else {
    res.status(401).json({'message': 'Não autorizado'})
  }
  
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  