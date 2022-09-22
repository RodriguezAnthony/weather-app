const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast = require('../src/utils/forecast')

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
        name: 'Anthony Rodriguez'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Anthony Rodriguez'
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        helpText: 'Some helpful text',
        title: 'Help',
        name : 'Anthony Rodriguez'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.city) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    forecast(req.query.city, (error, data) => {
        if(error) return res.send({ error })
        
        res.send({
            forecast: `It is currently ${data.current.temperature} in ${data.location.name}`,
            location: data.location.name,
            city: req.query.city
        })
    })


    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'New York',
    //     city: req.query.city
    // })
})



app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anthony Rodriguez',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anthony Rodriguez',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})