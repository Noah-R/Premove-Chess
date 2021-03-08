# Premove-Chess
A variant of Chess where every move must be a premove - you don't know what move your opponent made before you decide yours

Current dependencies are:

express.js

python-chess: https://python-chess.readthedocs.io/

To Do:

    Frontend, will probably be something from https://lichess.org/source

        Needs to allow and try to execute premoves like lichess/chess.com does in an interfaceable way

    Routing, will basically just send game updates back and forth

    Web Server will basically be running premovechess.py, which will mainly interface through getMove() 
    but will need some modifications to fully match 
    
    Deploy, through Heroku