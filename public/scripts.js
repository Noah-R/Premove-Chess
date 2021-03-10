const board = document.getElementById('board');
board.addEventListener('drop', (e) => {
    const {source, target, piece, setAction} = e.detail;
    if (piece.search(/b/) !== -1) {//has to check which color player is, also promotion, get to that later
        setAction('snapback');
    }
    else{
        let request = new XMLHttpRequest();
        request.onload  = function() {
            console.log(request.response);
        };
        request.open("POST", "http://localhost:3000/sendmove");
        request.setRequestHeader("Content-Type", "application/json");
        move={"from": source, "to": target};
        request.send(JSON.stringify(move));
    }
});
document.getElementById('reset').addEventListener('click', () => {
    board.start();
});
document.getElementById('position').addEventListener('click', () => {
    listenForPosition();
});
function listenForPosition(){
    let request = new XMLHttpRequest();
    request.onload  = function() {
        console.log(request.response);
    };
    request.open("GET", "http://localhost:3000/position");
    request.send();
}