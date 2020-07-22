'use restrict'
const api = require('.api')

const ui = require('./ui')

const getFormFields = require('../../../lib/getFormFields')

const onStart = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.onStart(formData)
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartFailur)
}
module.exports = {
  onStart
}
