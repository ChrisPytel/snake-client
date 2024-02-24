//"play.js A1 - add keypress handling via stdin and setupInput function and handleUserInput"
//this is the client side of snake

const net = require("net");
const connect = require("./client.js");


// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //our event listener for keyboard inputs
  return stdin;
};



//used for checking our key inputs
//
const handleUserInput = function(key) {  
  if (key === "a") {
    console.log(`test`);
  }   
  if (key === '\u0003') {
    process.exit();
  }  
};


console.log("Connecting ...");
connect.connectToServer();
setupInput();