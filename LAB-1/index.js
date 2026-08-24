//Event emitter
import {EventEmitter} from "node:events";
const task = new EventEmitter();

task.on("greet",(name)=>{
    console.log(`Hello,${name}! Welcome to the session`);
});

task.on("exit",(reason)=> {
    console.log(`session ending Reason: ${reason}`);
});

task.on("new",(course)=> {
    console.log(`Now the new era began ${course}`);
});


task.emit("greet","Student");
task.emit("exit","Class completed");
task.emit("new","for second year Engineering");
