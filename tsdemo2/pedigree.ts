#!/usr/bin/env ts-node

function createPrefix(n: number): string {
    return '----'.repeat(n)
}

{
    class Person {
        public children: Person[] = []
        constructor(public name: string) { }
        sayHi() {
            console.log('hi,i am ' + this.name);
        }
        addChild(child: Person): void {
            this.children.push(child)
        }
        introduceFamily(n?: number): void {
            n = n || 1
            console.log(`${createPrefix(n - 1)}${this.name}`)
            this.children.forEach((child) => {
                child.introduceFamily(n + 1)
            })
        }
    }

    let grandPa = new Person('爷爷')
    let father1 = new Person('父亲1')
    let father2 = new Person('父亲2')
    let child11 = new Person('父亲1-儿子1')
    let child12 = new Person('父亲1-儿子2')
    let child21 = new Person('父亲2-儿子1')
    let child22 = new Person('父亲2-儿子2')

    grandPa.addChild(father1)
    grandPa.addChild(father2)
    father1.addChild(child11)
    father1.addChild(child12)
    father2.addChild(child21)
    father2.addChild(child22)
    grandPa.introduceFamily()
}