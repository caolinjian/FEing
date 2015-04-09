"use strict";

module.exports = {
    index: function*(next) {
        this.appResponse({
            json: {},
            html: {
                path: 'index',
                data: {
                    globalPageData:G.C.globalPageData,
                    title: 'Hello World!'
                }
            }
        });
    }
}