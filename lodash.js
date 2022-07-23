const _=require('lodash')
const items=[2,[3,[6,[8]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)
