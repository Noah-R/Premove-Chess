const express = require('express');
const premoveChess = require('./premovechess.js')
const app = express();
app.use(express.json())
app.use(express.static('public'));
var playerKeys = {"wp": "White", "bp": "Black"}

app.post('/move', function(req, res){

  if(game.playerToWriteMove()===playerKeys[req.body.player]){
    res.send(game.turn(req.body));
  }
  else if(playerKeys.hasOwnProperty(req.body.player)){
    res.send("Not your turn");
  }
  else{
    res.send("Invalid player key");
  }

})

app.post('/newgame', function(req, res){

  if(playerKeys.hasOwnProperty(req.body.player)){
    game = new premoveChess();
    res.send("Game restarted");
  }
  else{
    res.send("Invalid player key");
  }

})

app.post('/position', (req, res) => {

  if(playerKeys.hasOwnProperty(req.body.player)){
    if(game.isGameOver()){
      result={"board": game.showGameState(), "status": game.getStatus()};
    }
    else{
      result={"board": game.showBoard(), "status": game.getStatus()};
    }
    res.send(JSON.stringify(result));
  }
  else{
    res.send("Invalid player key");
  }

})

app.get('/', function (req, res) {
  res.send("Nothing at base directory, try /chess.html");
});

app.post('/*'), (req, res) => {
  res.send("Something went wrong here, Uniform Papa");
}
app.get('/*'), (req, res) => {
  res.send("Something went wrong here, Uniform Golf");
}

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => console.log(`Running at localhost:`+port));
game = new premoveChess();

// http://localhost:3000/chess.html