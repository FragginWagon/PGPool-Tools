(function () {
	'use strict';
	
	angular
	.module('app.dashboard')
	.controller('DashboardController', SampleController);
	
	/** @ngInject */
	function SampleController(/*FolderData*/) {
		var vm = this;
		
		// Variables
		vm.title = 'Dashboard';
		
		// Data
		// vm.folders = FolderData
		
		/**/// .map(function (folder) {
		// 	return {
		// 		"title": '',
		// 		"event": folder,
		// 		"media": {
		// 			"image": {
		// 				"src": "http://" + folder + "/favicon.ico",
		// 				"alt": folder
		// 			}
		// 		}
		// 	}
		// });
		//
		
		// Methods
		
		//////////
	}
})();
