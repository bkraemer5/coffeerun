(function (window) {
    'use strict';
    var PAYMENT_FORM_SELECTOR = '[data-payment-form="payform"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var paymentFormHandler = new FormHandler(PAYMENT_FORM_SELECTOR);
    var paymentStorage = new DataStore();

    paymentFormHandler.addSubmitHandler(paymentStorage.add.bind(paymentStorage));
    console.log(paymentFormHandler);
})(window);