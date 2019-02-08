const assert = require('assert');  // Node.js `assert` module
const sayHello = require('../app').sayHello;

describe('App test!', function () {
  it('sayHello should return "hello"', function () {
    assert.equal(sayHello(), 'hello');
  });
});