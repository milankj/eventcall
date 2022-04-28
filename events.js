const events = require('events')
const myEmitter = new events()
const http = require('http')
http.createServer((req,res)=>{
    res.write('oh bie')
    myEmitter.emit('newSale',9)
})
.listen(2000,()=>{
    console.log('server started')
})
myEmitter.on('newSale',()=>{
    console.log('new customer came')
})
myEmitter.on('newSale',()=>{
    console.log('new sale occures')
})
myEmitter.on('newSale',data=>{
    console.log(`${data} is shown`)
})
