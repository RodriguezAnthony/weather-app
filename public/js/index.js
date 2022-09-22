// console.log('client side javascript loaded')

const url = `http://localhost:3000/weather?city=`

fetch(url).then((res) => {
    res.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})