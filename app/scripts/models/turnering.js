/*global define, require*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        TurneringModel;
    require('backbone.localStorage');

    TurneringModel = Backbone.Model.extend({
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