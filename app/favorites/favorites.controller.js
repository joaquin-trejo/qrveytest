(function  () {
	"use strict";
	angular.module("app")
        .controller("FavoritesController", FavoritesController);
        
    /** @ngInject */
    function FavoritesController($scope, $sce, favoritoList, genreList, appService) {
		var vm = this;
		/**** VARIABLES ****/
		vm.moviesResult = [];
		vm.genreList = genreList.data.genres;
		vm.years = buildSelectYears();
		vm.moviesResult = buildFavoritosArray();

		/**** DECLARED FUNCTIONS ****/
		vm.getTrailer = getTrailer;

		/**** FUNCTIONS ****/
		function buildFavoritosArray() {
			var favoritosArray = [];
			angular.forEach(favoritoList, function (favorito) {
				favoritosArray.push(favorito);
			});
			return favoritosArray;
		}

		function getTrailer(data) {
			var id = data.id ? data.id : false;
			appService.getTrailer(id, data.state)
				.then(function(result) {
					vm.videoSrc = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + result.data.results[0].key);
				}).catch(function(error) {
					console.log('Error in getTrailer(). error: ', error);
				});
		}

		function buildSelectYears() {
			var year = new Date().getFullYear();
			var range = [];
			range.push(year);
			for (var i = 1; i < 100; i++) {
			    range.push(year - i);
			}
		    return range;
		}

		$scope.$on('onGetMovieTrailer', function(event, data) {
			vm.getTrailer(data);
		});
	};

})();