console.log("Andrew Murray")
console.log('------Example1:Console-----')
console.log('Warning, Read Last Code Before Proceeding')
console.log('Error Port Is Not Available!')
console.log('Trace Location')


setTimeout(()=>{
    console.warn("Warning! input string for the next line")
}
)
    console.log('----Example2:creating a simple module')
    //const name = require ("./mod.js")
    import helper from "./mod.js"

    console.log(name.helper('Peter'))
    console.log(name,id(12345))
    console.log(name.email("peter@wawas.edu"))

    console.log('---- Example 3:creating a simple module')
    let events = require('events')
    let eventEmitter = new events.EventEmitter();

    eventEmitter.on('test', (a)=>{
        console.log(a);
    })

    eventEmitter.emit('test','EVENTS IN NODEJS')