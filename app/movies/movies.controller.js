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
        ctrl.videoKey = 'https://youtu.be/OJuofs4D5_w';

        /**
         * DECLARED FUNCTIONS
         */
        ctrl.searchByQuery = searchByQuery;
        ctrl.searchByYear = searchByYear;
        ctrl.searchByGenre = searchByGenre;
        ctrl.searchByPage = searchByPage;

        /**
         * FUNCTIONS
         */
        function searchByQuery(event) {
            ctrl.movies = [];
            MoviesService.searchByQuery(event).then(function(response) {
                ctrl.movies = response.data.results;
                ctrl.showMessage = (ctrl.movies.length > 0 ) ? false : true;
            }).catch(function(error) {
                alert('Error: ', error);
            });
        }

        function searchByYear(event) {
            ctrl.movies = [];
            MoviesService.searchByYear(event).then(function(response) {
                ctrl.movies = response.data.results;
                ctrl.showMessage = (ctrl.movies.length > 0 ) ? false : true;
            }).catch(function(error) {
                alert('Error: ', error);
            });
        }

        function searchByGenre(event) {
            ctrl.movies = [];
            MoviesService.searchByGenre(event).then(function(response) {
                ctrl.movies = response.data.results;
                ctrl.showMessage = (ctrl.movies.length > 0 ) ? false : true;
            }).catch(function(error) {
                alert('Error: ', error);
            });
        }

        function searchByPage(event) {
            ctrl.movies = [];
            MoviesService.getMovies(event).then(function (response) {
                ctrl.movies = response.data.results;
                ctrl.showMessage = (ctrl.movies.length > 0 ) ? false : true;
            }).catch(function (error) {
                alert('Error: ', error);
            });
        };
	};

})();