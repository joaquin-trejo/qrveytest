(function  () {
	"use strict";
	angular.module("app")
        .controller("FavoritesController", FavoritesController);
        
    /** @ngInject */
    function FavoritesController($sce, favoritoList) {
		var ctrl = this;

		/**
		 * VARIABLES
		 */

		ctrl.favorites = favoritoList;

	};

})();