namespace Utility {
    export function log(msg:String) {
        console.log(msg);
    }
    export function error(msg:String) {
        console.error(msg);
    }
}

// usage
Utility.log('Call me');
Utility.error('maybe!');


//The `namespace` keyword generates the same JavaScript that we saw earlier:
// JS code (compiled)
/*
(function (Utility) {

// Add stuff to Utility

})(Utility || (Utility = {}));
*/