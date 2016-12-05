function recoverSecret(triplets) {
  let secret = {},
    checked = false;

  triplets.forEach(ele => {
    ele.forEach((el, id) => {
      if (!secret[el]) secret[el] = id < 2 ? ele.slice(id + 1) : []
      else {

        if (id < 2) {
          let green = ele
            .slice(id + 1)
            .filter(e => secret[el].indexOf(e) < 0);
          secret[el] = secret[el].concat(green);
        }
      }
    })
  })

  function scrub(cache, bool) {
    for (let k in cache) {
      cache[k].forEach(e => {
        let missing = cache[e].filter(el => cache[k].indexOf(el) < 0)
        cache[k] = cache[k].concat(missing);
        if (missing.length) bool = true;
      })
    }
    return {
      cache: cache,
      bool: bool
    }
  }

  let endCache = scrub(secret, checked)
  while (endCache.bool) {
    endCache = scrub(endCache.cache, checked);
  }

  endCache = endCache.cache;
  return Object.keys(endCache).sort((a, b) => {
    return endCache[b].length - endCache[a].length;
  }).join('')


}

// best practices (user mortonfox et al.)
// var recoverSecret = function(triplets) {
// var nodes = []
// var graph = {}
// var sortedlist = []

// function visit(node) {
// if (sortedlist.indexOf(node) < 0) {
// (graph[node] || []).forEach(function (node2) { visit(node2) })
// sortedlist.unshift(node)
// }
// }

// triplets.forEach(function (triplet) {
// triplet.forEach(function (node) {
// if (nodes.indexOf(node) < 0) nodes.push(node);
// })
// graph[triplet[0]] = (graph[triplet[0]] || []).concat(triplet[1])
// graph[triplet[1]] = (graph[triplet[1]] || []).concat(triplet[2])
// })

// while (nodes.length) visit(nodes.pop());
// return sortedlist.join('');
// }


// clever (user brinks et al.)
// var recoverSecret = function(triplets) {
  // for(var [first] of triplets)
  // {
    // if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    // {
      // triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      // return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    // }
  // }
  // return '';
// }

module.exports = recoverSecret;
