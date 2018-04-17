var fs = require('fs');

var require = function(moduleName) {
    var id = require.resolve(moduleName);

    // check if module was already loaded before and return the cached module if possible
    if(require.cache[id]) {
        return require.cache[id].exports;
    }

    // otherwise build a new module object
    var module = {
        // here the public methods of the module will be stored
        exports: {},
        // id of the module, not used and not set in this example
        id: id
    };

    // add the module to the cache
    require.cache[id] = module;
    // now load the js code and wrap it in a function
    loadModule(moduleName, module, require);

    // return all methods that were added to module.exports
    return module.exports;
}
// add a cache to the require object (in JS functions are also objects...)
require.cache = {};
// add the resolve function (with a very basic implementation)
require.resolve = function(moduleName) {
    return moduleName.replace('.js', '');
}

function loadModule(filename, module, require) {
    // here we wrap the JS code of the module to a function
    // The require object is also passed. Usefull, for example, if you want to invalide the cache
    var wrappedSrc = '(function (module, exports, require) {' +
    fs.readFileSync(filename, 'utf-8') +
    '})(module, module.exports, require);';

    // execute the wrapper function. After this the module is ready for use.
    eval(wrappedSrc);
}

// lets test with a simple JS file
var logger = require('./log.js');
logger.log();