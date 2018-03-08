(function () {
	'use strict';
	
	angular
	.module('app.pokemon-list')
	.controller('PokemonListController', PokemonListController);
	
	/** @ngInject */
	function PokemonListController($http, $log, api, Papa) {
		var vm = this;
		
		// Variables
		vm.title = 'Pokemon List';
		
		// Data
		_getPokemon();
		
		// Methods Definitions
		vm.getPokemonImage = getPokemonImage;
		vm.filterLogic = filterLogic;
		
		//////////
		
		// Helpers
		function _getPokemon() {
			var Url   = "../app/data/csv/pogo_pokemon.csv";
			$http.get(Url).then(function(response){
				vm.pokemon = Papa.parse(response.data, {
					header: true,
					skipEmptyLines: true
				}).data.filter(function (fp) {
					return parseInt(fp.id) <= 386;
				});
				
				console.log(vm.pokemon);
			});
		}
		
		// Methods
		
		function getPokemonImage(p) {
//			return '../assets/images/pokemon/animated/' + p.identifier + '.gif';
//      return '../assets/images/pokemon/flat/' + p.id + '_flat.png';
            return '../assets/images/pokemon/ingame/' + p.id + '.png';
		}
		
		
		vm.simulateQuery = false;
		vm.isDisabled    = false;
		vm.querySearch   = querySearch;
		vm.selectedItemChange = selectedItemChange;
		vm.searchTextChange   = searchTextChange;
		vm.newState = newState;
		
		function newState(state) {
			alert("Sorry! You'll need to create a Constitution for " + state + " first!");
		}
		
		// ******************************
		// Internal methods
		// ******************************
		/**
		 * Search for states... use $timeout to simulate
		 * remote dataservice call.
		 */
		function querySearch (query) {
			var results = query ? vm.pokemon.filter( createFilterFor(query) ) : vm.pokemon;
			
			return results;
		}
		
		function searchTextChange(text) {
			$log.info('Text changed to ' + text);
		}
		
		function selectedItemChange(item) {
			$log.info('Item changed to ' + JSON.stringify(item));
		}

		/**
		 * Create filter function for a query string
		 */
		function createFilterFor(query) {
			var lowercaseQuery = angular.lowercase(query);
			return filterLogic;
			// function filterFn(state) {
			// 	return (state.identifier.indexOf(lowercaseQuery) ! 0)
			// 		|| (state.id.indexOf(lowercaseQuery) === 0);
			// };
		}
		
		function filterLogic(pokemon) {
			return (pokemon.identifier.indexOf(vm.searchText) !== -1
				|| pokemon.id.indexOf(vm.searchText) !== -1)
			// ({identifier: vm.searchText } || {id: vm.searchText})
		}
		
	}
})();
