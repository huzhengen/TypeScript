function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b
}

let c = add(1, 2)
let d = add('4', '7')

console.log(c)
console.log(d)
