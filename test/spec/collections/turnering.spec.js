/*global define, require, it, expect */
define(function (require) {
    'use strict';
    var TurneringModel = require('models/turnering'),
        TurneringCollection = require('collections/turnering');

    declare('TurneringCollection', function () {
        it('Oppretter tom TurneringCollection');
        it('Oppretter TurneringCollection med TurneringModel');
        it('Skal legge til TurneringModel til TurneringCollection');
        it('Skal fjerne TurneringModel fra TurneringCollection');
        it('Skal lagre TurneringCollection til storage');
        it('Skal slette TurneringModeller fra storage')
    });

    //oppretter collections med og uten modeller

    //fjerne og legge til modeller i collection

    //events trigges på container og model endringer

    //data synkroniseres med storage

});