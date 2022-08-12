const express = require('express')
const routes = require("./src/routes")
const app = express()
const config = require('config')

const port = config.PORT

app.use(routes)

console.log(config.DB_URL)

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})