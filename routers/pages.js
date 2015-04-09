"use strict";

var Router= require('koa-router');

var ctrl = require('../controllers/index');

module.exports=function(app){
    var router = new Router();

    router.get('/', ctrl.home.index);

    return router.middleware();
}

