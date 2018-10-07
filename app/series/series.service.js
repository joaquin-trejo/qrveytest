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
            searchByQuery: searchByQuery
        }

        return service;

        /**
         * FUNCTIONS
         */

        function getSeries() {
            return $http.get(APIMovieDb.APIIndex + '/discover/tv?api_key=' + APIMovieDb.Key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
        }

        function getGenres() {
            return $http.get(APIMovieDb.APIIndex + '/genre/tv/list?api_key=' + APIMovieDb.Key + '&language=en-US');
        }

        function searchByQuery(query) {
            return (query.length > 0) ? $http.get(APIMovieDb.APIIndex + '/search/tv?api_key=' + APIMovieDb.Key + '&language=en-US&query=' + query + '&page=1&include_adult=false') : service.getSeries();
        }
    }
})();