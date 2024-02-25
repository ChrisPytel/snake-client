//"input.js A3 - refactor and applied lint rules"

// Stores the active TCP connection object.
let connection;

const { actions, stdin } = require("./constants");

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //our event listener for keyboard inputs
  return stdin;
};

//handler used for checking our actions object in the constants module
const handleUserInput = function(keyPress) {
  if (keyPress === actions.moveUp.primary ||
     keyPress === actions.moveUp.alt) {
    console.log(actions.moveUp.toPrint);
    connection.write(actions.moveUp.toServer);
  }
  if (keyPress === actions.moveDown.primary ||
     keyPress === actions.moveDown.alt) {
    console.log(actions.moveDown.toPrint);
    connection.write(actions.moveDown.toServer);
  }
  if (keyPress === actions.moveLeft.primary ||
     keyPress === actions.moveLeft.alt) {
    console.log(actions.moveLeft.toPrint);
    connection.write(actions.moveLeft.toServer);
  }
  if (keyPress === actions.moveRight.primary ||
     keyPress === actions.moveRight.alt) {
    console.log(actions.moveRight.toPrint);
    connection.write(actions.moveRight.toServer);
  }
  if (keyPress === actions.msg1.primary ||
     keyPress === actions.msg1.alt) {
    connection.write(actions.msg1.toServer);
  }
  if (keyPress === actions.msg2.primary ||
     keyPress === actions.msg2.alt) {
    connection.write(actions.msg2.toServer);
  }
  if (keyPress === actions.msg3.primary ||
     keyPress === actions.msg3.alt) {
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