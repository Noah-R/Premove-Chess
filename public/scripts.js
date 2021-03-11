const board = document.getElementById('board');
board.addEventListener('drop', (e) => {
    const {source, target, piece, setAction} = e.detail;
    /*if (piece.search(/b/) !== -1) {//If the player tries to move a black piece, snap it back
        setAction('snapback');
    }//Below code should be an else*/
    let request = new XMLHttpRequest();
    request.onload  = function() {
        console.log(request.response);
        listenForPosition();
    };
    request.open("POST", "http://localhost:3000/move");
    request.setRequestHeader("Content-Type", "application/json");
    move={"from": source, "to": target, "player": document.getElementById("playerkey").value};
    request.send(JSON.stringify(move));
});
document.getElementById('reset').addEventListener('click', () => {
    let request = new XMLHttpRequest();
    request.onload  = function() {
        listenForPosition();
    };
    request.open("POST", "http://localhost:3000/newgame");
    request.setRequestHeader("Content-Type", "application/json");
    player={"player": document.getElementById("playerkey").value};
    request.send(JSON.stringify(player));
});
document.getElementById('position').addEventListener('click', () => {
    listenForPosition();
});
function listenForPosition(){
    let request = new XMLHttpRequest();
    request.onload  = function() {
        if(!(request.response=="Invalid player key")){
            result=JSON.parse(request.response);
            board.setPosition(result.board);
            document.getElementById("status").innerHTML=result.status;
        }
    };
    request.open("POST", "http://localhost:3000/position");
    request.setRequestHeader("Content-Type", "application/json");
    player={"player": document.getElementById("playerkey").value};
    request.send(JSON.stringify(player));
}
document.getElementById('flip').addEventListener('click', () => {
    board.flip();
  });