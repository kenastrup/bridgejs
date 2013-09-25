/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NyturneringView = Backbone.View.extend({
        template: JST['app/scripts/templates/nyTurnering.hbs'],

        events: {
            'click #lagre': 'lagre'
        },

        initialize: function () {
            this.render();
        },

        lagre: function () {
            this.model.set('navn', $("#navn").val());
            this.model.set('dato', $("#dato").val());
            this.model.set('antall_spill', $("#antall_spill").val());
            this.model.set('antall_par', $("#antall_par").val());
            this.model.save();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return NyturneringView;
});