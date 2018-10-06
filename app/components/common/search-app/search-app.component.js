(function() {
    'use strict';
    var searchApp = {
        bindings: {},
        controller: 'SearchAppController',
        templateUrl: 'app/components/common/search-app/search-app.html'
    };

    angular.module('app')
        .component('searchApp', searchApp);
})();