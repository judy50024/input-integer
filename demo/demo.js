const inputInteger = require('..')
const mytheme = require('./mytheme.js')
const theForm = inputInteger()
const css = mytheme('white')


document.title = 'Hello World!';
document.body.innerHTML =  `
<h1>Hello World!</h1>

<div class="form-container">
    <div class="form">
    ${theForm}
    </div>
</div>   
<style>${css}</style>

`
