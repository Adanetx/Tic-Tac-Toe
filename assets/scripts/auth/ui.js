'use strict'
const store = require('../store')

const singUpSucces = function () {
  // console.log(response)
  $('#message').text('Successfully signed up! ')
//  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign Up failed :(')
  // $('form').trigger('reset')
  // console.log(store)
}
const signInSuccess = function (response) {
  // console.log(response)
  $('#message').text('Signed in successfully') // + //response.user.email)
  // $('form').trigger('reset')
  // console.log(store)
  store.user = response.user
  // console.log(store.user.token)
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  //  $('#sign-up-button').hide()
  $('#change-password-button').show()
}
const signInFailure = function () {
  $('#.message').text('Sign in failed')
  // $('form').trigger('reset')
  $('#sign-up').show()
}
const changePasswordSuccess = function () {
  $('#message').text('change password success!')
}

const changePasswordFailure = function () {
  $('#message').text('change password failed ')
}
const signOutSuccess = function () {
  $('#message').text('Signed you out!')
  // $('#unauthenticated').show()
  // $('#authenticated').hide()

  store.user = null
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-password').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign out failed ')
}

module.exports = {
  singUpSucces,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
