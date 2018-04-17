var fileMatcher = require('./event-emitter');

fileMatcher(['fileA.txt', 'fileB.txt'], /hello/)
.on('fileread', function(file) {
    console.log('File read ' + file);
})
.on('found', function(file, match) {
    console.log('Found: ' + match + ' in file: ' + file);
})
.on('error', function(err) {
    console.log('Error: ' + err)
});