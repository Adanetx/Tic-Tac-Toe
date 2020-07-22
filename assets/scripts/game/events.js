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

const gameSpots = document.querySelectorAll('.game-spots')
let currentMove = 'X'

const onReset = () => {
// # TOKEN="3d864fb952197c7a641e6a450e5797ef"
curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games/" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data {}

echoZWw3dllZSFV3d2lYU0dsVy9rU2tkdz09

  for (let i = 0; i < gameSpots.length; i++) {
    gameSpots[i].style.pointerEvents = 'auto'ZWw3dllZSFV3d2lYU0dsVy9rU2tkdz09
    gameSpots[i].innerHTML = ''
    gameSpots[i].style.backgroundColor = '$green'
    api.startGame()
  }
}

const onCellClick = (e) => {
  // display the move
  // check winner
  // switch the player
  if (currentMove === 'X') {
    api.userChoice(e.target.dataset.cellIndex, currentMove)
      .then(ui.userChoiceSuccess)
      .catch(ui.userChoiceFailure)
    $('#' + e.target.id).append('<img class="spot-image" src="../assets/images/XGivingIt.PNG"/>')
    currentMove = '0'
  } else {
    api.userChoice(e.target.dataset.cellIndex, currentMove)
      .then(ui.userChoiceSuc
# TOKEN="3d864fb952197c7a641e6a450e5797ef"
curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games/" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data {}

echo
cess)
      .catch(ui.userCho  iceFailure)
    $('#' + e.target.id).append('<img class="spot-image" src="../assets/images/OGivingIt.PNG"/>')
    currentMove = 'X'ZWw3dllZSFV3d2lYU0dsVy9rU2tkdz09
  }
  e.target.style.pointerEvents = 'none'
}

module.exports = {
  onStartGame,
  onCellClick,
  onReset,
  gameSpots
}
