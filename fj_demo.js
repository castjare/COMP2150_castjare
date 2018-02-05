var fs = require('fs')

//read from a file
fs.readFile('./data.json', (err, data) => {
    if(err)
        return console.error(err)
    console.log(JSON.parse(data));
}) 