module.exports = createConfig;
module.exports['@singleton'] = true;

function createConfig() {

    return {
        port: '3000',
        test: {
            reporters: {
                development: {
                    mocha: 'spec',
                    istanbul: ['text', 'text-summary']
                },
                teamcity: {
                    mocha: 'mocha-teamcity-reporter',
                    istanbul: ['html', 'teamcity']
                }
            }
        }
    };
}
