var run = require('../run.js');

function main(input) {
  var sum = 0;

  for(var i = 0; i < input.length - 1; i++) {
    if(input[i] == input[i+1]) {
      sum += parseInt(input[i]);
    }
  }

  //Handle edge case for circular array
  if(input.length >= 2 && input[0] == input[input.length - 1]) {
    sum += parseInt(input[0]);
  }

  console.log("Sum: ", sum);
}

run(main, 1);
