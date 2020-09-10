#  My Tic-Tac-Toe project
##this is the tic-tac-toe game project ..

 have the following plannigg to solve the problem

1. Identifying what I nead
2. breaking the broblem to sub partts
3. order lists
4. Identifying the techinology I neaded
5 then start working on Project

the tic-tac-toe games needs the following as a user
### as a user I must be
- sign up
- sign in
- able to change password
- signed in user must sign Out
- reset the game
- play repteadly
-    - New game POST /games
 - Update game PATCH /games/:id
 - View number of games played GET /games
 - Give feedback to the user after each action's      success or failure.
 - All forms must clear after submit success
**here is the diagram of the game looks like**
![mygame-wireframe](https://i.imgur.com/xx6k1Uq.png)
the techinology used for the application are listed here
1. HTMLL
2. css
3. JavaScript
4. Ajax
5. Authenticated and game appi
6. Bootstrap

## steps used
1. create form for sign in

```html
<form id = "Sign-up" class = "border">
<fieldset>
  <legend>Sign up!</legend>
<input name="credentials[email]" type="text" value="an@example.email">
<input name="credentials[password]" type="password" value="an estart-game ">
<button type="submit">Sign Up!</button>
<input name="credentials[password_confirmation]" type="password" value="an example password">
</fieldset>
</form>
```
2. create curl JavaScript for the sign in  form

``` curl script
curl "https://tic-tac-toe-api-production.herokuapp.com/sign-in"\
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
"credentials": {
  "email": "'"${EMAIL}"'",
  "password": "'"${PASSWORD}"'"
}
}'
this creating curl script will continnue creating for all
forms and and for all game function what we need for the program.

```
3. crerate the api function for sign in fom
```js Ajax
/ require('./example')
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
```
we need api function for all forms and  game function..

3. create events for forms
```js
'use strict'
const api = require('./api.js')

const ui = require('./ui.js')

const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // formdata: {credentials: {email, password, password_configaraion}}
  api.signUp(formData)
    .then(ui.singUpSuccess)
    .catch(ui.singUpFailure)
```
we  need event to create event functions for all Athenticated an game functions

4. we need ui. function for for form example for sign up
 ```
 onst store = require('../store')

 const singUpSucces = function () {
   // console.log(response)
   $('#message').text('Successfully signed up! ')
 //  $('form').trigger('reset')
 }

 const signUpFailure = function () {
   $('#message').text('Sign Up failed :(')
   // $('form').trigger('reset')
   // console.log(store)

 ```
 this ui. function holds the succes and failur messages
 we need to create this function for all game and Athentication forms

5.  we need to create  style example for boards is use like this

```css

.board-grid {
  align-items: center;
  background: $green;
  background-color: $secondary;
  border: 10px solid $black;
  border-radius: 50px;
  color: $yellow;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 300%vh;
}
```
