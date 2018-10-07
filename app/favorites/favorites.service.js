(function() {
    'use strict';
    angular.module('app')
        .service('FavoritesService', FavoritesService);

    /** @ngInject */
    function FavoritesService() {

        /**
         * DECLARED FUNCTIONS
         */

        var service = {
            addToFavorites: addToFavorites,
            getFavorites: getFavorites
        }

        /**
         * VARIABLES
         */

        angular.extend(service, {
            favorites: []
        });

        return service;

        /**
         * FUNCTIONS
         */

        function addToFavorites(object) {
            var objectReturn = {
                success: true,
                msg: "",
                finded: false
            };
            if (service.favorites.length > 0) {
                service.favorites.forEach(function(favoriteObject) {
                    if (favoriteObject.id === object.id) {
                        objectReturn.finded = true;
                    }
                });

                if (!objectReturn.finded) {
                    service.favorites.push(object);
                    objectReturn.msg = "Successfully added to favorites.";
                } else {
                    objectReturn.msg = "Is already added to favorites.";
                }

            } else {
                service.favorites.push(object);
                objectReturn.msg = "Successfully added to favorites.";
            }

            return objectReturn;
        }

        function getFavorites() {
            return service.favorites;
        }
    }
})();