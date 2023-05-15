module.exports = {
    src_folders: ['tests'],
    page_objects_path: ['lib/pages'],
    //custom_commands_path: ['nightwatch/custom-commands'],
    //custom_assertions_path: ['nightwatch/custom-assertions'],
    plugins: [],
    globals_path: '',
    webdriver: {},
    //test_workers: { enabled: true },
    test_settings: {
        default: {
            disable_error_log: true,
            screenshots: {
                enabled: false,
                on_failure: false
            },
            desiredCapabilities: {
                browserName: 'chrome'
            },
            webdriver: {
                start_process: true,
                server_path: ''
            },
            globals:{
                retryAssertionTimeout: 10000
            }
        },
        vue: {
            launch_url: 'http://localhost:5173',
        },
        react: {
            launch_url: 'http://localhost:3000',
        },
        angular: {
            launch_url: 'http://localhost:4200',
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
                    w3c: true,
                    args: [
                        "disable-gpu",
                        "headless",
                        "window-size=1920,1080",
                        "no-sandbox",
                        "ignore-certificate-errors",
                        "allow-insecure-localhost"
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
