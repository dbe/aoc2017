var run = require('../run.js');

function checksum(values) {
  // var min = values[0];
  // var max = min;
  //
  // values.splice(1).forEach(function(value) {
  //   if(value < min) {
  //     min = value;
  //   } else if(value > max) {
  //     max = value;
  //   }
  // });
  //
  // return max - min;
  return Math.max(...values) - Math.min(...values);
}

function lines(input) {
  return input.split("\n");
}

function values(line) {
  var split = line.split("\t");
  return split.map(function(a) { return parseInt(a); });
}

function main(input) {
  console.log(input);

  var sum = 0;

  lines(input).forEach(function(line) {
    sum += checksum(values(line));
  })

  console.log("Sum: ", sum);
}

run(main, 2);
