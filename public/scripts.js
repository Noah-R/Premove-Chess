const board = document.getElementById('board');
board.addEventListener('drop', (e) => {
    const {source, target, piece, newPosition, oldPosition, orientation, setAction} = e.detail;
    if (piece.search(/b/) !== -1) {
        setAction('snapback');
    }
    else{
        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/");
        move=''+source+''+target
        request.setRequestHeader("move", move);
        console.log(move)
        request.send();
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
    request.onreadystatechange = function() {
        console.log("Response "+request.response);
    };
    request.open("GET", "http://localhost:3000/");
    request.send();
}