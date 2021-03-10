var date_fns = require('date-fns');

// this is the method of JAVASCRIPT to get the present Date.
var date = new Date();

// it will print 2021-03-10T19:46:06.384Z - ISO 8601 Standard
console.log('Output-1 \t'+date);

// it will print 11.03.2021
console.log('Output-2 \t'+date_fns.format(date,'dd.MM.yyyy'));

// it will print month name: Mar
console.log('Output-3 \t'+date_fns.format(date,'MMM'));

// it will print year: 2021
console.log('Output-4 \t'+date_fns.format(date,'yyyy'));
