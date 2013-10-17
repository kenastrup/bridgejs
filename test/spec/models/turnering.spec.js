/*global define, describe, it, expect */
define(function (require) {
    'use strict';
    var TurneringModel = require('models/turnering');
    describe('TurneringModel', function () {

        //instansiering med gitte verdier
        it('skal opprette ny TurneringModel med verdier', function () {
            var turnering = new TurneringModel({
                navn: 'turneringa',
                dato: '2000-01-01',
                antallSpill: 1,
                antallPar: 2
            });
            expect(turnering.get('navn')).to.equal('turneringa');
            expect(turnering.get('dato')).to.equal('2000-01-01');
            expect(turnering.get('antallSpill')).to.equal(1);
            expect(turnering.get('antallPar')).to.equal(2);
        });


        // instansiering med default verdier
        it('skal opprette ny TurneringModel med defaults', function () {
            var turnering = new TurneringModel();
            expect(turnering.get('navn')).to.equal('');
            expect(turnering.get('dato')).to.equal('');
            expect(turnering.get('antallSpill')).to.equal(0);
            expect(turnering.get('antallPar')).to.equal(0);
        });

        //synkronisering med storage
        it('skal lagre og hente turneringa tilbake', function () {
            var turnering, hentet;
            turnering = new TurneringModel({
                navn: 'turneringa',
                dato: '2000-01-01',
                antallSpill: 1,
                antallPar: 2
            });
            turnering.save();

            hentet = new TurneringModel({
                id: turnering.get('id')
            });

            hentet.fetch();

            expect(hentet.get('navn')).to.equal('turneringa');

            //rydder opp
            turnering.destroy();
        });

        //custom og built-in events

        //validering

        //andre metoder
    });
});