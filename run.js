var request =  require('request');

function run(main, day) {
  console.log("AOCSESSION: ", process.env.AOCSESSION)
  var options = {
    url : "http://adventofcode.com/2017/day/" + day + "/input",
    headers : {
      "Cookie" : "session=" + process.env.AOCSESSION
    }
  }

  request(options, function(err, resp, body) {
    main(body.trim());
  });
}

module.exports = run;
