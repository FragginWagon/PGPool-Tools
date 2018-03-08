(function ()
{
    'use strict';

    angular
        .module('pgpool-tools')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource, $location)
    {
	
	    var api = {};
	
	    // Base Url
	    if ($location.host() == 'localhost') {
		    // Local
		    api.baseUrl = 'http://CAN_BE_USED_FOR_API_LATER/v1/api/';
	    }
	    else {
		    api.baseUrl = 'https://CAN_BE_USED_FOR_API_LATER/v1/api/';
        }

	    api.saveAccounts = $resource('http://URL_TO_PGPOOL_GOES_HERE/account/update'); // the /update can be changed to release you will need to provide a basic level for the accounts tho
	    api.restartNumbra = $resource('http://URL_TO_CUSTOM_PGNUMBRA_API_GOES_HERE/restart-numbra');
	    
        return api;
    }

})();
