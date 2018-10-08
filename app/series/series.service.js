(function() {
    'use strict';
    angular.module('app')
        .service('SeriesService', SeriesService);

    /** @ngInject */
    function SeriesService($http, APIMovieDb) {

        /**
         * DECLARED FUNCTIONS
         */

        var service = {
            getSeries: getSeries,
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

        function getSeries(currentPage) {
            var page = currentPage ? currentPage : '1';
            return $http.get(APIMovieDb.APIIndex + '/discover/tv?api_key=' + APIMovieDb.Key + '&language=en-US&sort_by=popularity.desc&include_null_first_air_dates=false&page=' + page);
        }

        function getGenres() {
            return $http.get(APIMovieDb.APIIndex + '/genre/tv/list?api_key=' + APIMovieDb.Key + '&language=en-US');
        }

        function searchByQuery(query) {
            return (query.length > 0) ? $http.get(APIMovieDb.APIIndex + '/search/tv?api_key=' + APIMovieDb.Key + '&language=en-US&query=' + query + '&page=1&include_adult=false') : service.getSeries();
        }

        function searchByYear(year) {
            return (year) ? $http.get(APIMovieDb.APIIndex + '/discover/tv?api_key=' + APIMovieDb.Key + '&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&primary_release_year=' + year) : service.getSeries();
        }

        function searchByGenre(genre) {
			return (genre) ? $http.get(APIMovieDb.APIIndex + "/discover/tv?api_key="+ APIMovieDb.Key +"&language=en-US&sort_by=popularity.asc&page=1&with_genres=" + genre) : service.getSeries();
        }

        function getTrailer(serieId) {
            return $http.get(APIMovieDb.APIIndex + "/tv/" + serieId + "/videos?api_key="+  APIMovieDb.Key + "&language=en-US");
        }

        function searchByYearGenre(year, genreId) {
            return $http.get(APIMovieDb.APIIndex + "/discover/tv?api_key="+  APIMovieDb.Key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=" + year + "&with_genres=" + genreId);
        }
    }
})();