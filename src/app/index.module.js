(function () {
    'use strict';
    
    /**
     * Main module of the PGPool-Tools
     */
    angular
    .module('pgpool-tools', [
        
        // Core
        'app.core',
        
        // Data Models
        'data-models',
        
        // Extras
        'luegg.directives', // Scroll Glue
        
        // Navigation
        'app.navigation',
        
        // Toolbar
        'app.toolbar',
        
        // Quick Panel
        'app.quick-panel',
        
        // Utilities
        'app.utilities',
        
        // Widgets
        'app.widgets',
        
        // Sample
        'app.dashboard',
        
        // Modules
        'app.server-account-upload',
    ]);
})();
