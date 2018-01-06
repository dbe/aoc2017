var run = require('../run.js');

function checksum(values) {
  for(var i = 0; i < values.length; i++) {
    for(var j = i + 1; j < values.length; j++) {
      if(values[i] % values[j] == 0) {
        return values[i] / values[j];
      } else if(values[j] % values[i] == 0) {
        return values[j] / values[i];
      }
    }
  }

  throw "Should not reach this part";
}

function lines(input) {
  return input.split("\n");
}

function values(line) {
  var split = line.split("\t");
  return split.map(function(a) { return parseInt(a); });
}

function main(input) {
  var sum = 0;

  lines(input).forEach(function(line) {
    sum += checksum(values(line));
  })

  console.log("Sum: ", sum);
}

run(main, 2);
