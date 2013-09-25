/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TurneringslisteView = Backbone.View.extend({
        template: JST['app/scripts/templates/turneringsliste.hbs'],

        initialize: function () {
            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function () {
            this.$el.html(this.template({
                turneringer: this.collection.toJSON()
            }));
        }
    });

    return TurneringslisteView;
});