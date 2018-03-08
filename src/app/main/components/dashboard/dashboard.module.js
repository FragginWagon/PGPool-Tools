(function ()
{
    'use strict';

    angular
        .module('app.dashboard', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.dashboard', {
                url    : '/dashboard',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/components/dashboard/dashboard.html',
                        controller : 'DashboardController as vm'
                    }
                },
                resolve: {
	                /*FolderData: function (api)
	                {
		                return api.folderList.query().$promise;
	                }*/
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/components/dashboard');

        // msNavigationServiceProvider.saveItem('fuse.dashboard', {
        //     title    : 'Dashboard',
        //     icon     : 'icon-tile-four',
        //     state    : 'app.dashboard',
        //     /*stateParams: {
        //         'param1': 'page'
        //      },*/
        //     translate: 'DASHBOARD.DASHBOARD_NAV',
        //     weight   : 1
        // });
    }
})();