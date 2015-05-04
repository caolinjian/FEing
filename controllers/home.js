"use strict";

module.exports = {
    index: function*(next) {
        this.appResponse({
            json: {},
            html: {
                path: 'index',
                data: {
                    globalPageData: G.C.globalPageData,
                    title: 'Hello World!'
                }
            }
        });
    },
    index2: function*(next) {
        this.appResponse({
            json: {},
            html: {
                path: 'index2',
                data: {
                    globalPageData: G.C.globalPageData,
                    title: '首页'
                }
            }
        });
    }
}
