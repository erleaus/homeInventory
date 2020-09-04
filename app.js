console.log('server is starting')

const express = require('express')

const app = express()

const server = app.listen(5000, listening)

function listening() {
    console.log('listening . . .')
}

app.use(express.static('public'))

app.get('/search/:help', helped)

function helped(req, res) {
    const data = req.params
    res.send('I love ' + data.help + ' too!')
}