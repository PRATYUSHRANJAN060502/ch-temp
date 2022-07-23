const path=require('path')

const splitter=path.toNamespacedPath()
console.log(splitter)
console.log(path.sep)
const filePath=path.join('/home/','pratyush','Documents','js folder','tester','f1','ret.txt')
console.log(filePath)
const base=path.basename(filePath)
console.log(base)