const EventEmitter = require('events');

const emitter = new EventEmitter;

// emitter.on("greet", ()=>{
//     console.log(`Hi Nick roy`)
// });
// emitter.emit('greet')

// emitter.on("greet", (userName,prof)=>{
//     console.log(`I am ${userName}, Iam a ${prof}`)
// });
// emitter.emit('greet', "Nick roy","Graphics Designer")
emitter.on("greet", (argu)=>{
    console.log(`I am ${argu.userName}, Iam a ${argu.prof}`)
});
emitter.emit('greet', {userName:"Nick roy",prof:"Graphics Designer"})