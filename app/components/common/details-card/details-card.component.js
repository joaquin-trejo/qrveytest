(function() {
    'use strict';
    var detailsCard = {
        bindings: {
            details: '<',
            favoritesHtml: '<',
            current: '@'
        },
        controller: 'DetailsCardController',
        templateUrl: 'app/components/common/details-card/details-card.html'
    };

    angular.module('app')
        .component('detailsCard', detailsCard);
})();