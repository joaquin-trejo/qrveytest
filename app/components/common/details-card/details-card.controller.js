(function() {
    'use strict';
    angular.module('app')
        .controller('DetailsCardController', DetailsCardController);

    /** @ngInject */
    function DetailsCardController($scope, $state, appService) {
        var vm = this;

        /**** VARIABLES ****/
        vm.favoritosArray = [];
        vm.currentState = $state.$current.name;

        /**** DECLARED FUNCTIONS ****/
        vm.$onInit = onInit;
        vm.getTrailer = getTrailer;
        vm.addFavorites = addFavorites;
        vm.getGenres = getGenres;

        /**** FUNCTIONS ****/
        function onInit() {
            vm.dataFirstColumn = vm.movieFirstColumn;
            vm.dataSecondColumn = vm.movieSecondColumn;
            vm.genres = vm.genreList;
        }

        function getTrailer(data) {
            $scope.$emit('onGetMovieTrailer', data);
        }

        function addFavorites(favorito) {
            favorito.state = vm.currentState;
			appService.addFavoritos(favorito);
        }
        
        function getGenres(genreIds) {
			var setGenre = [];
			genreIds.forEach(function (id) {
				vm.genres.find(function (genre) {
					if (id == genre.id) setGenre.push(genre.name + " ");
				});
			});

			return setGenre;
		}
    }
})();
