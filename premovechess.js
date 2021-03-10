const { Chess } = require("chess.js");

class premoveChess{

    static test(){
        return(2/0)
    }

    constructor(){
        this.board = new Chess();
        this.gameState = new Chess();
        this.writtenMove = {"from": "a1", "to": "a1"};
        this.toWriteMove = "White"
        this.result = "*"
    }
    showBoard(){
        return this.board.fen()
    }
    showGameState(){
        return this.gameState.fen();
    }
    turn(move){//executes move, returns game status
        var valid = this.gameState.move(move);
        if(valid == null){
            console.log("Illegal move!");
            if(this.toWriteMove=="White"){
                return "Black wins by illegal premove";
            }
            else if(this.toWriteMove=="Black"){
                return "White wins by illegal premove";
            }
            else{
                return "Something went wrong here, India Papa";
            }
        }
        this.board.move(this.writtenMove);
        this.writtenMove = move;
        if(this.gameState.in_draw()){
            return "Draw by 50 moves or insufficient material";
        }
        if(this.gameState.in_stalemate()){
            return "Draw by stalemate";
        }
        if(this.gameState.in_threefold_repetition()){
            return "Draw by threefold repetition";
        }
        if(this.gameState.in_checkmate()){
            return this.toWriteMove+" wins by checkmate";
        }
        if(this.toWriteMove=="White"){
            this.toWriteMove="Black";
        }
        else{
            this.toWriteMove="White";
        }
        return "Game is not over yet";
    }
}

module.exports = premoveChess;