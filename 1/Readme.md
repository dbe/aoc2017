# AOC Link
http://adventofcode.com/2017/day/1

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

# Imperative Solution
Imperatively this is a very simple excercise. I did notice a nice improvement to my code after solving the second part of the excercise however. At first I considered the circular array aspect of the problem to just be a special case and handled it as such:

```javascript
//Handle edge case for circular array
if(input.length >= 2 && input[0] == input[input.length - 1]) {
  sum += parseInt(input[0]);
}
```
Although this code jumped out at me as not very elegant, I decided not to overengineer it. Once I saw the second part of the problem however, it became clear that indexing into the array with a mod would give the ciruclar nature intended. It would just get rid of the special case alltogether. This is actually a much more elegant solution:

```diff
-  for(var i = 0; i < input.length - 1; i++) {
-    if(input[i] == input[i+1]) {
+  for(var i = 0; i < input.length; i++) {
+    if(input[i] == input[(i+1) % input.length]) {

-  //Handle edge case for circular array
-  if(input.length >= 2 && input[0] == input[input.length - 1]) {
-    sum += parseInt(input[0]);
-  }
-
```

# Functional Psuedocode
The top level function for pretty much all of these AOC challenges has the signature of String -> Int. I will attempt to give a functional program flow for problems until I come back and program them in Haskell.

```
//Top level function taking input and outputting the answer
part1 :: String -> Int

//Creates a list of tuples for each pair of numbers which we should check
pair :: String -> List (String, String)

//Simple cast of String -> Int for the tuple
cast :: (String, String) -> (Int, Int)

//Checks the tuple to see if the two Ints are the same, if so it outputs that Int, otherwise 0
evaluate :: (Int, Int) -> Int
```

Given these functions, we get a beautiful function definition for part1:

```
part1 input =
  pair input
  |> map cast
  |> map evaluate
  |> reduce sum
```
