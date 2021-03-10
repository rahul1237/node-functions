var date_fns = require('date-fns')

var date = new Date()

// current date --> 11 03 2021
console.log('Current Date: \t'+date_fns.format(date,'dd-MM-yyy'));

var modified_date = date_fns.format(date_fns.addDays(date,2),'dd-MM-yyy');

// date after adding 2 days in it! --> 13 03 2021
console.log('Date after using addDays(): \t'+modified_date);

// current year --> 11 03 2021
console.log('Current Year: \t'+date_fns.format(date,'dd-MM-yyy'));

var modified_year = date_fns.format(date_fns.addYears(date,15),'dd-MM-yyy');

// date after adding 15 years in it! --> 13 03 2036
console.log('Date after using addYears(): \t'+modified_year);

// current year --> 11 03 2021
console.log('Current Month: \t'+date_fns.format(date,'dd-MM-yyy'));

var modified_year = date_fns.format(date_fns.addMonths(date,12),'dd-MM-yyy');

// date after adding 12 months in it! --> 11 03 2022
console.log('Date after using addMonths(): \t'+modified_year);