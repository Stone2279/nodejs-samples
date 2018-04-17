var fs = require('fs');

function readJson(filename, callback) {
    fs.readFile(filename, 'utf-8', function(err, data) {
        // don't let errors jump to the event loop otherwise nodejs will shutdown!
        // Always propagate errors to the callback function
        if(err) {
            callback(err);
        }

        var parsed;
        try {
            parsed = JSON.parse(data);
            callback(null, parsed);
        } catch (err) {
            callback(err);
        }
    });
}

readJson('sample.json', function(err, json) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(json.name);
        json.name = 'Hans';
        console.log(json.name);
    }
});