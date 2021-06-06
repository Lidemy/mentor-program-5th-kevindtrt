const request = require('request')
const process = require('process')

const url = 'https://lidemy-book-store.herokuapp.com/books'
const fn1 = process.argv[2]
const fn2 = process.argv[3]
const fn3 = process.argv[4]

// node hw2.js list // 印出前二十本書的 id 與書名
// node hw2.js read 1 // 輸出 id 為 1 的書籍
// node hw2.js delete 1 // 刪除 id 為 1 的書籍
// node hw2.js create "I love coding" // 新增一本名為 I love coding 的書
// node hw2.js update 1 "new name" // 更新 id 為 1 的書名為 new name

switch (fn1) {
  case 'list':
    listAll(`${url}?_limit=20`)
    break
  case 'read':
    listOne(`${url}/${fn2}`)

    break
  case 'delete':
    console.log(`${url}/${fn2}`)
    delBook(`${url}/${fn2}`)
    break
  case 'create':
    console.log(`${url}`, fn2)
    addBook(`${url}`, fn2)
    break
  case 'update':
    console.log(`${url}/${fn2}`, fn3)
    updateBook(`${url}/${fn2}`, fn3)
    break
  default:
    console.log('input error')
}

function listAll(url) {
  request(
    url,
    (error, response, body) => {
      if (error) {
        console.log('error = ', error)
        return
      }

      let json
      try {
        json = JSON.parse(body)
      } catch (error) {
        console.log(error)
        return
      }

      for (let i = 0; i < json.length; i++) {
        console.log(json[i].id, json[i].name)
      }
    }
  )
}

function listOne(url) {
  request(
    url,
    (error, response, body) => {
      if (error) {
        console.log('error = ', error)
        return
      }
      let json
      try {
        json = JSON.parse(body)
      } catch (error) {
        console.log(error)
        return
      }

      console.log(json.id, json.name)
    }
  )
}

function addBook(url, name) {
  request.post(
    {
      url,
      form: {
        name
      }
    }

    , (error, response, body) => {
      if (error) {
        console.log('error = ', error)
        return
      }
      if (response.statusCode === 201) console.log('上傳成功')
    }
  )
}

function delBook(url) {
  request.delete(
    url,
    (error, response, body) => {
      if (error) {
        console.log('error = ', error)
        return
      }
      if (response.statusCode === 200) console.log('刪除成功')
      console.log(response.statusCode)
    }
  )
}

function updateBook(url, name) {
  request.patch(
    {
      url,
      form: {
        name
      }
    }
    , (error, response) => {
      if (error) {
        console.log('error = ', error)
        return
      }
      console.log(response.statusCode, '更新成功')
    }
  )
}
