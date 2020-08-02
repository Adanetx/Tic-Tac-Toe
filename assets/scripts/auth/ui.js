const store = require('../store')
const signUpSuccess = function () {
  $('#message').show()
  $('#message').text('Successfully signed up! Now Sign In!')
  $('.head6').hide()
}
const signUpFailure = function () {
  $('#message').show()
  $('#message').text('Sign Up failed.')
  $('.head6').hide()
}
const signInSuccess = function (response) {
  $('.head6').hide()
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
  $('.head6').hide()
  $('#message').show()
  $('#message').text('Sign in failed')
  $('#sign-up').show()
}
const changePasswordSuccess = function () {
  $('.head6').hide()
  $('#message').show()
  $('#message').text('change password success!')
}
const changePasswordFailure = function () {
  $('.head6').hide()
  $('#message').show()
  $('#message').text('change password failed')
}
const signOutSuccess = function () {
  $('.head6').hide()
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
  $('.head6').hide()
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
