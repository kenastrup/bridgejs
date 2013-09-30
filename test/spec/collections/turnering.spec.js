/*global define, describe, require, it, expect, done, before, after, beforeEach, xit */
define(function (require) {
    'use strict';
    var TurneringModel = require('models/turnering'),
        TurneringCollection = require('collections/turnering');

    describe('TurneringCollection', function () {
        beforeEach(function () {
            this.turneringer = new TurneringCollection();
            this.turneringer.localStorage._clear();
        });

        after(function () {
            this.turneringer = null;
        });

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

        describe('storage tester', function () {
            beforeEach(function () {
                this.turneringer = new TurneringCollection();
                this.turneringer.localStorage._clear();
            });

            it('Skal lagre TurneringCollection til storage', function () {
                var that = this;

                this.turneringer.once('sync', function () {
                    expect(that.turneringer.length).to.equal(1);
                    //done();
                });

                this.turneringer.create(new TurneringModel());

            });

            // WTF: Denne funker ikke på den måten at den innerste expect ikke blir kjørt.
            // Det er komplisert med asynkrone ting
            xit('Skal slette TurneringModeller fra storage', function () {
                var turnering = new TurneringModel(),
                    that = this;

                this.turneringer.once('sync', function () {
                    console.log('ytre sync');
                    expect(that.turneringer).to.have.length(1);

                    that.turneringer.once('sync', function () {
                        console.log('indre sync');
                        expect(that.turneringer).to.have.length(0);

                    });
                    that.turneringer.remove(turnering);
                    that.turneringer.sync();
                });
                this.turneringer.create(turnering);
            });

        });
    });

    //oppretter collections med og uten modeller

    //fjerne og legge til modeller i collection

    //events trigges på container og model endringer

    //data synkroniseres med storage

});