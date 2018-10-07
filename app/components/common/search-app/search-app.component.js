(function() {
    'use strict';
    var searchApp = {
        bindings: {
            onSearch: '&'
        },
        controller: 'SearchAppController',
        templateUrl: 'app/components/common/search-app/search-app.html'
    };

    angular.module('app')
        .component('searchApp', searchApp);
})();