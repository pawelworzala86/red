const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()


app.use('/source', express.static(path.join(__dirname, 'source')));
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
    const html = fs.readFileSync('./public/index.html').toString()
    res.send(html)
})

app.listen(3000)