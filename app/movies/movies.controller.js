(function  () {
	"use strict";
	angular.module("app")
        .controller("MoviesController", MoviesController);
        
    /** @ngInject */
    function MoviesController($timeout, movieList, genreList, MoviesService) {
        var ctrl = this;

        /**
         * VARIABLES
         */
        ctrl.movies = movieList.data.results;
        ctrl.genres = genreList.data.genres;
        ctrl.showMessage = false;

        /**
         * DECLARED FUNCTIONS
         */
        ctrl.searchByQuery = searchByQuery;
        ctrl.searchByYear = searchByYear;

        /**
         * FUNCTIONS
         */
        function searchByQuery(event) {
            ctrl.movies = [];
            MoviesService.searchByQuery(event).then(function(response) {
                ctrl.movies = response.data.results;
                ctrl.showMessage = (ctrl.showMessage.lenth > 0 ) ? false : true;
            }).catch(function(error) {
                alert('Error: ', error);
            });
        }

        function searchByYear(event) {
            ctrl.movies = [];
            MoviesService.searchByYear(event).then(function(response) {
                ctrl.movies = response.data.results;
                ctrl.showMessage = (ctrl.showMessage.lenth > 0 ) ? false : true;
            }).catch(function(error) {
                alert('Error: ', error);
            });
        }
	};

})();