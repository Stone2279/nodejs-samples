function Logger(name) {
    this.name = name;
    this.count = 0;
}

Logger.prototype.info = function(message) {
    console.log('[' + this.name + '] Info: ' + message);
    this.count++;
};

// By exporting a concrete instance of this class we can create a statefull object
// This looks like a Singleton but it isn't!!!
// In Node.js each module subtree can have its own copy of this file and so
// more than one instance of this class can exist in the whole application!
module.exports = new Logger('DEFAULT');

module.exports.Logger = Logger;