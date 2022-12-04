const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const passwordGenerator = require('./password_generator')

//載入模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//召喚body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//路由設定

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) =>{
  const options = req.body
  const password = passwordGenerator(options)
  res.render('index', { password: password, options: options })
})

//監聽網址
app.listen(port, ()=>{
  console.log(`Express app listening on port ${port}.`)
})

function newFunction() {
  return 'main'
}

