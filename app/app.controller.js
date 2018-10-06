(function  () {
	"use strict";
	angular.module("app")
		.controller("AppController", AppController); 
	
	/** @ngInject */
	function AppController($sce, $scope, appService, genreList, $state) {
		var vm = this;

		/**** VARIABLES ****/
		vm.years = buildSelectYears();
		vm.genreList = genreList.data.genres;
		vm.showMessage = false;
		vm.currentState = $state.$current.name;

		/**** DECLARED FUNCTIONS ****/
		vm.search = search;
		vm.selectedYear = selectedYear;
		vm.selectedGenre = selectedGenre;
		vm.getTrailer = getTrailer;
		vm.changedSearch = changedSearch;
		vm.closeIframe = closeIframe;
	
     	/**** FUNCTIONS ****/
		function search() {
			vm.moviesResult = [];
			appService.search(vm.searchParameter.trim(), vm.currentState)
				.then(function(result) {
					vm.moviesResult = result.data.results;
					console.log("vm.moviesResult", vm.moviesResult);
					vm.showMessage = vm.moviesResult.length > 0 ? false : true;			
				}).catch(function(error) {
					console.log('Error in search(). error: ', error);
                });
		}

		function changedSearch() {
			if (vm.searchParameter.trim().length == 0) {
				vm.moviesResult = [];
				vm.showMessage = true;
			}
		}
		
		function selectedYear(year) {
			vm.moviesResult = [];
			appService.searchByYear(year, vm.currentState)
				.then(function(result) {
					vm.moviesResult = result.data.results;
					vm.showMessage = vm.moviesResult.length > 0 ? false : true;
				}).catch(function(error) {
					console.log('Error in searchByYear(). error: ', error);
				});
		}

		function selectedGenre(genre) {
			vm.moviesResult = [];
			var stringGenre = genre ? genre.toString() : false;
			appService.searchByGenre(stringGenre, vm.currentState)
				.then(function(result) {
					vm.moviesResult = result.data.results;
					vm.showMessage = vm.moviesResult.length > 0 ? false : true;
				}).catch(function(error) {
					console.log('Error in searchByGenre(). error: ', error);
				});
		}

		function getTrailer(data) {
			var id = data.id ? data.id : false;
			appService.getTrailer(id, vm.currentState)
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

		function closeIframe() {
			var someIframe = window.parent.document.getElementById('iframe_callback');
			someIframe.parentNode.removeChild(window.parent.document.getElementById('iframe_callback'));
		}

		$scope.$on('onGetMovieTrailer', function(event, data) {
			vm.getTrailer(data);
		});
	}
})();