class Student {
    fullName: string;
    constructor(public firstName, public middleIntial, public lastName) {
        this.fullName = firstName + ' ' + middleIntial + ' ' + lastName
    }
}


interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'hello ' + person.firstName + ' ' + person.lastName
}

let user = new Student('Jane', 'M.', 'User')

console.log(greeter(user));
