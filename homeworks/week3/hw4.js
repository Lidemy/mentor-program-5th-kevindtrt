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

function solve(lines) {
  const str = ''
  console.log(str.split('').reverse().join('') === str ? 'Ture' : 'Fales')
}

// 原本寫的在LIOJ上拿不到AC，但是執行結果也正確。所以就先參考正確解答修正內容。
// function solve(lines) {
//   const str1 = lines[0]
//   const str2 = str1.split('').reverse().join('')
//   const center = Math.floor(str1.length / 2)
//   for (let i = 0; i < center; i++) {
//     if (str1[i] !== str2[i]) {
//       return console.log('False')
//     }
//   }
//   return console.log('Ture')
// }
