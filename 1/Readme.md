# Getting input
After doing the advent of code from previous years, I decided I wanted to have a more elegant way to get input into my program. Instead of trying to copy paste from the website, or download and save as a file, I wanted to make a library which would fetch the correct input data given the day.

I came up with the following module. You pass in a function which takes input as its only parameter, and the day which you are working on. We have to pass in a session cookie because AOC dymanically gives program input based on the logged in user.

```javascript
function run(main, day) {
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
```

The invocation of this is quite elegant as you just define a function taking input as its only param, and then call run with that function and the given day:

```javascript
function main(input) {
  ...
}

run(main, 1);
```

# Thoughts
Imperatively this is a very simple excercise. I did notice a nice improvement to my code after solving the second part of the excercise however. At first I considered the circular array aspect of the problem to just be a special case and handled it as such:

```javascript
//Handle edge case for circular array
if(input.length >= 2 && input[0] == input[input.length - 1]) {
  sum += parseInt(input[0]);
}
```
Although this code jumped out at me as not very elegant, I decided not to overengineer it. Once I saw the second part of the problem however, it became clear that indexing into the array with a mod would give the ciruclar nature intended. It would just get rid of the special case alltogether. This is actually a much more elegant solution.
