var chai = require('chai');
var Webze = require('../index');
var webze = new Webze();
var testMethod = require('./helpers/test.method.js');

var method = 'post';

var tests = [{
    args: [{
        symKeyID: '123123123ff',
        sig: '44ffdd55',
        topic: '0xffdd11',
        payload: webze.toHex('12345'),
        ttl: 100,
        minPow: 0.5,
        powTarget: 3,
        padding: '0xffdd4455'
    }],
    formattedArgs: [{
        symKeyID: '123123123ff',
        sig: '44ffdd55',
        topic: '0xffdd11',
        payload: webze.toHex('12345'),
        ttl: 100,
        minPow: 0.5,
        powTarget: 3,
        padding: '0xffdd4455'
    }],
    result: true,
    formattedResult: true,
    call: 'shh_'+ method
}];

testMethod.runTests('shh', method, tests);

