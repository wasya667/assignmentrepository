(function (window) {
  'use strict';

  // Array of names to loop over
  var names = ["yasoob", "John", "jessica", "james", "jasmine", "jake", "Susan", "Emma"];

  // Loop over the names array
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    // If name starts with 'j' or 'J', print Goodbye; otherwise print Hello
    if (name.toLowerCase().charAt(0) === 'j') {
      console.log(sayHelloOrGoodbye.goodbye(name));
    } else {
      console.log(sayHelloOrGoodbye.hello(name));
    }
  }

})(window);
