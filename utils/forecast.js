const request = require('postman-request')




const forecast = (city, callback) => {
    const weatherKey = '03f096a695b476496571bd7ec75e20ba'
    const url = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${city}&units=f`

    request({ url: url, json: true}, (error, { body }) =>{
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.success === false) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `It is currently ${body.current.temperature} in ${city}`)
        }
    })
}

module.exports = forecast