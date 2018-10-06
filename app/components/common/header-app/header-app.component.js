(function() {
    'use strict';
    var headerApp = {
        bindings: {},
        controller: 'HeaderAppController',
        templateUrl: 'app/components/common/header-app/header-app.html'
    };

    angular.module('app')
        .component('headerApp', headerApp);
})();