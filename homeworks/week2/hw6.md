``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行 function ，讀取陣列參數 [3, 5, 8, 13, 22, 35]
2. 進入第一個迴圈，宣告 i = 0 ，判斷 i 是否小於 arr.length = 6 ,i 累加。
3. 迴圈內判斷　arr[i] 小於等於 = 0，就回傳 'invalid'
    arr[0] 等於 3 ，判斷 <= 0 結果為 false 不執行
    arr[1] 等於 5 ，判斷 <= 0 結果為 false 不執行
    arr[2] 等於 8 ，判斷 <= 0 結果為 false 不執行
    arr[3] 等於 13 ，判斷 <= 0 結果為 false 不執行
    arr[4] 等於 22 ，判斷 <= 0 結果為 false 不執行
    arr[5] 等於 35，判斷 <= 0 結果為 false 不執行
    arr[6] 等於 6 不符合迴圈條件。結束第一個迴圈
4. 進入第二個迴圈，宣告 i = 2，判斷 i 是否小於 arr.length = 6 ,i 累加。
5. 迴圈內判斷 arr[i] 不等於 arr[i-1] + arr[i-2]，就回傳'invalid'
    arr[2] = 8 不等於 arr[2-1] = 5 + arr[2-2] = 3 ，判斷為 fales。繼續執行迴圈。
    arr[3] = 13 不等於 arr[3-1] = 8 + arr[3-2] = 5 ，判斷為 fales。繼續執行迴圈。
    arr[4] = 22 不等於 arr[4-1] = 13 + arr[4-2] = 8 ，判斷為 ture。回傳 'invalid'
6.  結束 function
