//"input.js A3 - refactored constants module"

// Stores the active TCP connection object.
let connection;

const { actions, stdin } = require("./constants");

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //our event listener for keyboard inputs
  return stdin;
};

//used for checking our key inputs
const handleUserInput = function(keyPress) { 
  if (keyPress === actions.move_up.primary || keyPress === actions.move_up.alt) {
    console.log(actions.move_up.toPrint);
    connection.write(actions.move_up.toServer);
  }   
  if (keyPress === actions.move_down.primary || keyPress === actions.move_down.alt) {
    console.log(actions.move_down.toPrint);
    connection.write(actions.move_down.toServer);
  } 
  if (keyPress === actions.move_left.primary || keyPress === actions.move_left.alt) {
    console.log(actions.move_left.toPrint);
    connection.write(actions.move_left.toServer);
  } 
  if (keyPress === actions.move_right.primary || keyPress === actions.move_right.alt) {
    console.log(actions.move_right.toPrint);
    connection.write(actions.move_right.toServer);
  }   
  if (keyPress === actions.msg1.primary || keyPress === actions.msg1.primary) {
    connection.write(actions.msg1.toServer);
  }  
  if (keyPress === actions.msg2.primary || keyPress === actions.msg2.primary) {
    connection.write(actions.msg2.toServer);
  }   
  if (keyPress === actions.msg3.primary || keyPress === actions.msg3.primary) {
    connection.write(actions.msg3.toServer);
  }   
  if (keyPress === actions.exit.primary) {
    console.log(actions.exit.toPrint);
    process.exit();
  }  
};

module.exports = {
  setupInput
};