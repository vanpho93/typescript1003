"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.height = 100;
    }
}
const teo = new Person('Teo', 10);
console.log(teo.height);
