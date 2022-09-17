const express = require('express')
const path = require('path')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))


app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Anthony R'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Anthony R'
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        helpText: 'Some helpful text'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'New York'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})