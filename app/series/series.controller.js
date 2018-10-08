(function  () {
	"use strict";
	angular.module("app")
        .controller("SeriesController", SeriesController);
        
    /** @ngInject */
    function SeriesController(serieList, genreList, SeriesService) {
		var ctrl = this;

		/**
		 * VARIABLES
		 */
		ctrl.series = serieList.data.results;
		ctrl.genres = genreList.data.genres;
		ctrl.showMessage = false;
		ctrl.currentPage = 1;

		/**
		 * DECLARED FUNCTIONS
		 */

		ctrl.searchByQuery = searchByQuery;
		ctrl.searchByYear = searchByYear;
		ctrl.searchByGenre = searchByGenre;
		ctrl.searchByPage = searchByPage;

		/**
		 * FUNCTIONS
		 */
		
		function searchByQuery(event) {
            ctrl.series = [];
            SeriesService.searchByQuery(event).then(function(response) {
                ctrl.series = response.data.results;
                ctrl.showMessage = (ctrl.series.length > 0 ) ? false : true;
            }).catch(function(error) {
                alert('Error: ', error);
            });
		}
		
		function searchByYear(event) {
            ctrl.series = [];
            SeriesService.searchByYear(event).then(function(response) {
                ctrl.series = response.data.results;
                ctrl.showMessage = (ctrl.series.length > 0 ) ? false : true;
            }).catch(function(error) {
                alert('Error: ', error);
            });
        }

        function searchByGenre(event) {
            ctrl.series = [];
            SeriesService.searchByGenre(event).then(function(response) {
                ctrl.series = response.data.results;
                ctrl.showMessage = (ctrl.series.length > 0 ) ? false : true;
            }).catch(function(error) {
                alert('Error: ', error);
            });
		}
		function searchByPage(event) {
            ctrl.series = [];
            SeriesService.getSeries(event).then(function (response) {
                ctrl.series = response.data.results;
                ctrl.showMessage = (ctrl.series.length > 0 ) ? false : true;
            }).catch(function (error) {
                alert('Error: ', error);
            });
        };
	};

})();