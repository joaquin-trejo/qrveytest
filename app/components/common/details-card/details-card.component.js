(function() {
    'use strict';
    var detailsCard = {
        bindings: {
            genreList: '<',
            movieFirstColumn: '<',
            movieSecondColumn: '<'
        },
        controller: 'DetailsCardController',
        templateUrl: 'app/components/common/details-card/details-card.html'
    };

    angular.module('app')
        .component('detailsCard', detailsCard);
})();