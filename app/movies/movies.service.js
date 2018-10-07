(function() {
    'use strict';
    angular.module('app')
        .service('MoviesService', MoviesService);

    /** @ngInject */
    function MoviesService($http, APIMovieDb) {

        /**
         * DECLARED FUNCTIONS
         */

        var service = {
            getMovies: getMovies,
            getGenres: getGenres,
            searchByQuery: searchByQuery,
            searchByYear: searchByYear
        }

        return service;

        /**
         * FUNCTIONS
         */

        function getMovies() {
            return $http.get(APIMovieDb.APIIndex + '/discover/movie?api_key=' + APIMovieDb.Key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
        }

        function getGenres() {
            return $http.get(APIMovieDb.APIIndex + '/genre/movie/list?api_key=' + APIMovieDb.Key + '&language=en-US');
        }

        function searchByQuery(query) {
            return (query.length > 0) ? $http.get(APIMovieDb.APIIndex + '/search/movie?api_key=' + APIMovieDb.Key + '&language=en-US&query=' + query + '&page=1&include_adult=false') : service.getMovies();
            
        }

        function searchByYear(year) {
            return (year) ? $http.get(APIMovieDb.APIIndex + '/discover/movie?api_key=' + APIMovieDb.Key + '&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&primary_release_year=' + year) : service.getMovies();
        }
    }
})();