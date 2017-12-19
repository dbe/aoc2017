var request =  require('request');

function run(main, day) {
  var options = {
    url : "http://adventofcode.com/2017/day/" + day + "/input",
    headers : {
      "Cookie" : "session=" + process.env.AOCSESSION
    }
  }

  request(options, function(err, resp, body) {
    main(body);
  });
}

module.exports = run;
