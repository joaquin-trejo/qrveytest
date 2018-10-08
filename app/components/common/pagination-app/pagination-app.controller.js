(function() {
    'use strict';
    angular.module('app')
        .controller('PaginationController', PaginationController);

    /** @ngInject */
    function PaginationController() {
        var ctrl = this;

        /**
         * VARIABLES
         */
        ctrl.searchParameter = "";
        ctrl.currentPage = 1;

        /**
         * DECLARED FUNCTIONS
         */
        ctrl.previosPage = previosPage;
        ctrl.nextPage = nextPage;

        /**
         * FUNCTIONS
         */
        function searchPage() {
            ctrl.onSearchPage({searchParameter: ctrl.currentPage});
        }

        function previosPage() {
            if (ctrl.currentPage > 1) ctrl.currentPage = ctrl.currentPage - 1;
            searchPage();
        }

        function nextPage() {
            ctrl.currentPage = ctrl.currentPage + 1;
            searchPage();
        }
    }
})();
