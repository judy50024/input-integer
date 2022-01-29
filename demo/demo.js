const csjs = require('csjs-inject')
const inputInteger = require('..')
const bel = require('bel')
const mytheme = require('./mytheme.js')
const theForm = inputInteger()
// const css = mytheme('white')

const parser = document.createElement('div')

function demo(){

    const page = bel `<div class=${css.demo}>
    <h1>input integer demo</h1>
    <div class=${css.container}>
        ${inputInteger()}
        ${inputInteger()}
        ${inputInteger()}
    </div>
</div>`
return page
document.body.appendChild(page)
}

const css = csjs`
    .demo{
        border: solid 1px red;
        margin: 2rem;
    }

    .container{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
`

document.body.appendChild(demo())

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
