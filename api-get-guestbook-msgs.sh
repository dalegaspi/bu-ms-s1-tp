# this is a convenience script for getting the latest guest messages
# and display as json.
#
# dlegaspi@bu.edu

curl "https://www.subtleimages.com/api/guestbook/messages" | jq .