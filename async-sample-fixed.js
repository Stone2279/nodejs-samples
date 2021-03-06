var fs = require('fs');

var cache = {};

function inconsistentRead(filename, callback) {
    if(cache[filename]) {
        // make the callback also async...
        process.nextTick(function() {
            callback(cache[filename]);
        });
    }
    else {
        // asynchronous...
        fs.readFile(filename, 'utf-8', function(err, data) {
            cache[filename] = data;
            callback(data);
        });
    }
}

function createFileReader(filename) {
    listeners = [];
    inconsistentRead(filename, function(value) {
        listeners.forEach(function(listener) {
            listener(value);
        });
    });

    return {
        onDataReady : function(listener) {
            listeners.push(listener);
        }
    };
}
var reader1 = createFileReader('test.txt');
reader1.onDataReady(function(data) {
    console.log('data reader1. Content: ' + data);
});

setTimeout(function() {
    var reader2 = createFileReader('test.txt');
    reader2.onDataReady(function(data) {
        console.log('data reader2. Content: ' + data);
    })
}, 2000);
