'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvent = require('./game/events')
$(() => {
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#change-password-button').hide()
  $('#change-password').hide()
  // $('.my-class').hide()
  // $('.board-grid').hide()
  $('#sign-up-button').on('click', authEvents.showSignUp)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password-button').on('click', authEvents.showChangePassword)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#on-game').on('click', gameEvent.onStartGame)
  $('.board-cells').on('click', gameEvent.onCellClick)
  $('#reset').on('click', gameEvent.onReset)
})
