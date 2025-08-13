module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["lib/pages"],
  plugins: [],
  globals_path: "",
  webdriver: {},
  //test_workers: { enabled: true },
  test_settings: {
    default: {
      disable_error_log: true,
      screenshots: {
        enabled: false,
        on_failure: true,
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["window-size=1280,800"],
        },
      },
      webdriver: {
        start_process: true,
        server_path: require("chromedriver").path,
      },
      globals: {
        retryAssertionTimeout: 15000,
        waitForConditionTimeout: 15000,
        abortOnAssertionFailure: false,
        abortOnElementLocateError: false,
      },
    },
    vue: {
      launch_url: "http://localhost:5173",
    },
    react: {
      launch_url: "http://localhost:3000",
    },
    angular: {
      launch_url: "http://localhost:4200",
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          w3c: true,
          args: ["disable-gpu", "headless", "window-size=1920,1080", "no-sandbox", "ignore-certificate-errors", "allow-insecure-localhost"],
        },
      },
      webdriver: {
        start_process: true,
        server_path: require("chromedriver").path,
        cli_args: [
          "disable-gpu",
          "headless",
          "window-size=1920,1080",
          // --verbose
        ],
      },
    },
  },
};
