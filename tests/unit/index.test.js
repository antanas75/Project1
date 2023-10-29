'use strict';

var expect = require('chai').expect;

const MyClass = require("../../src/index.js");

describe('helloWorld', function () {
    describe('helloWorld() 1', function () {
      it('should return 10+10=20', function () {
        //console.log('Type: ' + (typeof MyClass.helloWorld));
        expect(MyClass.helloWorld(), 'to be', 20);
      });
    });
  
    describe('helloWorld() 2', function () {
        it('should return 11+13=24', function () {
          expect(MyClass.helloWorld(11, 13), 'to be', 24);
        });
      });
    });
