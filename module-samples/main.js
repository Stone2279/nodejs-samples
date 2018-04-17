var named = require('./named-exports');
var substack = require('./substack-export');
var constExport = require('./constructor-export');
var instExport = require('./instance-export');

//named export
named.info('Hello world');
named.debug('Hello world');

// substack export
substack();
substack.sub();

// constructor export. We don't need 'new' here. See imported module for details
var constructorExport = constExport('main.js');
constructorExport.info('Constructor export...');

// Here an instance is exported. This makes it possible to have a state
instExport.info('Instance was exported. Counter: ' + instExport.count);
var instExport2 = require('./instance-export');
instExport2.info('Using the same instance. Counter: ' + instExport2.count);

// Monkey patching. Extend a existing module with new functionality
require('./monkey-patching');
var patchedLogger = require('./constructor-export');
patchedLogger.patched();
patchedLogger.info('bla');