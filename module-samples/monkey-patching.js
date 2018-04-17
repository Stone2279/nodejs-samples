var logger = require('./constructor-export');

// add a new function
logger.patched = function() {
    console.log('This is a new function on the existing Logger');
}

// modify an existing function
logger.info = function(message) {
    console.log('Patched info function...');
}