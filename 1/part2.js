var run = require('../run.js');

function main(input) {
  var sum = 0;
  var increment = input.length / 2;

  for(var i = 0; i < input.length; i++) {
    if(input[i] == input[(i + increment) % input.length]) {
      sum += parseInt(input[i]);
    }
  }

  console.log("Sum: ", sum);
}

run(main, 1);
