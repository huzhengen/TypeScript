interface Person {
    gender: string;
}


function marry(a: Person, b: Person): [Person, Person] {
    if (a.gender !== b.gender) {
        return [a, b]
    } else {
        throw new Error('no marry')
    }
}

let a = { gender: '男' }
let b = { gender: '女' }

console.log(marry(a, b));
