(function() {
    'use strict';
    angular.module('app')
        .controller('FilterAppController', FilterAppController);

    /** @ngInject */
    function FilterAppController() {
        var ctrl = this;

        /**
         * VARIABLES
         */

        ctrl._genres;
        ctrl.currentYear = new Date().getFullYear();
        ctrl.yearsArray = [];

        /**
         * DECLARED FUNCTIONS
         */

        ctrl.$onInit = onInit;
        ctrl.onSelectedYear = onSelectedYear;

        /**
         * FUNCTIONS
         */

        function onInit() {
            ctrl._genres = ctrl.genres;
            buildOptionsInYears();
        }

        function buildOptionsInYears() {
			ctrl.yearsArray.push(new Date().getFullYear() - 1);
			for (var i = 2; i < 20; i++) {
			    ctrl.yearsArray.push(ctrl.currentYear - i);
			}
        }

        function onSelectedYear() {
            ctrl.onSearchByYear({searchParameter: ctrl.year})
        }

    }
})();