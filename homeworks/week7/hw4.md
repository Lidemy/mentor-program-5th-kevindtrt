## 什麼是 DOM？
DOM(Document Object Model)
簡單的來說就是把HTML 建立為一個類似 Object 架構的樹狀結構檔案格式。可以透過這個架構找到 HTML 中的各種元素。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
傳遞順序如下
1. 捕獲
    > 從 document 開始到 target 的階段
2. target
3. 冒泡
    > 從 target 返回 document 的階段
這上述的整個流程中，都能夠捕捉到被觸發的動作。



## 什麼是 event delegation，為什麼我們需要它？
由於程式的執行是由上往下依序執行。後來因程式執行所增加的元素，無法被加上 Listener 。
此外，當有很多功能相同的元素需要被觸發時，可以透過 event delegation 的方式來簡化程式碼的內容。


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

1. enent.preventDefault()
    > 功能為停止該元素的預設功能。
    > 如 intput submit 被觸發後的預設動作為送出表單。
    > 使用 preventDefault() 可以強制停止送出表單的動作被觸發。 


2. enent.stopPropagation()
    > 功能為停止事件冒泡的動作
    > 假設觸發的動作為 click A，在冒泡的流程中也有其他 Listener B 在監聽 click，若 A 並不希望在冒泡階段被觸發，則可以使用 stopPropagation()在 click A 被觸發後就中斷冒泡的流程。