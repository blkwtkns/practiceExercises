function simplify(poly) {
  //your code here
  let polyLib = {},
    parsed,
    exists;

  let config = poly.split('+').map(ele => ele.split('-')).forEach((e, i) => {
    e.forEach((el, id) => {
      if (id === 0 && el) {
        parsed = parsePolys(el);
        if (Array.isArray(parsed)) {
          exists = polyLib[parsed[1]] || 0;
          polyLib[parsed[1]] = parsed[0] + exists;
        } else {
          exists = polyLib[parsed] || 0;
          polyLib[parsed] = 1 + exists;
        }
      }
      if (id > 0) {
        parsed = parsePolys(el);
        if (Array.isArray(parsed)) {
          exists = polyLib[parsed[1]] || 0;
          polyLib[parsed[1]] = (parsed[0] * -1) + exists;
        } else {
          exists = polyLib[parsed] || 0;
          polyLib[parsed] = -1 + exists;
        }
      }

    })
  })


  function parsePolys(str) {
    let num = '';
    let strings = [];
    str.split('').forEach(el => {
      if (!isNaN(+el)) num += el;
      else strings.push(el);
    })

    if (num) return [+num, strings.sort().join('')];
    else return strings.sort().join('');
  }

  function orderObj(obj) {
    const ordered = {};
    Object.keys(obj).map(el => el.split('').sort().join('')).sort((a, b) => {
      if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
          if (a[i] != b[i]) return a[i] > b[i];
        }
      }
      return a.length - b.length
    }).forEach(function(key) {
      ordered[key] = obj[key];
      if (!ordered[key]) delete ordered[key]
    });
    return ordered;
  }

  let ordered = orderObj(polyLib);

  // return ordered;
  return Object.keys(ordered).map((e, i) => {
    if (ordered[e] === 1) ordered[e] = '';
    if (ordered[e] === -1) ordered[e] = '-'
    if (i > 0 && (ordered[e] > 0 || ordered[e] === '')) return '+' + ordered[e] + e;
    else return ordered[e] + e;
  }).join('');
}

// evk's solution
// function simplify(poly) {
  // var h = {};
  // poly.match(/[+-]?[^+-]+/g).forEach(x => {
    // var m = x.match(/[a-z]+/)[0],
      // k = x.replace(m, '');
    // m = m.split('').sort().join('');
    // k = Number(/\d/.test(k) ? k : k + '1');
    // h[m] = (h[m] || 0) + k;
  // });
  // return Object.keys(h)
    // .filter(m => h[m])
    // .sort((x, y) => x.length - y.length || (x < y ? -1 : 1))
    // .map((m, i) => ({
      // sign: h[m] < 0 ? '-' : i > 0 ? '+' : '',
      // k: Math.abs(h[m]),
      // m: m
    // }))
    // .map(o => o.sign + (o.k == 1 ? '' : o.k) + o.m).join('');
// }

// console.log(simplify("-a+5ab+3a-c-2a"))
// console.log(simplify("a+5ab"))

// console.log(simplify("a+ca-ab"))
// console.log(simplify("dc+dcba"))

// Test cases
// Test.describe("Sample tests", _ => {
// Test.it("Test reduction by equivalence", _ => {
// Test.assertEquals(simplify("dc+dcba"), "cd+abcd")
// Test.assertEquals(simplify("2xy-yx"), "xy")
// Test.assertEquals(simplify("-a+5ab+3a-c-2a"), "-c+5ab")
// })
// Test.it("Test monomial length ordering", _ => {
// Test.assertEquals(simplify("-abc+3a+2ac"), "3a+2ac-abc")
// Test.assertEquals(simplify("xyz-xz"), "-xz+xyz")
// })
// Test.it("Test lexicographic ordering", _ => {
// Test.assertEquals(simplify("a+ca-ab"), "a-ab+ac")
// Test.assertEquals(simplify("xzy+zby"), "byz+xyz")
// })
// Test.it("Test no leading +", _ => {
// Test.assertEquals(simplify("-y+x"), "x-y")
// Test.assertEquals(simplify("y-x"), "-x+y")
// })
// })
