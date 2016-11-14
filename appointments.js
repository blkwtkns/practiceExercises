function getStartTime(schedules, duration) {
  // TODO

  let curr;
  let last;
  let split;
  let resCurr;
  let resLast;
  let pass = true;

  let result = schedules.map((e, i) => {
      return e.map((el, id) => {
          resCurr = null;
          resLast = null;

          if (last) {
            split = el[0].split(':');
            curr.setUTCHours(split[0], split[1]);
            if (curr.getUTCHours() === last.getUTCHours() && curr.getUTCMinutes() > last.getUTCMinutes()) resLast = last, resCurr = curr;
            if (curr.getUTCHours() > last.getUTCHours()) resLast = last, resCurr = curr;
          }

          last = new Date();
          curr = new Date();
          split = el[1].split(':');
          last.setUTCHours(split[0], split[1]);

          if (id === e.length - 1) {
            last = null;
            curr = null;
          }
          if (resCurr && resLast) return [resLast, resCurr];
        })
        .filter((el, id) => {
          return el;
        })
        .filter((el, id) => {
          return (el[1].getTime() - el[0].getTime()) / 60000 >= duration;
        })
        .map((el, id) => {
          // console.log(el)
          // return [ `${el[0].getUTCHours()}:${el[0].getUTCMinutes()}`, `${el[1].getUTCHours()}:${el[1].getUTCMinutes()}`]
          return [el[0].getTime(), el[1].getTime()];
        })
    })
    // .reduce((p, c) => {
      // return p.concat(c);
    // })

  // return result;

  let ret2 = [];
  result.forEach((e, i, arr) => {
    // console.log(e)
    arr.forEach((el, id, array) => {
      if(id && el[0] >= e[0] && (e[1] - el[0]) / 60000 >= duration){ 
        let foo = new Date(); 
        foo.setTime(el[0]); 
        ret2.push(`${foo.getUTCHours()}:${foo.getUTCMinutes()}`);
      }
    })
  })
  // not reducing right
  // return result.reduce((p, c, i, arr) => {
    // console.log(p)
    // return p.map((el, id) => {
      // console.log(el)
      // return c.filter((ele, idx) => {
        // console.log(ele)
        // return ele[0] >= el[0] && (el[1] - ele[0]) / 60000 >= duration;
      // })
    // })
  // }, result[0]);

  // if (!pass) return null;
  // return ret2;
}

var sched = [
  [
    ['09:00', '11:30'],
    ['13:30', '16:00'],
    ['16:00', '17:30'],
    ['17:45', '19:00']
  ],
  [
    ['09:15', '12:00'],
    ['14:00', '16:30'],
    ['17:00', '17:30']
  ],
  [
    ['11:30', '12:15'],
    ['15:00', '16:30'],
    ['17:45', '19:00']
  ]
];

console.log(getStartTime(sched, 60))
