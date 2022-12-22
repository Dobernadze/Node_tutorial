const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const routes = require('./routes/index')
const connectDB = require('./database/db')

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(routes)


connectDB().then(() => {
app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})
})