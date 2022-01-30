const csjs = require('csjs-inject')
const inputInteger = require('..')
const bel = require('bel')
const mytheme = require('./mytheme.js')
// const theForm = inputInteger()
// const css = mytheme('white')

const parser = document.createElement('div')

function demo(){
    const output = bel `<div class=${css.output}>0</div>`
    const page = bel `<div class=${css.demo}>
    <h1>input integer demo</h1>
    ${output}
    <div class=${css.container}>
        ${inputInteger({value: 1, placeholder: 'integer'}, listen)}
        ${inputInteger({value: 2, placeholder: 'integer'}, listen)}
        ${inputInteger({value: 3, placeholder: 'integer'}, listen)}
    </div>
</div>`
return page
//message = {type: 'update', body: 5}
function listen(message){
    const {type, body} = message
    if(type === 'update')output.textContent = body
    }
}



const css = csjs`
.demo {
  margin: 20px;
  padding: 20px;
  border: 2px dashed green;
}
.output {
  width: auto;
  border: 1px solid red;
}
.container {
  display: flex;
  flex-direction: column;
  width:50%;
}`

document.body.appendChild(demo())
