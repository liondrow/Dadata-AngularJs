(function () {
    'use strict';
    angular
        .module('app.directives') //your application
        .directive('dadata', ["__env", dadata]);

    /* @ngInject */
    function dadata() {
        function link (scope, element) {
            $(element).suggestions({
                token: __env.dadataToken,
                type: scope.type.toUpperCase(),
                bounds: scope.bounds,
                constraints: angular.element(document.getElementById(scope.constraints)),
                onSelect: function (suggestion) {

                    // do something ...

                    /* For example: */
                    //  if(scope.type === 'BANK'){
                    //      scope.value = suggestion.data.bic;
                    //  }
                    //  if(scope.type === 'PARTY'){
                    //      scope.value = suggestion.data.inn;
                    //  }
                    //  if(scope.type === 'ADDRESS'){
                    //      scope.value = suggestion.value;
                    //  }

                    scope.data = suggestion.data;
                    scope.$apply();
                },
                onSelectNothing: function() {
                    // do something...

                    /* For example: */
                    // scope.data = {};
                }
            });
        }
        return {
            restrict: 'A',
            link: link,
            scope: {
                type: '@ddtType',  // @string Suggestion type
                bounds: '@ddtBounds', // @string  Part of the granular tip
                constraints: '@ddtConstraints',  // @string Id of the parent suggestion element
                value: '=ngModel',  // @string  Add selected value to your ng-model
                data: '=ddtModel' // @string  Add suggestion object
            }
        };
    }
})();