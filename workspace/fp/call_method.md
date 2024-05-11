## Relation container and this

In an object method, this refers to the object.
- [x] Alone, this refers to the global object.
- [x] In a function, this refers to the global object.
- [x] **In a function, in strict mode, this is undefined.**
- [x] In an event, this refers to the element that received the event.
- [x] Methods like call(), apply(), and bind() can refer this to any object.

## This Precedence
To determine which object this refers to; use the following precedence of order.
### Precedence	Object

1.	bind()
2.	apply() and call()
3.	Object method
4.	Global scope

# 

Sample of bind:

```javascript
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member); //return John Doe
```

## The Difference Between call() and apply()

The difference is:
- [x] The call() method takes arguments separately.
- [x] The apply() method takes arguments as an array.

When a function is used as a callback, this is lost.

This example will try to display the person name after 3 seconds, but it will display undefined instead:

```javascript
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);
```
