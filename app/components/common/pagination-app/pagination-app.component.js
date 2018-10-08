(function() {
    'use strict';
    var paginationApp = {
        bindings: {
            onSearchPage: '&'
        },
        controller: 'PaginationController',
        templateUrl: 'app/components/common/pagination-app/pagination-app.html'
    };

    angular.module('app')
        .component('paginationApp', paginationApp);
})();