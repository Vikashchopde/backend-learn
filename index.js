
require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req, res) => {
    res.send('vikas chopde');
});

app.get('/login', (req,res) => {
    res.send('<h1>Please login at room rent </h1>');
});

app.get('/twitter', (req,res) => {
    res.send('<h2> you are log in with twitter </h2>')
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})