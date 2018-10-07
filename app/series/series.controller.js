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

		/**
		 * DECLARED FUNCTIONS
		 */

		ctrl.searchByQuery = searchByQuery;


		/**
		 * FUNCTIONS
		 */
		
		function searchByQuery(event) {
            ctrl.series = [];
            SeriesService.searchByQuery(event).then(function(response) {
                ctrl.series = response.data.results;
                ctrl.showMessage = (ctrl.showMessage.lenth > 0 ) ? false : true;
            }).catch(function(error) {
                alert('Error: ', error);
            });
        }
		
	};

})();