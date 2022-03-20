const gameBoard = (function() {
    let board = [0,1,2,3,4,5,6,7,8]
    let _game = board
    const updateGameBoard = function(sign, cellNumber) {
        _game[cellNumber] = sign
        winningResults = [
            _game[0] == _game[1] && _game[0] == _game[2],
        _game[0] == _game[4] && _game[0] == _game[8],
        _game[0] == _game[3] && _game[0] == _game[6],
        _game[1] == _game[4] && _game[1] == _game[7],
        _game[1] == _game[4] && _game[1] == _game[7],
        _game[2] == _game[4] && _game[2] == _game[6],
        _game[2] == _game[5] && _game[2] == _game[8],
        _game[6] == _game[7] && _game[6] == _game[8],
        ]
    }
    return {board, updateGameBoard, _game}
})()

const displayController = (function () {
    return{
        displayChoose: function () {
            let body = document.getElementsByTagName("body")[0]
            let htmlForChoose = `
                <div id="choose-container" class="choose_container">
                    <h1>Choose your weapon</h1>
                    <div class="choose">
                        <div class="choose_element" id="x" onclick="flowController.createPlayers('x')"><h1>X</h1></div>
                        <div class="choose_element" id="o" onclick="flowController.createPlayers('o')"><h1>O</h1></div>
                    </div>
                </div>
            `
            body.innerHTML += htmlForChoose
        },
        displayBoard : function () {
            let container = document.getElementById("board")
            gameBoard.board.forEach(element => {
                let html = `
                <div id="cell_${container.childElementCount}" onclick="flowController.currentPlayerPlay(${container.childElementCount})"></div>
                `
                container.innerHTML += html
            });
        },
        dismountChoose: function(){
            let chooseContainer = document.getElementById("choose-container")
            chooseContainer.style.display="none"
        },
        updateGameMoves: function(){
            
        }
    }
})()

const flowController = (function () {
    
    
    return{
        init: function () {
            displayController.displayChoose()
            displayController.displayBoard()
        },
        createPlayers: function (sign) {
            if(sign == "x"){
                player1 = player("x")
                player2 = player("o")
            }else{
                player1 = player("o")
                player2 = player("x")
            }
            currentPlayer = player2

            displayController.dismountChoose()
        },
        togglePlayers: function(){
            currentPlayer == player1? currentPlayer = player2 : currentPlayer = player1
        }
        ,
        checkWon: function(){
            winningResults.includes(true) && console.log("win")
        },
        currentPlayerPlay:function(cell){
            currentPlayer.playTurn(currentPlayer.sign, cell)
        }
    }
})()

const player = function(sign) {
    return{
        sign,
        playTurn: function (playerSign, cellNumber) {
            gameBoard.updateGameBoard(playerSign, cellNumber)
            displayController.updateGameMoves()
            flowController.checkWon()
            flowController.togglePlayers()
        }
    }
}

// initgame
flowController.init()

