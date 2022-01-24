const inputInteger = require('..')
const mytheme = require('./mytheme.js')
const x = inputInteger()
const css = mytheme('yellow')


document.title = 'hellow world';
document.body.innerHTML =  `
<h1>hellow</h1>
<hr>
<div class="example">
 ${x}
</div>
<style>${css}</style>
`
