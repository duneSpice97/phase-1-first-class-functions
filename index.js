function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function pickler() {
        console.log('soak in vinegar');
    }

}

function returnsAnAnonymousFunction() {
    return function() {
        
    };
}