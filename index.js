const { listenerCount } = require('events');
const http = require('http');
http.createServer((req,res)=>
{
    res.write('hello');
    res.end()

})
.listen (5000,()=>console.log('running'));