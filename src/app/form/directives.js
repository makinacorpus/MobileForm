'use strict';

var controllers = require('./controllers');

function detailDirective() {
    return {
        restrict: 'E', // only matches element name, not attribute name or class name
        replace: true,
        template: require('./templates/form-page.html'),
        controller: controllers.FormController
    };
}

module.exports = {
    detailDirective: detailDirective
};