/*global define, describe, require, it, expect */
define(function (require) {
    'use strict';
    var TurneringModel = require('models/turnering'),
        TurneringCollection = require('collections/turnering');

    describe('TurneringCollection', function () {
        it('Oppretter tom TurneringCollection', function () {
            var turneringer = new TurneringCollection();
            expect(turneringer.length).to.equal(0);
        });

        it('Oppretter TurneringCollection med TurneringModel', function () {
            var turnering,
                turneringer;
            turnering = new TurneringModel();
            turneringer = new TurneringCollection(turnering);
            expect(turneringer.length).to.equal(1);
        });

        it('Skal legge til TurneringModel til TurneringCollection', function () {
            var turneringer = new TurneringCollection(),
                turnering = new TurneringModel();

            expect(turneringer.length).to.equal(0);
            turneringer.add(turnering);
            expect(turneringer.length).to.equal(1);
        });

        it('Skal fjerne TurneringModel fra TurneringCollection', function () {
            var turneringer = new TurneringCollection(),
                turnering = new TurneringModel();

            turneringer.add(turnering);

            expect(turneringer.length).to.equal(1);
            turneringer.remove(turnering);
            expect(turneringer.length).to.equal(0);
        });

        //denne virker jo fan ikke WTF?
        xit('Skal lagre TurneringCollection til storage', function () {
            var turneringer = new TurneringCollection(),
                hentedeTurneringer = new TurneringCollection(),
                turnering = new TurneringModel(),
                turnering2 = new TurneringModel(),
                antallTurneringerFoer;

            hentedeTurneringer.fetch();
            antallTurneringerFoer = hentedeTurneringer.length;


            turneringer.create(turnering);
            turneringer.create(turnering2);

            hentedeTurneringer.fetch();

            expect(hentedeTurneringer.length).to.equal(antallTurneringerFoer + 2);

            turneringer.remove(turnering);
            turneringer.remove(turnering2);
            turneringer.sync();

            hentedeTurneringer.fetch();

            hentedeTurneringer.each(function (model) {
                model.destroy();
            });
        });

        it('Skal slette TurneringModeller fra storage', function () {

        });
    });

    //oppretter collections med og uten modeller

    //fjerne og legge til modeller i collection

    //events trigges på container og model endringer

    //data synkroniseres med storage

});