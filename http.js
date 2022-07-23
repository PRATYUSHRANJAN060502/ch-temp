const http=require('http')
const server=http.createServer((req,res)=>
{
    res.write('welcome to my home-page')
    res.end()

})
server.listen(4086)