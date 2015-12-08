module.exports = requestPromise;
module.exports['@signleton'] = true;
module.exports['@require'] = [
    'config/config'
];

function requestPromise(config) {
    return require('request-promise');
}
