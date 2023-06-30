const route = require('./route');

/**
 * Init the module
 * @param {Object} app [Expressjs App Object]
 */
exports.init = (app) => {
    route.init(app);
};