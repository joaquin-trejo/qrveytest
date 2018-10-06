(function() {
    'use strict';
    var filterApp = {
        bindings: {},
        controller: 'FilterAppController',
        templateUrl: 'app/components/common/filter-app/filter-app.html'
    };

    angular.module('app')
        .component('filterApp', filterApp);
})();