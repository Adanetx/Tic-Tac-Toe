const store = require('../store')
const api = require('./api')
// const ev = require('./events')
const gameSpots = document.querySelectorAll('.board-cells')
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]
const startGameSuccess = function (response) {
  $('#message').show()
  $('#games-played').show()
  $('.board-grid').show()
  $('#status').show()
  $('#change-password-button').hide()
  $('#change-password').hide()
  $('#reset').show()
  store.game = response.game

  $('#message').text('game in progress')

  $('.board-cells').css('pointer-events', 'auto')
}
const startGameFailure = function () {
  $('#message').show()
  $('#on-game').hide()
  $('#reset').hide()
  $('#games-played').hide()
  $('.board-grid').hide()
  $('#status').hide()
  $('#message').text('You Need To Sign In!')
}
const userChoiceSuccess = function (response) {
  $('#message').show()
  store.game = response.game
  $('#status').text('user picked a box!')

  checkGameStatus(store.game)
}
const checkGameStatus = (game) => {
  $('#message').show()
  const cells = game.cells
  // let counter = 0
  winCombos.forEach(function (winCombo) {
    // ++counter
    const winningString = cells[winCombo[0]] + cells[winCombo[1]] + cells[winCombo[2]]
    if (winningString === 'XXX' || winningString === '000') {
      $('#message').text(winningString.charAt(0) + ' is  a winner')

      gameSpots.forEach(function (gameSpot) {
        const cellIndex = parseInt(gameSpot.dataset.cellIndex)
        if (winCombo.includes(cellIndex)) {
          gameSpot.style.backgroundColor = 'red'
          gameSpot.style.pointerEvents = 'none'
        } else {
          gameSpot.style.backgroundColor = 'red'
          gameSpot.style.pointerEvents = 'none'
        }
      })
      api.gameOver()
    }
  })
}
const userChoiceFailure = function () {
  $('#status').text('user choice failed to complete')
}
const resetGameSuccess = function (response) {
  $('#message').show()
  $('#message').text('user reset the game!')
}
const resetGameFailure = function () {
  $('#message').show()
  $('#message').text('failed, try it')
}
module.exports = {
  startGameFailure,
  startGameSuccess,
  userChoiceSuccess,
  userChoiceFailure,
  resetGameSuccess,
  resetGameFailure
}
