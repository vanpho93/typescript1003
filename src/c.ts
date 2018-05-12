class Person {
    height = 100;
    constructor(public name: string, private age: number) {}
}

const teo = new Person('Teo', 10);
console.log(teo.height);
