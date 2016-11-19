function autocomplete(input, dictionary){
  let inpt = input.replace(/[^a-z]/gi, '');
  return dictionary.filter(el => {
    return el.toLowerCase().indexOf(inpt.toLowerCase()) === 0;
  }).slice(0, 5)
}


console.log(autocomplete('ai', ['airplane','airport','apple','ball'])) //['airplane','airport'])
