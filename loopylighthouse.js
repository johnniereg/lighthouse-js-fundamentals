function loopyLighthouse(range, multiples, words) {
  for (var num = range[0]; num <= range[1]; num++) {
    var output = num;
    if (num % multiples[0] === 0 && num % multiples[1] === 0) {
      output = words[0] + words[1];
    }
    else if (num % multiples[0] === 0) {
      output = words[0];
    }
    else if (num % multiples[1] === 0) {
      output = words[1];
    }
    return output;
  }

}

console.log(loopylighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));