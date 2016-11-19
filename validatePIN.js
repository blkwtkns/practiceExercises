function validatePIN(pin){
  return (pin.length === 4 || pin.length === 6) && !isNaN(+pin) && +pin === Math.round(+pin);
}

// console.log(validatePIN('612357'))
