const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup static directory to serve
app.use(express.static(publicDirPath))

// Setup handlebars engine and vies location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


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