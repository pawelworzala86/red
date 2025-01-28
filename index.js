const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()


app.use('/source', express.static(path.join(__dirname, 'source')));
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/api/landing', function (req, res) {
    const landing = require('./landing.js')
    res.json(landing)
})
app.get('/api/article', function (req, res) {
    const article = require('./article.js')
    res.json(article)
})

app.get('/*', function (req, res) {
    const html = fs.readFileSync('./public/index.html').toString()
    res.send(html)
})

app.listen(3000)