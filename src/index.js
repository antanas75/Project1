const path = require("path");

function helloWorld(x = 10, y = 10) {
    console.log("Current folder: " + path.resolve(".") + '. Sum:' + (x + y).toString());
    return (x + y);
}

helloWorld();          // Logs 'Hello world'

module.exports = {
    helloWorld
}

