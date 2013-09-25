/*global define*/

define([
    'underscore',
    'backbone',
    'backbone.localStorage'
], function (_, Backbone) {
    'use strict';

    var TurneringModel = Backbone.Model.extend({

        localStorage: new Backbone.LocalStorage("TurneringCollection"),

        defaults: {
            navn: "",
            dato: "",
            antall_spill: 0,
            antall_par: 0
        }
    });

    return TurneringModel;
});