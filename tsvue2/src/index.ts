import Vue from 'vue'
import demo1 from './demo1.vue'

let div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

new Vue({
    el: div,
    render: (h) => h(demo1)
})