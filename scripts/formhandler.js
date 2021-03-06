(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }

        FormHandler.prototype.addSubmitHandler = function (fn) {
            this.$formElement.on('submit', function (event) {
                event.preventDefault(); // stay on page after pressing submit

                var data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                }); // gets the values from the form, store in data as a dictionary
                console.log(data);
                fn(data);
                this.reset();
                this.elements[0].focus();
            });
        };
    }

    App.FormHandler = FormHandler;
    window.App = App;

})(window);