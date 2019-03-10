const path = require('path')
const fs = require('fs')
const express = require('express')

const PORT = process.env.PORT || '8081'
const DB_PATH = process.env.DB_PATH || './gifs.json'

const app = express()

app.set('view engine', 'pug')

function getGifs() {
  const json = fs.readFileSync(path.resolve(DB_PATH), 'utf8')
  return JSON.parse(json)
}

app.get('/', (req, res) => {
  res.render('index', { gifs: getGifs() })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
