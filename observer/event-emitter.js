var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

function findFiles(files, pattern) {
    var emitter = new EventEmitter();

    files.forEach(function(file) {
        fs.readFile(file, 'utf-8', function(err, content) {
            if(err) {
                return emitter.emit('error', err);
            }

            emitter.emit('fileread', file);
            var match = null;
            if(match = content.match(pattern)) {
                match.forEach(function(elem) {
                    emitter.emit('found', file, elem);
                });
            }
        });
    });

    return emitter;
}

module.exports = findFiles;