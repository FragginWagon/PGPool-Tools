(function ()
{
    'use strict';

    angular
        .module('app.pokemon-list', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.pokemon-list', {
                url    : '/pokemon-list',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/components/poke-list/pokemon-list.html',
                        controller : 'PokemonListController as vm'
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
        $translatePartialLoaderProvider.addPart('app/main/components/poke-list');

        msNavigationServiceProvider.saveItem('pokemon-go.pokemon-list', {
            title    : 'Pokemon List',
            icon     : 'icon-tile-four',
            state    : 'app.pokemon-list',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'POKE_LIST.POKE_LIST_NAV',
            weight   : 1
        });
    }
})();