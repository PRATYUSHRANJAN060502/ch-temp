const http =require('http')
const server =http.createServer((req,res)=>
{
    if(req.url==='/'){
        res.end('welcome to my homepage')
    }
    if(req.url==='/about')
    {
        res.end('people say sometime it is very hard to realise that they are wrong')
    }
    res.end(`
    <h1>Oops!</h1>
    <p> may be we are out of your request if you want to try again
    just go to home</p>
    <a href="/">go home</a>
    `)
})
server.listen(4044)