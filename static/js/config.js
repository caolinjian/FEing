'use strict';

var entrance = document.getElementById('J_requireScript').getAttribute('data-entrance');
entrance = ['./states/' + entrance];
require.config({
    enforceDefine: false,
    deps: entrance,
    paths: {
        angular: '../libs/angular/angular',
        angularResource: '../libs/angular-resource/angular-resource',
        angularRoute: '../libs/angular-route/angular-route',
        angularFire: '../libs/angularfire/dist/angularfire',
        firebase: '../libs/firebase/firebase',
        d3:'../libs/d3/d3.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angularResource: {
            deps: ['angular']
        },
        angularRoute: {
            deps: ['angular']
        },
        angularFire: {
            deps: ['angular', 'firebase']
        },
        d3: {
            exports: 'd3'
        },
    }
});
