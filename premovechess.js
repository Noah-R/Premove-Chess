const { Chess } = require("chess.js");

class premoveChess{

    constructor(){
        this.board = new Chess();
        this.gameState = new Chess();
        this.writtenMove = {"from": "a1", "to": "b7"};
        this.toWriteMove = "White"
        this.status = "White to write initial move"
        this.gameOver = false;
    }

    showBoard(){
        return this.board.fen()
    }
    
    showGameState(){
        return this.gameState.fen();
    }

    playerToWriteMove(){
        return this.toWriteMove;
    }

    getStatus(){
        return this.status;
    }

    isGameOver(){
        return this.gameOver;
    }
    
    turn(move){//executes move, returns game status
        if(this.gameOver){
            return;
        }
        var valid = this.gameState.move(move);
        if(valid == null){
            if(this.toWriteMove=="White"){
                this.status =  "White tried to move "+move.from+" to "+move.to+", Black wins by illegal premove";
                this.gameOver=true;
                return;
            }
            else if(this.toWriteMove=="Black"){
                this.status =  "Black tried to move "+move.from+" to "+move.to+", White wins by illegal premove";
                this.gameOver=true;
                return;
            }
            else{
                this.status =  "Something went wrong here, India Papa";
                return;
            }
        }
        this.board.move(this.writtenMove);
        this.writtenMove = move;
        if(this.gameState.in_draw()){
            this.status =  this.toWriteMove+" moved "+move.from+" to "+move.to+", Draw by 50 moves or insufficient material";
            this.gameOver=true;
            return;
        }
        if(this.gameState.in_stalemate()){
            this.status =  this.toWriteMove+" moved "+move.from+" to "+move.to+", Draw by stalemate";
            this.gameOver=true;
            return;
        }
        if(this.gameState.in_threefold_repetition()){
            this.status =  this.toWriteMove+" moved "+move.from+" to "+move.to+", Draw by threefold repetition";
            this.gameOver=true;
            return;
        }
        if(this.gameState.in_checkmate()){
            this.status =  this.toWriteMove+" moved "+move.from+" to "+move.to+", "+this.toWriteMove+" wins by checkmate";
            this.gameOver=true;
            return;
        }
        if(this.toWriteMove=="White"){
            this.toWriteMove="Black";
        }
        else{
            this.toWriteMove="White";
        }
        this.status =  this.toWriteMove+" to write a move";
        return;
    }
}

module.exports = premoveChess;