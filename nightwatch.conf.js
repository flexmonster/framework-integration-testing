// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/

module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    src_folders: ['tests'],
    page_objects_path: ['lib/pages'],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
    //custom_commands_path: ['nightwatch/custom-commands'],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
    //custom_assertions_path: ['nightwatch/custom-assertions'],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
    plugins: [],

    // See https://nightwatchjs.org/guide/concepts/test-globals.html
    globals_path: '',

    webdriver: {},

     test_workers: {
         enabled: true
     },

    test_settings: {
        default: {
            disable_error_log: false,
            launch_url: 'http://localhost:5173',

            screenshots: {
                enabled: false,
                path: 'screens',
                on_failure: true
            },

            desiredCapabilities: {
                browserName: 'chrome'
            },

            webdriver: {
                start_process: true,
                server_path: ''
            },

        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
                    //
                    // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
                    w3c: true,
                    args: [
                        "disable-gpu",
                        "headless",
                        "window-size=1920,1080"
                        //'--no-sandbox',
                        //'--ignore-certificate-errors',
                        //'--allow-insecure-localhost',
                        //'--headless'
                    ]
                }
            },

            webdriver: {
                start_process: true,
                server_path: '',
                cli_args: [
                    "disable-gpu",
                    "headless",
                    "window-size=1920,1080"
                    // --verbose
                ]
            }
        },

    },

};
