(function() {
	'use strict';
	/** @ngInject */
	function routeConfig($urlRouterProvider, $stateProvider) {
		var movies = {
			name: 'movies',
			url: '/movies',
			templateUrl: 'app/movies/movies.html',
			controller: 'MoviesController as $ctrl',
			resolve: {
				movieList: function(MoviesService) {
					return MoviesService.getMovies();
				},
				genreList: function(MoviesService) {
					return MoviesService.getGenres();
				}
			}
		};
	
		var series = {
			name: 'series',
			url: '/series',
			templateUrl: 'app/series/series.html',
			controller: 'SeriesController as $ctrl',
			resolve: {
				serieList: function(SeriesService) {
					return SeriesService.getSeries();
				},
				genreList: function(SeriesService) {
					return SeriesService.getGenres();
				}
			}
		};
	
		var favorites = {
			name: 'favorites',
			url: '/favorites',
			templateUrl: 'app/favorites/favorites.html',
			controller: 'FavoritesController as $ctrl',
			resolve: {
				favoritoList: function (FavoritesService) {
					return FavoritesService.getFavorites();
				}
			}
		};
	
	   	$stateProvider.state(movies);
	   	$stateProvider.state(series);
	   	$stateProvider.state(favorites);
		$urlRouterProvider.otherwise('movies');
	}

	angular.module("app", [
		'ui.router',
		'ngYoutubeEmbed'
	])
	.config(routeConfig)
	.constant("APIMovieDb", {
        "APIIndex": "https://api.themoviedb.org/3",
        "Key": "5bf861f759ec76ae39d8751638762dbc"
	});
})();


