"use strict";

var fs        = require("fs");
var path      = require("path");

module.exports=function(app){
    fs.readdirSync(__dirname).filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        app.use(require(path.join(__dirname, file))());
    })

}

