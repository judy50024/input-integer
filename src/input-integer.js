const csjs = require('csjs-inject')
const bel = require('bel')
const { getCurrentInstance } = require('vue')

module.exports = inputInteger

function inputInteger(){
    return bel `<input type="number" class=${css.inputInteger} placeholder="number">`
}

const css = csjs`
.inputInteger{
    background-color: lightgreen;
}
`


