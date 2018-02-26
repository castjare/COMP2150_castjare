var soap = require('soap')

// Use WSDL link supplied by the sevice
var url = 'http://www.webservicex.net/ConvertTemperature.asmx?WSDL'

var args = {Temperature: 0, FromUnit: 'degreeCelsius', ToUnit: 'degreeFahrenheit'}

soap.createClient(url, (err, client) => {
    client.ConvertTemp(args, (error, result) => {
        if(error) {
            console.error(error)
        } else {
            console.log("The temp. after conversion is " + result.ConvertTempResult + "F.")
        }
    })
})