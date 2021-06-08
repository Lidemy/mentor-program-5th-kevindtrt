const request = require('request')

const fn = process.argv
const apiEndPoint = 'https://restcountries.eu/rest/v2/name/'

request(
  apiEndPoint + fn[2], (err, response, body) => {
    if (err) {
      console.log('error =', err)
      return
    }

    if (response.statusCode === 404) {
      console.log('查無資料')
      return
    }

    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
    }

    for (let i = 0; i < data.length; i++) {
      console.log('============')
      console.log('國家：', data[i].name)
      console.log('首都：', data[i].capital)
      console.log('貨幣：', data[i].currencies[0].code)
      console.log('國碼：', data[i].callingCodes[0])
    }
  }
)
