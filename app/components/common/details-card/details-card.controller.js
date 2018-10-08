(function() {
    'use strict';
    angular.module('app')
        .controller('DetailsCardController', DetailsCardController);

    /** @ngInject */
    function DetailsCardController($scope, FavoritesService, MoviesService, SeriesService) {
        var ctrl = this;

        /**
         * VARIABLES
         */

        ctrl._details;
        ctrl.styleFav;
        ctrl.currentState;

        /**
         * DECLARED FUNCTIONS
         */

        ctrl.$onInit = onInit;
        ctrl.addToFavorites = addToFavorites;
        ctrl.watchTrailer = watchTrailer;
        ctrl.closeModal = closeModal;

        /**
         * FUNCTIONS
         */

        function onInit() {
            ctrl._details = ctrl.details;
            ctrl.currentState = ctrl.current;
            if (ctrl.favoritesHtml) ctrl.styleFav = { color: 'red' };
        }

        function addToFavorites(object) {
            var response = FavoritesService.addToFavorites(object)
            if (response.success) {
                ctrl.styleFav = { color: 'red' };
                alert(response.msg);
            }
        }

        function watchTrailer(_id) {
            if (ctrl.currentState === 'movies') {
                MoviesService.getTrailer(_id).then(function(response) {
                    ctrl.videoKey = "https://youtu.be/" + response.data.results[0].key;
                    showModal();
                }).catch(function(error) {
                    console.log('Error in getTrailer service: ', error);
                });
            } else {
                SeriesService.getTrailer(_id).then(function(response) {
                    ctrl.videoKey = "https://youtu.be/" + response.data.results[0].key;
                }).catch(function(error) {
                    console.log('Error in getTrailer service: ', error);
                });
            }
        }

        function showModal() {
            // Get the modal
            var modal = document.getElementById('myModal');
            modal.style.display = "block";
        }
          
        function closeModal() {
            // Get the modal
            var modal = document.getElementById('myModal');
            ctrl.videoKey = "";
            modal.style.display = "none";
        }
    }
})();
