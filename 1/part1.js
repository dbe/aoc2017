var run = require('../run.js');

function main(input) {
  var sum = 0;

  for(var i = 0; i < input.length; i++) {
    if(input[i] == input[(i+1) % input.length]) {
      sum += parseInt(input[i]);
    }
  }

  console.log("Sum: ", sum);
}

run(main, 1);
