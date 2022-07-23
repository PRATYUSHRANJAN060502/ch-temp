
const names=require('./mod1')
const sayHi=require('./mod2')
const v=require('./mod4')
console.log(v)
sayHi('susan')
sayHi(names.peter)
sayHi(names.ramu)
require('./mod5')