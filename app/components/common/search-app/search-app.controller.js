(function() {
    'use strict';
    angular.module('app')
        .controller('SearchAppController', SearchAppController);

    /** @ngInject */
    function SearchAppController() {
        var ctrl = this;

        /**
         * VARIABLES
         */
        ctrl.searchParameter = "";

        /**
         * DECLARED FUNCTIONS
         */
        ctrl.searchByQuery = searchByQuery;

        /**
         * FUNCTIONS
         */
        function searchByQuery() {
            ctrl.onSearch({searchParameter: ctrl.searchParameter});
        }
    }
})();
