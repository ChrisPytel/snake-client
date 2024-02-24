//"input.js A1 - connection object passed in"

// Stores the active TCP connection object.
let connection;


// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //our event listener for keyboard inputs
  return stdin;
};

//used for checking our key inputs
const handleUserInput = function(keyPress) {  
  if (keyPress === "w") {
    console.log(`Moved up`);
    connection.write("Move: up");
  }   
  if (keyPress === "a") {
    console.log(`Moved left`);
    connection.write("Move: left");
  }  
  if (keyPress === "s") {
    console.log(`Moved down`);
    connection.write("Move: down");
  }   
  if (keyPress === "d") {
    console.log(`Moved right`);
    connection.write("Move: right");
  }   
  if (keyPress === '\u0003') {
    process.exit();
  }  
};

module.exports = {
  setupInput
};