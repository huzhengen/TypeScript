function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'lei',
    lastName: 'li'
};
console.log(greeter(user));
