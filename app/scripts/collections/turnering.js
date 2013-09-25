/*global define, require*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        TurneringModel = require('models/turnering'),
        TurneringCollection;

    require('backbone.localStorage');

    TurneringCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("TurneringCollection"),
        model: TurneringModel
    });

    return TurneringCollection;
});