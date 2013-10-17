/*global define*/

define([
    'jquery',
    'backbone',
    'views/turneringsliste',
    'views/nyTurnering',
    'models/turnering',
    'collections/turnering'
], function ($, Backbone, TurneringslisteView, NyTurneringView, TurneringModel, TurneringCollection) {
    'use strict';

    var BridgeRouter,
        nyTurneringView,
        turneringModel,
        turneringCollection,
        turneringslisteView;

    BridgeRouter = Backbone.Router.extend({
        routes: {
            '': 'turneringsliste',
            'ny': 'nyTurnering'
        },

        initialize: function () {
            console.log('init ruteren');
            turneringModel = new TurneringModel();
            turneringCollection = new TurneringCollection();
            turneringslisteView = new TurneringslisteView({
                el: '#innhold',
                collection: turneringCollection
            });
            nyTurneringView = new NyTurneringView({
                el: '#innhold',
                model: turneringModel
            });
        },

        turneringsliste: function () {
            //turneringCollection.reset();
            turneringCollection.fetch({reset:true});
        },

        nyTurnering: function () {
            nyTurneringView.render();
        }
    });
    return BridgeRouter;
});