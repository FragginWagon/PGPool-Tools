(function ()
{
  'use strict';
  
  angular
  .module('app.server-account-upload', [])
  .config(config);
  
  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
  {
    // State
    $stateProvider
    .state('app.server-account-upload', {
      url    : '/server-account-upload',
      views  : {
        'content@app': {
          templateUrl: 'app/main/components/server-account-upload/server-account-upload.html',
          controller : 'ServerAccountUploadController as vm'
        }
      }
    });
    
    // Translation
    $translatePartialLoaderProvider.addPart('app/main/components/server-account-upload');
    
    msNavigationServiceProvider.saveItem('pokemon-go.server-account-upload', {
      title    : 'Account Upload',
      icon     : 'icon-tile-four',
      state    : 'app.server-account-upload',
      /*stateParams: {
		  'param1': 'page'
	   },*/
      translate: 'SERVER_ACCOUNT_UPLOAD.SERVER_ACCOUNT_UPLOAD_NAV',
      weight   : 2
    });
  }
})();
