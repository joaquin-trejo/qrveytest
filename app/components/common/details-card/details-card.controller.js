(function() {
    'use strict';
    angular.module('app')
        .controller('DetailsCardController', DetailsCardController);

    /** @ngInject */
    function DetailsCardController(FavoritesService) {
        var ctrl = this;

        /**
         * VARIABLES
         */

        ctrl._details;
        ctrl.styleFav;

        /**
         * DECLARED FUNCTIONS
         */

        ctrl.$onInit = onInit;
        ctrl.addToFavorites = addToFavorites;

        /**
         * FUNCTIONS
         */

        function onInit() {
            ctrl._details = ctrl.details;
            if (ctrl.favoritesHtml) ctrl.styleFav = { color: 'red' };
        }

        function addToFavorites(object) {
            var response = FavoritesService.addToFavorites(object)
            if (response.success) {
                ctrl.styleFav = { color: 'red' };
                alert(response.msg);
            }
            
        }

    }
})();
