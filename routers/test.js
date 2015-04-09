"use strict";

var Router= require('koa-router');

var ctrl = require('../controllers/index');

module.exports=function(app){
    var router = new Router();

    router.get('/test/test1', ctrl.default.index);

    return router.middleware();
}

