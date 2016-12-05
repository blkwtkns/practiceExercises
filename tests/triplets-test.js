let chai = require('chai');
let assert = chai.assert;

let recoverSecret, triplets, secret;

try {
  recoverSecret = require('../triplets.js')
} catch (e) {
  console.log('function could not be exported')
}

if (typeof recoverSecret === 'function') {



  describe('secret test', () => {
    it('first test construct', () => {
      secret = "whatisup"
      triplets = [
        ['t', 'u', 'p'],
        ['w', 'h', 'i'],
        ['t', 's', 'u'],
        ['a', 't', 's'],
        ['h', 'a', 'p'],
        ['t', 'i', 's'],
        ['w', 'h', 's']
      ]
      assert.equal(recoverSecret(triplets), secret)
    })

    it('second test construct', () => {
      secret = 'mathisfun'
      triplets = [
        ['t', 's', 'f'],
        ['a', 's', 'u'],
        ['m', 'a', 'f'],
        ['a', 'i', 'n'],
        ['s', 'u', 'n'],
        ['m', 'f', 'u'],
        ['a', 't', 'h'],
        ['t', 'h', 'i'],
        ['h', 'i', 'f'],
        ['m', 'h', 'f'],
        ['a', 'u', 'n'],
        ['m', 'a', 't'],
        ['f', 'u', 'n'],
        ['h', 's', 'n'],
        ['a', 'i', 's'],
        ['m', 's', 'n'],
        ['m', 's', 'u']
      ]

      assert.equal(recoverSecret(triplets), secret)
    })

    it('third test construct', () => {
      secret = "congrats"
      triplets = [
        ['g', 'a', 's'],
        ['o', 'g', 's'],
        ['c', 'n', 't'],
        ['c', 'o', 'n'],
        ['a', 't', 's'],
        ['g', 'r', 't'],
        ['r', 't', 's'],
        ['c', 'r', 'a'],
        ['g', 'a', 't'],
        ['n', 'g', 's'],
        ['o', 'a', 's']
      ]
      assert.equal(recoverSecret(triplets), secret)
    })

    it('fourth test construct', () => {
      secret = "solved"
      triplets = [
        ['l', 'e', 'd'],
        ['o', 'e', 'd'],
        ['o', 'l', 'e'],
        ['o', 'v', 'e'],
        ['s', 'o', 'l'],
        ['s', 'e', 'd'],
        ['s', 'l', 'e'],
        ['v', 'e', 'd'],
        ['o', 'l', 'v'],
        ['l', 'v', 'd']
      ]
      assert.equal(recoverSecret(triplets), secret)
    })
  })
} else {
  console.log('function not exported properly')
}
