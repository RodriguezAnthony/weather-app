const forecast = require('./utils/forecast')

const city = process.argv[2]

if(!city) {
    console.log('Please provide a city')
} else {
    forecast(city, (error, data) => {
        if(error) return console.log(error)
        console.log(data)
    })
}