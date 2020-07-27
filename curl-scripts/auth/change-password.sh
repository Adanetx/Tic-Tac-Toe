# curl "https://tic-tac-toe-api-production.herokuapp.com/change-password\
# --include \
#  --request PATCH \
#  --header "Authorization: Bearer ${TOKEN}" \
#  --header "Content-Type: application/json" \
#  --data '{
#      "passwords": {
#        "old": "'"${OLDPW}"'",
#        "new": "'"${NEWPW}"'"
#      }
#    }'
#
#  ech
API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/change-password"

curl "${API}${URL_PATH}/" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
