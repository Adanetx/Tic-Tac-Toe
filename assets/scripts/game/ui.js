const store = require('../store')
const onStartGameSuccess = function (response) {
  store.game = response.game
  $('#message').text('well come to the tic-tac-toe-game')
  console.log(response)
}
const onStartFailur = function () {
  $('#message').text('try again')
}

module.exports = {
  onStartGameSuccess,
  onStartFailur
}
