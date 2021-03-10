const { Chess } = require("chess.js");

class premoveChess{

    constructor(){
        this.board = new Chess();
        this.gameState = new Chess();
        validMove = null;
        while(validMove == null){
            this.writtenMove = self.getMove("White");
            validMove = this.gameState.move(self.writtenMove);
        }
    }
    showBoard(){
        return this.board.fen()
    }
    showGameState(){
        return this.gameState.fen();
    }
    getMove(turnPlayer){//get move from client
    }
    startGame(){//manage turn sequence
        result = "*";
        whiteToWriteMove = false;
        while(result == "*"){
            result = this.turn(whiteToWriteMove);
            whiteToWriteMove = !whiteToWriteMove;
        }
        self.showGameState();
        console.log(result);
    }
    turn(whiteToWriteMove){//executes turn, returns game result
        this.showBoard();
        turnPlayer = "Black";
        if(whiteToWriteMove){
            turnPlayer = "White";
        }
        newWrittenMove = this.getMove(turnPlayer);
        valid = this.gameState.move(newWrittenMove);
        if(valid == null){
            console.log("Illegal move!");
            if(whiteToWriteMove){
                return "0-1";
            }
            else{
                return "1-0";
            }
        }
        this.board.move(this.writtenMove);
        this.writtenMove = newWrittenMove;
        if(this.gameState.in_draw() || this.gameState.in_stalemate() || this.gameState.in_threefold_repetition()){
            return "Draw";
        }
        if(this.gameState.in_checkmate()){
            return turnplayer+" wins";
        }
        return "*";
    }
}