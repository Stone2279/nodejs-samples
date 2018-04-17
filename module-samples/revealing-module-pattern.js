// no pollution of global namespace, everthing is bound to the function
var module = function() {

    // private stuff
    var privateFunction = function() {
        console.log('private function');
    }
    var privateVar = 'private var';

    // the public API
    var exp = {
        publicFuntion: function() {
            console.log('public function');
            privateFunction();
        },
        publicVar: 'public var'
    };

    return exp;
}();

console.log(module.publicVar);
module.publicFuntion();