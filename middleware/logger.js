"use strict";

module.exports = function(app) {
    function logger(format) {
        format = format || ':method ":url" --> :status';

        return function*(next) {
            var str = format
                .replace(':method', this.method)
                .replace(':url', this.url)
                .replace(':status', this.status);
            console.log(str);

            yield next;
        }
    }
    app.use(logger());
};
