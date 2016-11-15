function connectFour(board) {
  // Your code goes here
  let rho = 'RRRR',
    upsi = 'YYYY',
    inProg = '-';

  let horCfgs = board.map(el => el.join(''))

  let vertCfgs = board[0].map((el, idx) => {
    return board.map(e => e[idx]).join('')
  })

  let diagCfgs = [],
    lftDiag = '',
    rtDiag = '',
    count = 0;

  while (count < 3) {

    board[count].forEach((el, idx) => {
      lftDiag = '';
      rtDiag = '';
      board.forEach((e, i) => {
        if (i >= count) {
          if (idx >= 3 && idx - i > -1) lftDiag += e[idx - i - count];
          if (idx < 4 && idx + i < e.length) rtDiag += e[idx + i - count];
        }
      })
      if (lftDiag) diagCfgs.push(lftDiag)
      if (rtDiag) diagCfgs.push(rtDiag)
    })
    count++;

  }

  let allCfgs = horCfgs.concat(vertCfgs.concat(diagCfgs));
  for (let j = 0; j < allCfgs.length; j++) {
    if (allCfgs[j].indexOf(rho) > -1) return 'R';
    if (allCfgs[j].indexOf(upsi) > -1) return 'Y';
  }

  if (allCfgs.join('').indexOf('-') > -1) {
    return 'in progress'
  } else {
    return 'draw'
  }
}

let brd1 = [
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', 'R', 'R', 'R', 'R'],
  ['-', '-', '-', 'Y', 'Y', 'R', 'Y'],
  ['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
  ['-', '-', 'Y', 'Y', 'R', 'R', 'R']
];

let brd2 = [
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['Y', '-', '-', '-', '-', '-', '-'],
  ['R', 'Y', '-', '-', '-', '-', '-'],
  ['R', 'R', 'Y', '-', '-', '-', '-'],
  ['R', 'Y', 'R', 'Y', '-', '-', '-']
]

console.log(connectFour(brd2))
