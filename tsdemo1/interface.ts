interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'hello ' + person.firstName + ' ' + person.lastName
}

let user = {
    firstName: 'lei',
    lastName: 'li'
}

console.log(greeter(user))