// including the module into out project
var process = require('process');

// it will return the current working directory
console.log('this is the working directory --> ' + process.cwd());

// it will return the version of process we are using
console.log('this is the process version --> ' + process.version);

// it will return the type of OS we are using at that time.
console.log('current OS we are using --> ' + process.platform);