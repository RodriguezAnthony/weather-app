const express = require('express')
const path = require('path')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))






app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'New York'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})