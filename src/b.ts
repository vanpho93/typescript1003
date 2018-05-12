interface Person {
    name: string;
    age: number;
}

const teo: Person = { name: 'Teo Nguyen', age: 10 };
const ti: Person = { name: 'Teo Nguyen', age: 10 };

interface OnInit {
    ngOnInit: () => void;
}

export class MyComponent implements OnInit {
    ngOnInit() {
        
    };
}

