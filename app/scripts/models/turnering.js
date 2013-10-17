/*global define*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        TurneringModel;
    require('backbone.localStorage');

    TurneringModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('TurneringCollection'),

        defaults: {
            navn: '',
            dato: '',
            antallSpill: 0,
            antallPar: 0
        }
    });

    return TurneringModel;
});