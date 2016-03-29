"use strict";

module.exports = function(app) {
    function logger(format) {
        format = format || ':method --> ":url"';

        return function*(next) {
            var str = format
                .replace(':method', this.method)
                .replace(':url', this.url);
            console.log(str);

            yield *next;
        }
    }
    app.use(logger());
};
