import { error } from 'util';

var myModule = require('./06ex_module.js')

var dirPath = 'C://'
var ext = 'sys'

myModule(dirPath, ext, (error, files) => {
    if(error)
    console.log(error)

    files.forEach(element => {
        console.log(element)
    });
})