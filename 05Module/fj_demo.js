var fs = require('fs')

//read from a file
fs.readFile('./data.json', (err, data) => {
    if(err)
        return console.error(err)
    console.log(JSON.parse(data));
}) 

var myData = {
    "name" : "Joe",
    "message" : "Hi there!"
}

// write to a file
fs.writeFile('./data.json', JSON.stringify(myData), (error) => {
    if(error)
        return console.error(error)
    console.log('File written successfully.')
})