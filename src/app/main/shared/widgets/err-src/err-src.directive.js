/**
 * Created by gregrjacobs on 2017-05-09.
 */
(function () {
    'use strict';
    
    angular
    .module('widgets.err-src')
    .directive('errSrc', errSrcDirective);
    
    function errSrcDirective() {
        return {
            scope: {
                validImage: '='
            },
            link: function(scope, element, attrs) {
                element.bind('error', function() {
//                    if (attrs.src != attrs.errSrc) {
                        attrs.$set('err-src', false);
//                        scope.validImage = false;
//                    }
//                    scope.validImage = false;
                });
            }
        }
    }
    
})();
