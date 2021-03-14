const board = document.getElementById('board');
const serv = "https://rcnrcn927.herokuapp.com/"
board.addEventListener('drop', (e) => {
    const {source, target, piece, setAction} = e.detail;
    /*if (piece.search(/b/) !== -1) {//If the player tries to move a black piece, snap it back
        setAction('snapback');
    }//Below code should be an else if this is uncommented*/
    let request = new XMLHttpRequest();
    request.onload  = function() {
        listenForPosition();
    };
    request.open("POST", serv+"move");
    request.setRequestHeader("Content-Type", "application/json");
    move={"from": source, "to": target, "player": document.getElementById("playerkey").value};
    request.send(JSON.stringify(move));
});
document.getElementById('reset').addEventListener('click', () => {
    let request = new XMLHttpRequest();
    request.onload  = function() {
        listenForPosition();
    };
    request.open("POST", serv+"newgame");
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
    request.open("POST", serv+"position");
    request.setRequestHeader("Content-Type", "application/json");
    player={"player": document.getElementById("playerkey").value};
    request.send(JSON.stringify(player));
}
document.getElementById('flip').addEventListener('click', () => {
    board.flip();
  });