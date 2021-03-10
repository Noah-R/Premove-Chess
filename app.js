const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.text())
app.use(express.static('public'));

app.post('/sendmove', function(req, res){

    res.send(""+req.body+" entered successfully")

})

app.get('/position', (req, res) => {

    res.send("Game position");

    })

app.post('/*'), (req, res) => {
  res.send("other post")
}
app.get('/*'), (req, res) => {
  res.send("other get")
}

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => console.log(`Running at localhost:`+port));

// cd desktop/premove-chess
// node app.js
// http://localhost:3000/chess.html