class premoveChess{

    constructor(){
        this.board = chess.Board();
        this.gameState = chess.Board();
        validMove = false;
        while(!validMove){
            this.writtenMove = self.getMove("White");
            if(validMove(this.writtenMove)){//valid on gamestate
                this.gameState.push_san(self.writtenMove);
                validMove = True;
            }
        }
    }
    showBoard(){//return board as players see it
    }
    showGameState(){//return board as it will be after written move
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
        if(newWrittenMove == "draw"){
            return "Agreed draw";
        }
        if("resign" in newWrittenMove){
            return ""+turnplayer+" resigns";
        }
        if(validMove(newWrittenMove)){
            this.gameState.push_san(newWrittenMove);
        }
        else{
            console.log("Illegal move!");
            if(whiteToWriteMove){
                return "0-1";
            }
            else{
                return "1-0";
            }
        }
        this.board.push_san(this.writtenMove);
        this.writtenMove = newWrittenMove;
        if(this.gameState.is_repetition() || this.gameState.halfmove_clock>99){
            return "Claimed draw";
        }
        return this.gameState.result();
    }
}