# AOC Link
http://adventofcode.com/2017/day/2

# Imperative Solution
Both parts 1 and 2 required you to sum checksums accross lines, which allowed me to just have a `checksum(values)` function which differed between the two parts.

I am still getting my head around what a truely imperative solution is, would using Math.min and Math.max be considered imperative or functional? I think a decent distinction would be the following 2 code snippets:

```javascript
var min = values[0];
var max = min;

values.splice(1).forEach(function(value) {
  if(value < min) {
    min = value;
  } else if(value > max) {
    max = value;
  }
});

return max - min;
```

versus

```javascript
return Math.max(...values) - Math.min(...values);
```

Although the second example could have its min and max functions defined imperatively, I still consider it functional, as my program itself does not imperatively describe what a min/max is. Implementing min and max functionally would require you to specify what the max of a list of integers really means. In english, it is "The member which no other member is greater than".

And that really seems like the crux of the issue. In snippet one, you are explaining to the computer what steps to take, such that when it is done, it will have calculated the min and max of a list, while in a functional (or I guess more precisely declaritive) world, you are describing to the computer what the min or max of a list means.
