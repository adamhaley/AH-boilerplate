requirejs.config({

    // Defines the base URL for Javascript files
    // The URL is relative to the main index.html page
    baseUrl: 'js/'

    // Defines aliases for common Javascript files/modules
    , paths: {
		'jquery': 'libs/jquery/jquery.min'
		, 'underscore': 'libs/underscore/underscore'
		, 'backbone': 'libs/backbone/backbone'
		, 'mustache': 'libs/mustache/mustache'
		, 'templates': '../templates'	
		, 'sinon': 'libs/sinon/sinon-1.3.4'
        , 'jasmine': 'libs/jasmine/jasmine'
        , 'jasmineHtml': 'libs/jasmine/jasmine-html'
	}
	
	, shim: {
		'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
        , 'jasmineHtml': ['jasmine']
		, 'router': ['backbone', 'underscore', 'mustache','jasmineHtml']
		
	}

});

// Activates router module
require(['router'], function() { });
