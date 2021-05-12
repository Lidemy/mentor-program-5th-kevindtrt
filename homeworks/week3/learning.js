// 第一行 M 為組數
// A int ,B int, K 1 比大, -1 比小

// 先判斷 k
// 再判斷 a b 哪個贏

const a = 1
const b = 2
const rule = -1

if (rule === 1) {
  if (a - b > 0) {
    console.log('winer is A')
  } else if (a - b < 0) {
    console.log('winer is B')
  } else {
    console.log('DRAW')
  }
} else {
  if (a - b > 0) {
    console.log('winer is B')
  } else if (a - b < 0) {
    console.log('winer is A')
  } else {
    console.log('DRAW')
  }
}
