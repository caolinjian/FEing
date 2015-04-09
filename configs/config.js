"use strict";

var evn = process.env.NODE_ENV || 'development';
var path = require('path');
var os = require('os');


var Config = {
    'development': {
        port: 3010,
        globalPageData: {
            cdn: '/'
        }
    },
    'production': {
        port: 3010,
        globalPageData: {
            // cdn: 'http://static1.aidingmao.com/dist_boss/v19/',
            cdn: '/'
        }
    }
};

Config[evn].evn = evn;
Config[evn].root = path.resolve(__dirname, '..');

module.exports = Config[evn];