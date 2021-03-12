var math_js = require('mathjs')

// it gives the output in the log base 10 (number)  --> 2
console.log('log part ans --> \t'+math_js.log(100,10));

// it gives the output in normal real part form.
console.log('positive sqrt --> \t'+math_js.sqrt(16));

// it gives the output in form of real part and 
// imaginary part.
// i here specifies the imaginary part.
console.log('negative sqrt --> \t'+math_js.sqrt(-16));

// it will print 2^3 --> 8
console.log('power function --> \t'+math_js.pow(2,3));