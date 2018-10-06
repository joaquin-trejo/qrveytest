(function() {
    'use strict';
    angular.module('app')
        .controller('HeaderAppController', HeaderAppController);

    /** @ngInject */
    function HeaderAppController($location) {
        var vm = this;

        //**** VARIABLES ****/
        vm.menuItems = [
            {
                label: 'Movies',
                path: '/movies'
            },
            {
                label: 'Series',
                path: '/series'
            },
            {
                label: 'Favoritos',
                path: '/favoritos'
            }
        ];

        /**** DECLARED FUNCTIONS ****/
        vm.isCurrentPath = isCurrentPath;

        /**** FUNCTIONS ****/
        function isCurrentPath (path) {
            return $location.path() == path;
        }
    }
})();
