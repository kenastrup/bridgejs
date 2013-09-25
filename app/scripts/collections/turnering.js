/*global define*/

define([
    'underscore',
    'backbone',
    'models/turnering',
    'backbone.localStorage'
], function (_, Backbone, TurneringModel) {
    'use strict';

    var TurneringCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("TurneringCollection"),
        model: TurneringModel
    });

    return TurneringCollection;
});