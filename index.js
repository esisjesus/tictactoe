const gameBoard = (function() {
    let board = [0,1,2,3,4,5,6,7,8]
    let game = []

    return {board, game}
})()

const displayController = (function () {
    return{
        displayBoard : function () {
            let container = document.getElementById("board")
            gameBoard.board.forEach(element => {
                let html = `
                <div id="cell_${container.childElementCount}"></div>
                `
                // document.getElementById(`cell_${container.childElementCount}`).addEventListener("")
                container.innerHTML += html
            });
        },
    }
})()

const flowController = (function () {
    
    _winningResults = [
        gameBoard.game[0] == gameBoard.game[1] && gameBoard.game[0] == gameBoard.game[2],
        gameBoard.game[0] == gameBoard.game[4] && gameBoard.game[0] == gameBoard.game[8],
        gameBoard.game[0] == gameBoard.game[3] && gameBoard.game[0] == gameBoard.game[6],
        gameBoard.game[1] == gameBoard.game[4] && gameBoard.game[1] == gameBoard.game[7],
        gameBoard.game[1] == gameBoard.game[4] && gameBoard.game[1] == gameBoard.game[7],
        gameBoard.game[2] == gameBoard.game[4] && gameBoard.game[2] == gameBoard.game[6],
        gameBoard.game[2] == gameBoard.game[5] && gameBoard.game[2] == gameBoard.game[8],
        gameBoard.game[6] == gameBoard.game[7] && gameBoard.game[6] == gameBoard.game[8],
    ]
    

    return{
        init: function () {
           displayController.displayBoard()
        },
        checkWon: function(){
            _winningResults.includes(true) && console.log()
        }
    }
})()

const player = function() {
    return{
        // chooseSign
        // playTurn
        // win
    }
}


