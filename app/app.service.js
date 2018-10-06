(function() {
    'use strict';
    angular.module('app')
        .service('appService', appService);

    /** @ngInject */
    function appService($http) {

        /**** VARIABLES ****/
        var baseUrl = "https://api.themoviedb.org/3";
        var apiKey = "5bf861f759ec76ae39d8751638762dbc";
        var favoritosArray = [];

        /**** DECLARED FUNCTIONS ****/
        this.search = search;
        this.searchByYear = searchByYear;
        this.searchByGenre = searchByGenre;
        this.getTrailer = getTrailer;
        this.getSeries = getSeries;
        this.getGenreList = getGenreList;
        this.addFavoritos = addFavoritos;
        this.getFavoritos = getFavoritos;

        /**** FUNCTIONS ****/
        function getGenreList(currentState) {
			return $http.get(baseUrl + "/genre/movie/list?api_key="+ apiKey +"&language=en-US");
        }
        
        function search(parameter, currentState) {
			var state = currentState == "movies" ? "movie" : "tv";
			return $http.get(baseUrl + "/search/"+ state +"?api_key="+ apiKey +"&language=en-US&query="+parameter+"&page=1&include_adult=false");
        }
        
        function searchByYear(year, currentState) {
			var state = currentState == "movies" ? "movie" : "tv";
			return $http.get(baseUrl + "/discover/"+ state+"?api_key="+ apiKey +"&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&primary_release_year=" + year);
        }
        
        function searchByGenre(genre, currentState) {
			return $http.get(baseUrl + "/discover/movie?api_key="+ apiKey +"&language=en-US&sort_by=popularity.asc&page=1&with_genres=" + genre);
        }
        
        function getTrailer(movieID, currentState) {
            var state = currentState == "movies" ? "movie" : "tv";
			return $http.get(baseUrl + "/"+ state +"/" + movieID + "/videos?api_key="+ apiKey +"&language=en-US");
        }
        
        function addFavoritos(favorito) {
            if (favoritosArray.length > 0) {
                favoritosArray.find(function(obj) {
                    if(obj.id !== favorito.id) favoritosArray.push(favorito);
                });
            } else {
                favoritosArray.push(favorito);
            }
        }

        function getFavoritos() {
            return favoritosArray;
        }
        
        function getSeries(parameter) {	
			return $http.get(baseUrl + "/search/movie?api_key="+ apiKey +"&language=en-US&query="+parameter+"&page=1&include_adult=false")
		}
    }
})();