"use strict";

module.exports = {
    index: function*(next) {
        var path = this.url;
        this.appResponse({
            json: {},
            html: {
                path: path,
                data: {
                    globalPageData:G.C.globalPageData
                }
            }
        });
    }
}