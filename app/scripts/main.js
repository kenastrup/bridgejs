/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
//        'backbone.localStorage': {
//            deps: ['backbone'],
//            exports: 'Backbone'
//        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        'backbone.localStorage': '../bower_components/Backbone.localStorage/backbone.localStorage',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars'
    }
});

require([
    'backbone',
    'routes/bridge'
], function (Backbone, BridgeRouter) {
    Backbone.history.start();
    new BridgeRouter();
});
