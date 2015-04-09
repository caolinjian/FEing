'use strict';

var entrance = document.getElementById('J_requireScript').getAttribute('data-entrance');
entrance = ['./states/'+entrance];
require.config({
    enforceDefine: false,
    deps: entrance
});
