const express = require('express');
const bodyParser = require('body-parser')
const premoveChess = require('./premovechess.js')
const app = express();

app.use(express.json())
app.use(express.static('public'));

app.post('/sendmove', function(req, res){

    result = game.turn(req.body);
    res.send(""+req.body+" entered successfully with result "+result);

})

app.get('/position', (req, res) => {

    //res.send(game.showBoard());
    res.send(game.showGameState());

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
game = new premoveChess();

// cd desktop/premove-chess
// node app.js
// http://localhost:3000/chess.html