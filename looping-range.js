function range(start, end, step) {
  var output = [];
  if (start < end && step > 0) {
    output.push(start);
    var num = start;
    while (num < end) {
      num = num + step;
      output.push(num);
    }
  }
  return output;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));