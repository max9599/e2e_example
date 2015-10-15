exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './src/webapp/test/home.spec.js' // array testide spekidest
    ],
    baseUrl: 'http://127.0.0.1:8887/', // rakenduse url
    framework: 'jasmine2'
};