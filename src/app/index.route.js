(function () {
	'use strict';
	
	angular
	.module('fuse')
	.config(routeConfig);
	
	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider, $locationProvider, msNavigationServiceProvider) {
		$locationProvider.html5Mode(true);
		
		$urlRouterProvider.otherwise('/server-account-upload');
		
		/**
		 * Layout Style Switcher
		 *
		 * This code is here for demonstration purposes.
		 * If you don't need to switch between the layout
		 * styles like in the demo, you can set one manually by
		 * typing the template urls into the `State definitions`
		 * area and remove this code
		 */
			// Inject $cookies
		var $cookies;
		
		angular.injector(['ngCookies']).invoke([
			'$cookies', function (_$cookies) {
				$cookies = _$cookies;
			}
		]);
		
		// Get active layout
		// TODO: Change this to one of the below
		var layoutStyle = 'contentOnly'; // $cookies.get('layoutStyle') || 'verticalNavigation';
		// use this later on as I add new modules to this - verticalNavigationFullwidthToolbar2
		var layouts = {
			verticalNavigation: {
				main: 'app/core/layouts/vertical-navigation.html',
				toolbar: 'app/main/shared/toolbar/layouts/vertical-navigation/toolbar.html',
				navigation: 'app/main/shared/navigation/layouts/vertical-navigation/navigation.html'
			},
			verticalNavigationFullwidthToolbar: {
				main: 'app/core/layouts/vertical-navigation-fullwidth-toolbar.html',
				toolbar: 'app/main/shared/toolbar/layouts/vertical-navigation-fullwidth-toolbar/toolbar.html',
				navigation: 'app/main/shared/navigation/layouts/vertical-navigation/navigation.html'
			},
			verticalNavigationFullwidthToolbar2: {
				main: 'app/core/layouts/vertical-navigation-fullwidth-toolbar-2.html',
				toolbar: 'app/main/shared/toolbar/layouts/vertical-navigation-fullwidth-toolbar-2/toolbar.html',
				navigation: 'app/main/shared/navigation/layouts/vertical-navigation-fullwidth-toolbar-2/navigation.html'
			},
			horizontalNavigation: {
				main: 'app/core/layouts/horizontal-navigation.html',
				toolbar: 'app/main/shared/toolbar/layouts/horizontal-navigation/toolbar.html',
				navigation: 'app/main/shared/navigation/layouts/horizontal-navigation/navigation.html'
			},
			contentOnly: {
				main: 'app/core/layouts/content-only.html',
				toolbar: '',
				navigation: ''
			},
			contentWithToolbar: {
				main: 'app/core/layouts/content-with-toolbar.html',
				toolbar: 'app/main/shared/toolbar/layouts/content-with-toolbar/toolbar.html',
				navigation: ''
			}
		};
		// END - Layout Style Switcher
		
		// State definitions
		$stateProvider
		.state('app', {
			abstract: true,
			views: {
				'main@': {
					templateUrl: layouts[layoutStyle].main,
					controller: 'MainController as vm'
				},
				'toolbar@app': {
					templateUrl: layouts[layoutStyle].toolbar,
					controller: 'ToolbarController as vm'
				},
				'navigation@app': {
					templateUrl: layouts[layoutStyle].navigation,
					controller: 'NavigationController as vm'
				}//,
				// 'quickPanel@app': {
				// 	templateUrl: 'app/main/shared/quick-panel/quick-panel.html',
				// 	controller: 'QuickPanelController as vm'
				// }
			}
		});
		
		// Navigation
		msNavigationServiceProvider.saveItem('pokemon-go', {
			title : 'POKEMON GO',
			group : true,
			weight: 1
		});
		
		// Navigation
		// msNavigationServiceProvider.saveItem('fuse', {
		// 	title : 'DASHBOARD',
		// 	group : true,
		// 	weight: 2
		// });
		
		// Navigation
		// msNavigationServiceProvider.saveItem('external', {
		// 	title : 'EXTERNAL',
		// 	group : true,
		// 	weight: 2
		// });
		
		// msNavigationServiceProvider.saveItem('external.dashboard', {
		// 	title    : 'Dashboard',
		// 	icon     : 'icon-tile-four',
		// 	state    : 'app.dashboard',
		// 	/*stateParams: {
		// 	 'param1': 'page'
		// 	 },*/
		// 	translate: 'DASHBOARD.DASHBOARD_NAV',
		// 	weight   : 1
		// });
	}
	
})();
