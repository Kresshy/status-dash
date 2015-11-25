module.exports = function () {
    'use strict';

    return function (req, res, next) {
        // if headers were sent than there was a response, so it's probably not 404
        if (res.headersSent) {
            next();
        } else {
            var err = new Error();
            err.message = 'Not found';
            err.status = 404;
            err.stack = null;
            next(err);
        }
    };
};
