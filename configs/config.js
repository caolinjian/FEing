"use strict";

var evn = 'development';
var path = require('path');
var os = require('os');


var Config = {
    'development': {
        port: 4010,
        globalPageData: {
            cdn: '/'
        }
    },
    'production': {
        port: 4010,
        globalPageData: {
            cdn: '/'
        }
    }
};

Config[evn].evn = evn;
Config[evn].root = path.resolve(__dirname, '..');

module.exports = Config[evn];
