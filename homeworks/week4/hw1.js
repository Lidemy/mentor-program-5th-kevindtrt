const request = require('request')

const url = 'https://lidemy-book-store.herokuapp.com'

request(
  // eslint-disable-next-line
  url + '/books?_limit=10',
  // eslint-disable-next-line
  function(error, response, body) {
    if (error) {
      console.log('error = ', error)
      return
    }

    let json
    try {
      json = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }

    for (let i = 0; i < json.length; i++) {
      console.log(json[i].id, json[i].name)
    }
  }
)
