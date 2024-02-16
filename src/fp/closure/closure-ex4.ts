/// The example related to noImplicitThis 

//Invalid
/*class NoImplicitThisClass {
    id: number = 1;
    printAfterWait() {
        let callback = function () {
            console.log(`this.id : ${this.id}`);
        }
        setTimeout(callback, 1000);
    }
}

let classInstance = new NoImplicitThisClass();
classInstance.printAfterWait();
*/

// Valid
class NoImplicitThisClass {
    id: number = 1;
    printAfterWait() {
    let callback = () => {
        console.log(`this.id : ${this.id}`);
    }
    setTimeout(callback, 1000);
    }
}

let classInstance = new NoImplicitThisClass();
classInstance.printAfterWait();

// OR //Valid
/*
class NoImplicitThisClass {
    id: number = 1;
    printAfterWait() {
    let callback = function (_this) {
        console.log(`this.id : ${_this.id}`);
    }
    setTimeout(callback, 1000, this);
    }
}

let classInstance = new NoImplicitThisClass();
classInstance.printAfterWait();

*/