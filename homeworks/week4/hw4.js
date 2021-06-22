const request = require('request')

const apiEndPoint = 'https://api.twitch.tv/kraken/games/top'
const clientID = 'z402zkqoo9qbce3rbe0rrixr3073vq'

request(
  {
    url: apiEndPoint,
    headers: {
      'Client-ID': clientID,
      // 請問助教， client-ID 如果沒有 '' 包起來的時候，程式執行會有問題，請問是什麼原因。
      //
      // D:\workspace\mentor-program-5th-kevindtrt\homeworks\week4\hw4.js:10
      // Client-ID: 'z402zkqoo9qbce3rbe0rrixr3073vq',
      //       ^
      // SyntaxError: Unexpected token '-'
      //

      Accept: 'application/vnd.twitchtv.v5+json'
    }
  },
  (err, response, body) => {
    if (err) {
      console.log('error = ', err)
      return
    }

    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
    }

    const games = data.top
    for (const game of games) {
      console.log(game.viewers, ' ', game.game.name)
    }
    // console.log(data.top[0].game.name)
  }
)
