"use strict";

var Router= require('koa-router');

var ctrl = require('../controllers/index');

module.exports=function(app){
    var router = new Router();

    router.get('/test/test1', ctrl.default.index);

    router.get('/test/test2', ctrl.default.index);
    router.get('/test/test3', ctrl.default.index);
    router.get('/test/angular1', ctrl.default.index);
    router.get('/test/testCanvas', ctrl.default.index);

    return router.middleware();
}

