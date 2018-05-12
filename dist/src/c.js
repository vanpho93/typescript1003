"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.height = 100;
    }
    return Person;
}());
var teo = new Person('Teo', 10);
console.log(teo.height);
