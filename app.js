const forecast = require('./utils/forecast')



forecast('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data:', data)
})
