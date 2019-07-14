let div: HTMLDivElement = document.createElement('div')
div.style.border = '1px solid red'
div.style.height = '100px'
div.style.width = '100px'
div.id = 'demo'

document.body.appendChild(div)

let isMove: boolean = false
let position: [number, number] = [0, 0]

div.onmousedown = (e: MouseEvent) => {
    isMove = true
    position = [e.clientX, e.clientY]
}
console.log(div.style.top)

document.onmousemove = (e: MouseEvent) => {
    console.log(isMove)
    if (isMove) {
        let deltaX = e.clientX - position[0]
        let deltaY = e.clientY - position[1]
        // div.style.left = e.clientX + 'px'
        // div.style.top = e.clientX + 'px'
        console.log(div.style.top)
        let top = parseInt(div.style.top!) || 0
        let left = parseInt(div.style.left!) || 0
        console.log(top, deltaY)
        div.style.top = top + deltaY + 'px'
        div.style.left = left + deltaX + 'px'
        position = [e.clientX, e.clientY]
    }

}

document.onmouseup = () => {
    isMove = false
}