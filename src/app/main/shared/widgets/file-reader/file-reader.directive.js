/**
 * Created by gregrjacobs on 2017-05-09.
 */
(function () {
    'use strict';
    
    angular
    .module('widgets.file-reader')
    .directive('fileReader', fileReaderDirective);
    
    function fileReaderDirective() {
        return {
            scope: {
                fileReader: '='
            },
            link: function (scope, element) {
                $(element).on('change', function (changeEvent) {
                    var files = changeEvent.target.files;
                    if (files.length) {
                        var r    = new FileReader();
                        r.onload = function (e) {
                            var contents = e.target.result;
                            scope.$apply(function () {
                                scope.fileReader = contents;
                                scope.testing    = contents;
                            });
                        };
                        
                        r.readAsText(files[0]);
                    }
                });
            }
        };
    }
    
})();
