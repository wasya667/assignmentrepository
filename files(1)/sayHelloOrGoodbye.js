(function (window) {
  'use strict';

  // Object with hello and goodbye methods
  var sayHelloOrGoodbye = {
    hello: function (name) {
      return "Hello " + name;
    },
    goodbye: function (name) {
      return "Goodbye " + name;
    }
  };

  // Expose to global window object
  window.sayHelloOrGoodbye = sayHelloOrGoodbye;

})(window);
