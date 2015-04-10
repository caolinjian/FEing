"use strict";

global.G = {
    C: null, //配置
    R: null, //Render
    M: null //Models
};

var koa = require('koa');
var jade = require('koa-jade');
var session = require('koa-generic-session');
var staticCache = require('koa-static-cache');
var koaBody = require('koa-body');
var onerror = require('koa-onerror');

var app = koa();

G.C = require('./configs/config');

//response time
app.use(function*(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'm');
});

app.use(jade.middleware({
    viewPath: __dirname + '/views/pages',
    debug: true,
    pretty: true
}))

//注入response中间件
require('./middleware/response')(app);

onerror(app, {
    'json': function(err) {
        console.error("41-----error-----");
        console.log(err);
        this.body = {
            success: false,
            message: err.message
        }
    },
    'html': function(err) {
        console.error("49-----error-----");
        console.log(err);
        this.body = {
            message: '服务器错误'
        }
    }
});

app.use(koaBody({
    multipart: true,
    formLimit: '20480kb',
    //文件上传
    formidable: {
        uploadDir: __dirname + '/upload'
    }
}));

require('koa-qs')(app);

app.use(staticCache('./static', {
    maxAge: 24 * 60 * 60
}));

require('./middleware/logger')(app);

require('./routers/index')(app);

app.listen(process.env.VCAP_APP_PORT || 3000);
