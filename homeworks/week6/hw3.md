## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

語意化的標籤是在課程中比較少介紹的部分
```javascript=
<time>：顯示日期時間。
<main>：網頁的主要內容。
<article>：一篇文章內容。
```

## 請問什麼是盒模型（box modal）

指的是元素在 HTML 所佔的大小由外至內： margin -> border -> padding -> element 所組成。
假設元素本體：如下

```css=
  height: 100px;
  width: 100px;
  margin: 10px;
  border: 10px;
  padding: 10px;
```
那在 HTML 中所佔的實際 
height: 160px`
width: 160px


## 請問 display: inline, block 跟 inline-block 的差別是什麼？

* inline：會依照畫面的寬度，把元素排在同一行。
* block：元素不論寬度多少，都會佔去一整行。
* inline-block：雖然元素本身屬性為 block，但能讓 block 像 inline 元素一樣，數個排在同一行內。



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

* static：HTML 預設排列方式，由左至右，由上至下依序排列。
* relative：元素本身排列的位置和 static 相同，可透過 css ，以本身的位置為定位進行元素在畫面中的移動。
* absolute：元素跳出 HTML 本身的排序，會對齊前一個非 static 的元素。前一個如為 static 物件，則會往父層繼續找。
* fixed：元素跳出 HTML 本身的排序。並對瀏覽器的視窗進行對齊。