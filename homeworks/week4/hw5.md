## 請以自己的話解釋 API 是什麼
API(Application Programming Interface)
API 就是一種軟體與軟體之間互相溝通的橋樑。
透過預先設計的管道，你可以在這個通道中提供指令的服務，常見的動作有新增、修改與刪除等。透過API這個介面，也可以保護內部的資料直接對外暴露。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
429 Too Many Requests 使用者在給定的時間內傳送了太多的請求。由 server 做出限制。 

505 HTTP Version Not Supported 伺服器不支援，或者拒絕支援在請求中使用的HTTP版本。所使用 HTTP protocol 不被接受，也有可能是受到惡意攻擊。

405 Method Not Allowed
    請求行中指定的請求方法不能被用於請求相應的資源。部分 Method 被 server 拒絕使用。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。



Base URL: https://lidem-restaurant-store.herokuapp.com

| 說明          | Method   | path       | 參數                 |                |
| ------------ | -------- | ---------- | ------------------- | ---------------- |
| 獲取所有餐廳資訊| GET      | /users     | limit:限制回傳資料數量 | /books?limit=5 |
| 獲取單一餐廳資訊| GET      | /users/:id | 無                   | /books/10      |
| 新增          | POST     | /users     | name:店名            | 無              |
| 刪除餐廳       | DELETE   | /users/:id | 無                   | 無              |
| 更改餐廳       | PATCH    | /users/:id | name: 店名            | 無              |

請在header 提供 Client-ID


#### 獲取所有餐廳資訊
```
curl -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
-X GET 'https://lidem-restaurant-store.herokuapp.com/users'
```


#### 獲取單一餐廳資訊
```
curl -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
-X GET 'https://lidem-restaurant-store.herokuapp.com/users/5'
```
#### 新增餐廳
```
curl -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
-d "name=好心甘&manager=小明" \
-X post 'https://lidem-restaurant-store.herokuapp.com/users'
```
#### 刪除餐廳

```
curl -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
-X delete 'https://lidem-restaurant-store.herokuapp.com/users/30'
```
#### 更新餐廳資訊

```
curl -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
-d "name=沒心甘&manager=柯小明" \\
-X patch 'https://lidem-restaurant-store.herokuapp.com/users/20'
```
