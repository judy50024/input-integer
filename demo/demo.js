const csjs = require('csjs-inject')
const inputInteger = require('..')
const mytheme = require('./mytheme.js')
const theForm = inputInteger()
const css = mytheme('white')

const parser = document.createElement('div')

function start(css){
    parser.innerHTML = `<div>
    <h1>input integer demo</h1>
    <div class=${css.container}></div>
    <div class=${css.output}></div>
</div>
`

const page = parser.children[0]
const output = page.children[2]
const container = page.children[1]

const input1 = inputInteger()
const input2 = inputInteger()
container.appendChild(input1)
container.appendChild(input2)

// const element = inputInteger()

document.body.appendChild(page)
}
start(csjs`
    .output{
        border: 1px solid red;
    }
    .container{
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        width: 50%;
    }
`)

// document.title = 'Hello World!';
// document.body.innerHTML =  `
// <h1>Hello World!</h1>

// <div class="form-container">
//     <div class="form">
//     ${theForm}
//     </div>
// </div>   
// <style>${css}</style>

// `
