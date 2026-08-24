console.log("Start");

process.nextTick(()=>{
    console.log("nextTick");
});

setTimeout(() => {
    console.log("SetTimeout");
}, 10000);

setImmediate(()=>{
    console.log("setImmediate");
});

console.log("End");
