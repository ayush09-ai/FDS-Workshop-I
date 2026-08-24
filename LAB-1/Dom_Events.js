import { EventEmitter } from "node:events";

function createDOMElement() {
  const emitter = new EventEmitter();

  return {
    addEventListener(eventName, callback) {
      emitter.on(eventName, callback);
    },

    removeEventListener(eventName, callback) {
      emitter.off(eventName, callback);
    },

    dispatchEvent(event) {
      emitter.emit(event.type, event);
    },
  };
}

const button = createDOMElement();

function handleClick(event) {
  console.log("button clicked:", event.type);
  button.removeEventListener("click", handleClick);
}

function handleClick(event){
    console.log(`Button clicked!`);
    console.log(`Event Type:${event.type}`);
      console.log(`Message:${event.details}`);

}
// Add named event listener
button.addEventListener("click", handleClick);

// Dispatch the event
button.dispatchEvent({ type: "click" });

button.dispatchEvent({ type: "click" });

button.dispatchEvent({type:"click"});



