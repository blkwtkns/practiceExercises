let chai = require('chai');
let assert = chai.assert;

try {
  require('../base64methods.js')
} catch (e) {
  console.log('Modified string object not importing correcting')
}

describe('base64 tests', () => {

  it('converts to base64 from a string', () => {
    assert.equal('this is a string!!'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZyEh');
  })

  it('converts base64 to a string', () => {
    assert.equal('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(), 'this is a string!!');

  })
})
