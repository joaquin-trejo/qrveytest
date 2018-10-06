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
				genreList: function (appService) {
					return appService.getGenreList();
				}
			}
		};
	
		var series = {
			name: 'series',
			url: '/series',
			templateUrl: 'app/series/series.html',
			controller: 'SeriesController as $ctrl',
			resolve: {
				genreList: function (appService) {
					return appService.getGenreList();
				}
			}
		};
	
		var favoritos = {
			name: 'favorites',
			url: '/favorites',
			templateUrl: 'app/favorites.html',
			controller: 'FavoritesController as $ctrl',
			resolve: {
				favoritoList: function (appService) {
					return appService.getFavoritos();
				},
				genreList: function (appService) {
					return appService.getGenreList();
				}
			}
		};
	
	   	$stateProvider.state(movies);
	   	$stateProvider.state(series);
	   	$stateProvider.state(favoritos);
		$urlRouterProvider.otherwise('movies');
	}

	angular.module("app", [
		'ui.router'
	])
	.config(routeConfig);
})();


