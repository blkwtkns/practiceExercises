/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = (function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function(number) {
      // Your implementation goes here
      return !(number % number.toString().split('').reduce((p, c) => +p + +c))
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function(number) {
      // Your implementation goes here
      if(Harshad.isValid(++number)) return number;
      return Harshad.getNext(number);
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function(count, start = 0) {
      // Your implementation goes here
      let result = [];
      let next = start;
      while (result.length < count){
        next = Harshad.getNext(next);
        result.push(next)
      }
      return result;
    }
  };

}());

