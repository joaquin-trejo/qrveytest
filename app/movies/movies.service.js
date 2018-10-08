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
            searchByYear: searchByYear,
            searchByGenre: searchByGenre,
            getTrailer: getTrailer,
            searchByYearGenre: searchByYearGenre
        }

        return service;

        /**
         * FUNCTIONS
         */

        function getMovies(currentPage) {
            var page = currentPage ? currentPage : '1';
            return $http.get(APIMovieDb.APIIndex + '/discover/movie?api_key=' + APIMovieDb.Key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page);
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

        function searchByGenre(genreId) {
			return (genreId) ? $http.get(APIMovieDb.APIIndex + "/discover/movie?api_key="+ APIMovieDb.Key +"&language=en-US&sort_by=popularity.asc&page=1&with_genres=" + genreId) : service.getMovies();
        }

        function getTrailer(movieId) {
            return $http.get(APIMovieDb.APIIndex + "/movie/" + movieId + "/videos?api_key="+  APIMovieDb.Key + "&language=en-US");
        }

        function searchByYearGenre(year, genreId) {
            return $http.get(APIMovieDb.APIIndex + "/discover/movie?api_key="+  APIMovieDb.Key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=" + year + "&with_genres=" + genreId);
        }
    }
})();