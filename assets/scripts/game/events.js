
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
    gameSpots[i].innerHTML = ''
    gameSpots[i].style.backgroundColor = '$red'
    gameSpots[i].style.pointerEvents = 'none'
    // gameSpots[i].style.pointerEvents = 'none'
    // api.startGame()
  }
  $('#message').text('game reseted, make sure you sign in and click strat')
  $('#status').text('')
}

const onCellClick = (e) => {
  if (currentMove === 'X') {
    api.userChoice(e.target.dataset.cellIndex, currentMove)
      .then(ui.userChoiceSuccess)
      .catch(ui.userChoiceFailure)
    $('#' + e.target.id).append('<img class="spot-image" src="https://i.imgur.com/lyYPBsT.png"/>')
    // $('#' + e.target.id).append(<img class ="spot-image" src = "https://i.imgur.com/vYsEujl.png"/>)
    currentMove = '0'
  } else {
    api.userChoice(e.target.dataset.cellIndex, currentMove)
      .then(ui.userChoiceSuccess)
      .catch(ui.userChoiceFailure)
    $('#' + e.target.id).append('<img class="spot-image" src="https://i.imgur.com/jr6BNL5.png">')
    // $('#' + e.target.id).append(<img class = "https://imgur.com/a/hMNcW7T"/>)
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
