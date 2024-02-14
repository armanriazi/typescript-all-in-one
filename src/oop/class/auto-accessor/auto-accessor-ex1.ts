/*class Animal {
    #__name: string;

    get name() {
        return this.#__name;
    }
    set name(value: string) {
        this.#__name = name;
    }

    constructor(name: string) {
        this.name = name;
    }
}*/

class ClassWithAccessors {
    // declare a private property to store the ID
    private _id: number = 0;
  
    // define the getter for the "id" property
    get id(): number {
      console.log(`get id property`); // log when the "id" property is being accessed
      return this._id; // return the private "_id" property
    }
  
    // define the setter for the "id" property
    set id(value: number) {
      console.log(`set id property`); // log when the "id" property is being modified
      this._id = value; // set the value of the private "_id" property
    }
  }
  // create an instance of the ClassWithAccessors
let classWithAccessors = new ClassWithAccessors();

// set the value of the "id" property using the setter
classWithAccessors.id = 10;

// get the value of the "id" property using the getter
console.log(`classWithAccessors.id = ${classWithAccessors.id}`); // logs: "classWithAccessors.id = 10"