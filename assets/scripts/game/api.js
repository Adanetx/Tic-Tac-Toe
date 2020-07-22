
const config = require('../config')
const store = require('../store')
const startGame = function () {
 return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: '{}'
  })
}
c
 TOKEN="3d864fb952197c7a641e6a450e5797ef"
curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games/" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data {}

echo
onst userChoice = function (index, player, over) {
 return $.ajax({
   headers: {
      // ui sign in success function
      Authorization: 'Bearer ' + store.user.token
    },
   url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
   data: {
      game: {
       cell: {
          index: index,
          value: player
        },
        over: over
      }
    }
  })
}
const gameOver = function () {
  return $.ajax({
    headers: {
      // ui sign in success function
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: -1,
          value: ''
        },
        over: true
      }
    }
  })
}
const getGames = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games?over=true',
    method: 'GET'
  })
}

module.exports = {
 startGame,
 userChoice,
 gameOver,
 getGames
}
