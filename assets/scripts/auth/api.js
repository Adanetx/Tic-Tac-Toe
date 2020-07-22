// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const config = require('../config')
// config will be apiUrl: 'value of url'
const store = require('../store')
// will be the object we put the token in on sign ind sucsss
// user: {email, password, }

// your JS code goes here
const signUp = function (formData) {
  return $.ajax(
    {
      url: config.apiUrl + '/sign-up',
      method: 'POST',

      // send the sign up data
      // data: data

      data: formData
    }
  )
}
const signIn = function (formData) {
  return $.ajax(
    {
      url: config.apiUrl + 'sign-in',

      method: 'POST',
      data: formData

    }
  )
}

const changePassword = function (formData) {
  console.log(store.user)
  return $.ajax({
    headers: {
      // Access the token on the `store.user` object
      // This only works if we sign in first
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {

  signUp,
  signIn,
  changePassword,
  signOut
}
