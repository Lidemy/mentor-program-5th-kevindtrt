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

function compare(a, b, p) {
  if (a === b) return 'DRAW'
  // eslint-disable-next-line
  if (p == -1) {
    const tmp = a
    a = b
    b = tmp
  }

  const lengthA = a.length
  const lengthB = b.length

  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B'
  }
  for (let j = 0; j < lengthA; j++) {
    if (a[j] === b[j]) {
      continue
    }
    return a[j] > b[j] ? 'A' : 'B'
  }
}

function solve(lines) {
  const m = Number(lines[0])
  for (let i = 1; i <= m; i++) {
    const [a, b, p] = lines[i].split(' ')
    console.log(compare(a, b, p))
  }
}

// 原本寫的在LIOJ上拿不到AC，但是執行結果也正確。所以就先參考正確解答修正內容。
// function solve(lines) {
//   for (let i = 1; i <= Number(lines[0]); i++) {
//     const tmp = lines[i].split(' ')
//     console.log(compare(Number(tmp[0]), Number(tmp[1]), Number(tmp[2])))
//   }
// }

// function compare(a, b, rule) {
//   if (rule === 1) {
//     if (a - b > 0) {
//       return 'A'
//     } else if (a - b < 0) {
//       return 'B'
//     } else {
//       return 'DRAW'
//     }
//   } else {
//     if (a - b > 0) {
//       return 'B'
//     } else if (a - b < 0) {
//       return 'A'
//     } else {
//       return 'DRAW'
//     }
//   }
// }
