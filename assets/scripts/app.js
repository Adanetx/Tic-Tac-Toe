'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./auth/events')
const gameEvent = require('./game/events')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#on-start').on('click', gameEvent.onStart)

  $('.board-cell').on('click', gameEvent.onCellClick)
  $('#reset').on('click', gameEvent.onReset)
})
