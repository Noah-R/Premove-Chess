#This is the original game logic I wrote, using python-chess. The app no longer uses this.

import chess

class premoveChess:

    def __init__(self):
        self.board = chess.Board()
        self.gameState = chess.Board()
        validMove = False
        while(not validMove):
            try:
                self.writtenMove = self.getMove("White")
                self.gameState.push_san(self.writtenMove)
                validMove = True
            except:
                print("Not a valid move")
    
    def showBoard(self):#print board as players see it
        print(self.board)
    
    def showGameState(self):#print board as it will be after written move
        print(self.gameState)
    
    def getMove(self, turnPlayer):#This is where an interface will plug in(also the above two)
        return input(str(turnPlayer)+", enter your move")

    def startGame(self):#manage turn sequence
        result = "*"
        whiteToWriteMove = False
        while(result == "*"):
            result = self.turn(whiteToWriteMove)
            whiteToWriteMove = not whiteToWriteMove
        self.showGameState()
        print(result)
    
    def turn(self, whiteToWriteMove):#executes turn, returns game result
        self.showBoard()
        turnPlayer = "Black"
        if(whiteToWriteMove):
            turnPlayer = "White"
        try:
            newWrittenMove = self.getMove(turnPlayer)
            if(newWrittenMove == "draw"):
                return "Agreed draw"
            if("wins" in newWrittenMove):
                return newWrittenMove
            self.gameState.push_san(newWrittenMove)
        except:
            print("Illegal move!")
            if(whiteToWriteMove):
                return "0-1"
            else:
                return "1-0"
        self.board.push_san(self.writtenMove)
        self.writtenMove = newWrittenMove
        if(self.gameState.is_repetition() or self.gameState.halfmove_clock>99):
            return "Claimed draw"
        return self.gameState.result()

"""
Control flow is:
    White writes first move, then, until a written move ends the game:
        Black writes move
        White plays move
            First move is made freely like normal
            If black's written move is now illegal, white wins
            If black's written move ends the game, the move is played and the game ends
        White writes move
        Black plays move
            If white's written move is now illegal, black wins
            If white's written move ends the game, the move is played and the game ends
"""