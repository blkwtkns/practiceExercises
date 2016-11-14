// function Event() {
  //your code goes here
// }

// function Event() {
  // let queue = [];
  
  // this.subscribe = function (...args) {
    // queue = queue.concat(args.filter(v => typeof v === 'function'));
  // };

  // this.unsubscribe = function (...args) {
    // args = args.filter(v => typeof v === 'function' && ~queue.indexOf(v));
    // args.forEach(v => queue.splice(queue.lastIndexOf(v), 1));
  // };
  
  // this.emit = function (...args) {
    // queue.forEach(v => v.apply(this, args));
  // };
// }


//tried for the life of me to get this to work with class syntax, but it kept failing
// just a few tests. particularly, I wasn't able to correctly access queue in the emit method...
/*let Event = (function(){
	let queue = Symbol();
  
  class Event{
    constructor(){
      this[queue] = [];
		}

    subscribe(...args) {
      this[queue] = this[queue].concat(args.filter(fn => typeof fn === 'function'));
    };
    
    unsubscribe(...args) {
      args
      .filter(fn => typeof fn === 'function' && ~this[queue].indexOf(fn))
      .forEach(fn => this[queue].splice(this[queue].lastIndexOf(fn), 1));
    };
    
    emit(...args) {
      this[queue].forEach( el => el.apply(this, args));
    };
  }
  return Event;
})(); */


function Event(){
  let queue = [];

  this.subscribe = function(...args) {
    queue = queue.concat(args.filter(fn => typeof fn === 'function'));
  };

  this.unsubscribe = function(...args) {
    args
    .filter(fn => typeof fn === 'function' && ~queue.indexOf(fn))
    .forEach(fn => queue.splice(queue.lastIndexOf(fn), 1));
  };

  this.emit = function(...args) {
    queue.forEach( el => el.apply(this, args));
  };
}

/////// Testing ////////

function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }

var e = new Event(),
    bucket = [];

e.subscribe(l, o, l, l);
e.emit(bucket);

console.log(bucket)
