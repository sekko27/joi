'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const Common = require('../lib/common');


const internals = {};


const { describe, it } = exports.lab = Lab.script();
const { expect } = Code;


describe('Common', () => {

    describe('assertOptions', () => {

        it('validates null', () => {

            expect(() => Common.assertOptions()).to.throw('Options must be of type object');
        });
    });

    describe('isRegExp', () => {
        it('detects RegExp instances', () => {
            const isRegExp = Common.isRegExp;
            const pattern = /test/i;
            const pattern2 = new RegExp('test', 'i');
            expect(isRegExp(pattern)).to.be.true;
            expect(isRegExp(pattern2)).to.be.true;
            expect(isRegExp('🤓')).to.be.false;
        });
    });
});
