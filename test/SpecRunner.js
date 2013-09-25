/*global require,expect */
require.config({
//    baseUrl: '/scripts',
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore',
        'backbone.localStorage': '../bower_components/Backbone.localStorage/backbone.localStorage',
        'mocha': '../lib/mocha/mocha',
        'chai': '../lib/chai',
        'expect': '../lib/expect',
        'models': 'app/models',
        'collections': 'app/collections',
        'views': 'app/views',
        'routes': 'app/routes'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'chai-jquery': ['jquery', 'chai']
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});


require(['require', 'chai', 'mocha', 'jquery'], function (require, chai) {
    // Chai
    expect = chai.expect;


    /*globals mocha */
    mocha.setup('bdd');

    require([
        '/spec/testen.js',
        '/spec/models/turnering.spec.js',
        '/spec/collections/turnering.spec.js'
    ], function (require) {
        mocha.run();
    });

});

