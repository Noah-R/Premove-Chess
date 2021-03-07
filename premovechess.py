import chess

board = chess.Board()
#we're probably going to need two boards, with an invisible one being a half-move ahead
whiteToMove = True
playing = True
while(playing):
    #we're going to need some functions here to make this more wieldy
    if(whiteToMove):
        print("White to play, Black to write")
    else:
        print("Black to play, white to write")
    print(board)

"""
Control flow is:
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