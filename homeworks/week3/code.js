const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(input) {
  /**
   判斷數字的位數
   n 的範圍為 1 ~ 6
   建立一個for loop , from n to m , number
     建立一個 switch 範圍
     1
     10
     100
     1000
     10000
     100000
     1000000

   建立一個 function 把 number 轉成字串 在切割 在還回去
    建立一個 function 把字串帶回來 判斷 水仙花數 回傳 output++ \n

  */

}
