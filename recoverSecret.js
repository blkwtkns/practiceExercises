// I don't think this solution would work if there are repetitive letters in the secret word :(
// This is my solution, which didn't work for the last test case to construct 'mathisfun'
// var recoverSecret = function(triplets) {
  // var secret = {};

  // triplets.forEach((ele) => {
    // ele.forEach((el, id) => {
      // if (id < 2) {
        // if (!secret[el]) secret[el] = ele;

        // if (id === 0) {
          // for (let key in secret) {
            // if (secret[key].indexOf(ele[1]) > -1 && secret[key].indexOf(el) < 0) secret[key].splice(secret[key].indexOf(ele[1]), 0, el)   // secret[key].unshift(el);
          // }
        // }
        // if (id === 1) {
          // for (let k in secret) {
            // if (secret[k].indexOf(ele[0]) > -1 && secret[k].indexOf(ele[2]) > -1 && secret[k].indexOf(el) < 0) secret[k].splice(secret[k].indexOf(ele[2]), 0, el)
          // }
        // }
      // }
    // })
  // });

  // return secret[Object.keys(secret).sort((a, b) => {
    // return secret[b].length - secret[a].length;
  // })[0]].join('');
// }

// mortonfox's
var recoverSecret = function(triplets) {
  var nodes = []
  var graph = {}
  var sortedlist = []

  function visit(node) {
    if (sortedlist.indexOf(node) < 0) {
      (graph[node] || []).forEach(function (node2) { visit(node2) })
      sortedlist.unshift(node)
    }
  }

  triplets.forEach(function (triplet) {
    triplet.forEach(function (node) {
      if (nodes.indexOf(node) < 0) nodes.push(node);
    })
    graph[triplet[0]] = (graph[triplet[0]] || []).concat(triplet[1])
    graph[triplet[1]] = (graph[triplet[1]] || []).concat(triplet[2])
  })

  while (nodes.length) visit(nodes.pop());
  return sortedlist.join('');
}

// LesRamer's
var recoverSecret = function(triplets) {
  for(var [first] of triplets)
  {
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}

// cave.on's
var recoverSecret = function(chains) {
  var charr, is_first, next;
  
  if (!chains.length) return '';
  
  for (var chain of chains) {
    charr = chain[0];
    
    is_first = chains.every(function(row) {
      return row.indexOf(charr, 1) == -1;
    });
    
    if (is_first) break;
  }
  
  next = chains
    .map(row => row[0] == charr ? row.slice(1) : row)
    .filter(row => row.length);
    
  return charr + recoverSecret(next);
}

let triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
];

console.log(recoverSecret(triplets1))
