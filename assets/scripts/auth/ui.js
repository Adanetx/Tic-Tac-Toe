const store = require('../store')
const signUpSuccess = function () {
  $('#message').show()
  $('#message').text('Successfully signed up! Now Sign In!')
  $('')
}
const signUpFailure = function () {
  $('#message').show()
  $('#message').text('Sign Up failed.')
}
const signInSuccess = function (response) {
  $('#message').show()
  $('#message').text('Sign in Success!, click start button to start')
  store.user = response.user
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-up-button').hide()
  $('#change-password-button').show()
  $('#on-game').show()
  // $('#on-start').show()
//   $('#reset').hide()
}
const signInFailure = function () {
  $('#message').show()
  $('#message').text('Sign in failed')
  $('#sign-up').show()
}
const changePasswordSuccess = function () {
  $('#message').show()
  $('#message').text('change password success!')
}
const changePasswordFailure = function () {
  $('#message').show()
  $('#message').text('change password failed')
}
const signOutSuccess = function () {
  $('#message').show()
  $('#reset').hide()
  $('#games-played').hide()
  $('.board-grid').hide()
  $('#status').hide()
  // $('#message').hide()
  $('#change-password').hide()
  $('#on-game').hide()
  $('#sign-up-button').show()
  $('#message').show()
  $('#message').text('sign out success!')
  store.user = null
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-password-button').hide()
}
const signOutFailure = function () {
  $('#message').show()
  $('#message').text('sign out failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,

  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
