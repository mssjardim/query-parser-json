'use strict';
const assert = require('assert');
module.exports = () => {
    return function (req, res, next) {
        assert.ok(req, 'req is required');
        assert.ok(req.query, 'query is required');
        assert.ok((typeof req.query === 'object'), 'query must be a array');
        for (const key of Object.keys(req.query)) {
            const value = req.query[key];
            req.query[key] = JSON.parse(value);
        }
        next();
    }
}
