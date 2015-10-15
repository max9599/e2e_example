var HomePage = function () {
    this.clickButton = function (buttonText) {
        element(by.buttonText(buttonText)).click();
    };
    this.getList = function () {
        return element.all(by.repeater('dataCell in data')).map(function (el) {
            return el.getText();
        })
    }
};

module.exports = HomePage;