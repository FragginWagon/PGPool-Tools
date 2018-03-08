(function () {
    'use strict';
    
    angular
    .module('app.server-account-upload')
    .controller('ServerAccountUploadController', PokemonListController);
    
    /** @ngInject */
    function PokemonListController($scope, $http, $log, $location, $anchorScroll, $mdDialog, api) {
        var vm = this;
        
        // Variables
        vm.title             = 'Upload Accounts';
        vm.fileContent       = '';
        vm.formattedContents = null;
        vm.saveInProgress = true;
        vm.levels = [2, 30];
        vm.selectedLevel = 2;
        
        // Data
        
        // Methods Definitions
        vm.saveContents = saveContents;
        vm.scrollToTop = scrollToTop;
        
        // Initialize
        _init();
        return;
        
        //////////
        
        // Helpers
        function _init() {
            $scope.$watch('vm.fileContent', function (nv, ov) {
                if (nv) {
                    console.log(nv);
                    vm.formattedContents = vm.fileContent.split('\n');
                    console.log(vm.formattedContents);
                }
            });
            
            $scope.$watch('vm.accounts', function (nv, ov) {
                if (nv) {
                    vm.formattedContents = nv.replaceAll('\n\n', '\n').replaceAll(',  ', '\n').replaceAll(', ', '\n').replaceAll(':', ',');
                    vm.formattedContents = vm.formattedContents.split('\n');
                }
                
            });
        }
        
        // Methods
        function saveContents() {
            var uploadList = [];
            if (!vm.formattedContents || vm.formattedContents.length === 0) {
                return;
            }
    
            vm.saveInProgress = true;
            vm.formattedContents.forEach(function (o) {
                var splitList = o.split(',');
                if (splitList.length === 2) {
                    uploadList.push({
                        auth_service: 'ptc',
                        username: splitList[0],
                        password: splitList[1]
                        /**
                         * The below are for using release instead of update
                         */
//                        level: vm.selectedLevel,
//                        banned: false,
//                        shadowbanned: false,
//                        captcha: false
                    });
                }
                else {
                    uploadList.push({
                        auth_service: splitList[0],
                        username: splitList[1],
                        password: splitList[2]
                        /**
                         * The below are for using release instead of update
                         */
//                        level: vm.selectedLevel,
//                        banned: false,
//                        shadowbanned: false,
//                        captcha: false
                    });
                }
            });
            console.log(uploadList);
            api.saveAccounts.save(uploadList, successHandler, errorHandler);
            
            function successHandler(response) {
                console.log('Success -> ', response);
                if (!response.error) {
                    var modal = $mdDialog.show(
                        $mdDialog.alert()
                        .clickOutsideToClose(false)
                        .parent(angular.element(document.body))
                        .title('Success!')
                        .textContent('Save of accounts was successful!')
                        .ariaLabel('Save of accounts was successful!')
                        .ok('Okay!')
                        // .targetEvent(ev)
                    );
    
                    modal.then(function (data) {
                        vm.formattedContents = [];
                        vm.fileContent = null;
                        vm.accounts = null;
                        vm.saveInProgress = false;
    
                        /**
                         * If you have numbra in a container or a web way to restart it can call this
                         * I am using docker to call out to a custom raspberry pi python server to look for my docker container and restart it
                         */
//                        api.restartNumbra.get({}, numbraSuccessHandler, numbraErrorHandler);
                    });
                    
                }
            }
            
            function errorHandler(response) {
                console.log('Failed -> ', response);
                if (response.status !== 200) {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .clickOutsideToClose(false)
                        .parent(angular.element(document.body))
                        .title('Error!')
                        .textContent(response.data)
                        .ariaLabel('Error saving accounts!')
                        .ok('Okay!')
                        // .targetEvent(ev)
                    );
                }
            }
            
            function numbraSuccessHandler(response) {
                console.log(response);
            }
    
            function numbraErrorHandler(response) {
                console.log('Failed -> ', response);
            }
        }
        
        function scrollToTop() {
            $location.hash('server-account-upload');
            $anchorScroll();
        }
    }
    
    String.prototype.replaceAll = function (find, replace) {
        var result = this;
        do {
            var split = result.split(find);
            result = split.join(replace);
        } while (split.length > 1);
        return result;
    };
})();
