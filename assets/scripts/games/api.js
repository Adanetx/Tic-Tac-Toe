const config = require('../config')
const store = require('../store')

const gameCreate = function (formData) {
  console.log(store)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData
  })
}

const gamesIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gamesShow = function (id) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + id
  }
  )
}

const gamesDelete = function (id) {
  return $.ajax({
    // Use the ID value from the form in the URL
    // to delete a specific movie
    url: config.apiUrl + '/games/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const gamesUpdate = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.games.id,
    method: 'PATCH',
    data: 'formData',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  }

  )
}
module.exports = {

  gameCreate,
  gamesShow,
  gamesUpdate,
  gamesDelete,
  gamesIndex
}