### 前後端的差異

#### 簡單的區分：與瀏覽器操作有關的部分為前端，瀏覽器以外的處理為後端


>假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. google 首頁 按下搜尋"JavaScript"。
2. PC 會先詢問 DNS google.com.tw 的 IP 是多少，DNS 並將查到的結果回傳。
3. 依 DNS 回傳的 IP 向 Server 送出查詢"JavaScript"的 Request。
4. Server 收到查詢的"Request"後，會向資料庫查詢是否有符合的資料。再依查詢的結果發出 Response 傳送回 PC 端。  
5. 瀏覽器收到 Response 後，把資料解析之後呈現在畫面上。



### 常用 command 介紹

#### df 
> report file system disk space usage

顯示磁碟區的資料使用狀態
使用時通常會加上 -h ，會把資料單位轉換成比較容易閱讀的格式 ex:GB 。


#### mount
> mount - mount a filesystem
可以對檔案系統進行掛載、取消掛載與查詢掛載狀況等功能。


#### ssh
>ssh — OpenSSH SSH client (remote login program)
一種純文字的遠端加密連線工具。