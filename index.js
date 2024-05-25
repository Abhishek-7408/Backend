require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req,res)=> {
    res.send('Twitter page')
})


app.get('/login', (req, res) => {
  res.send('<h1>please login</h1>')
})

app.get('/twitter', (req,res)=> {
    res.send('Twitter page')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})