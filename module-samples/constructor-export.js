function Logger(name) {
    // with this little trick it is possible to create a new Logger without using
    // the 'new' keyword
    if(!(this instanceof Logger)) {
        return new Logger(name);
    }
    this.name = name;
};

Logger.prototype.log = function (message) {
    console.log('[' + this.name + '] ' + message);
};

Logger.prototype.info = function (message) {
    this.log('info: ' + message);
};

Logger.prototype.verbose = function (message) {
    this.log('verbose: ' + message);
};

module.exports = Logger;