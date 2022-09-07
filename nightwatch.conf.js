require('dotenv').config();
const chromedriver = require('chromedriver');

module.exports = {
    src_folders: ['tests'],
    page_objects_path: './lib/pages',
    //custom_commands_path : 'lib/custom-commands',
    //custom_assertions_path : 'lib/custom-assertions'

    webdriver: {
        port: 9515,
        server_path: chromedriver.path,
        start_process: true,
        cli_args: [
            "--no-sandbox",
            '--port=9515'
        ]
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                alwaysMatch: {
                    acceptInsecureCerts: true
                },
                browserName: 'chrome',
                chromeOptions: {
                    w3c: false,
                    args: [
                        "window-size=1280,800"                       
                    ]
                }
            },

            launchUrl: 'http://localhost:8080/',

            globals: {
                // NIGHTWATCH_VERSION is defined as an environment variable (.env files are supported also)
                nightwatchVersion: '${NIGHTWATCH_VERSION}'
            }
        }
    }
};
