
const api = require('./api')
const ui = require('./ui')
const onStartGame = function (event) {
  event.preventDefault()
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
  api.getGames()
    .then(displayGames)
}
const displayGames = function (response) {
  $('#games-played').text(response.games.length)
}

const gameSpots = document.querySelectorAll('.board-cells')
let currentMove = 'X'

const onReset = () => {
  for (let i = 0; i < gameSpots.length; i++) {
    gameSpots[i].style.pointerEvents = 'auto'
    gameSpots[i].innerHTML = ''
    gameSpots[i].style.backgroundColor = 'rgb(37, 59, 24)'
    api.startGame()
  }
}

const onCellClick = (e) => {
  if (currentMove === 'X') {
    api.userChoice(e.target.dataset.cellIndex, currentMove)
      .then(ui.userChoiceSuccess)
      .catch(ui.userChoiceFailure)
    $('#' + e.target.id).append('<img class="spot-image" src="https://i.imgur.com/8cS2Ijn.png "/>')
    currentMove = '0'
  } else {
    api.userChoice(e.target.dataset.cellIndex, currentMove)
      .then(ui.userChoiceSuccess)
      .catch(ui.userChoiceFailure)
    $('#' + e.target.id).append('<img class="spot-image" src="https://i.imgur.com/PkV2xIg.png "/>')
    currentMove = 'X'
  }

  e.target.style.pointerEvents = 'none'
}

module.exports = {
  onCellClick,
  onStartGame,
  onReset,
  gameSpots
}
