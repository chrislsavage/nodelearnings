var square = x => x * x;

console.log(square(2));

var user = {
    name: "chris",
    sayHi: () => {
        console.log(arguments)  //global arguments object
        console.log(`hi Im ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments) //function arguments variable
        console.log(`hi Im ${this.name}`); // enables you to bind "this" in object literal
    }
}
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
