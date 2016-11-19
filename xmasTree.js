function christmasTree(height) {
    var stars = charGenerator("*"),
        spaces = charGenerator(" "),
        result = [];

  for(var i = 0; i < height; i++) {
      result.push(spaces(height - 1 - i) + stars(i*2 + 1) + spaces(height - 1 - i));
  }  
  return result.join("\n");
}

function charGenerator(chr) {
  return function(count) {
    return Array(count+1).join(chr);
  }
}
