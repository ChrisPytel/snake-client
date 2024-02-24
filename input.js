//"input.js A2 - banter lines added, also cases for capital letters"

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
  if (keyPress === "w" || keyPress === "W" ) {
    console.log(`Moved up`);
    connection.write("Move: up");
  }   
  if (keyPress === "a" || keyPress === "A" ) {
    console.log(`Moved left`);
    connection.write("Move: left");
  }  
  if (keyPress === "s" || keyPress === "S" ) {
    console.log(`Moved down`);
    connection.write("Move: down");
  }   
  if (keyPress === "d" || keyPress === "D" ) {
    console.log(`Moved right`);
    connection.write("Move: right");
  }   
  if (keyPress === "j" || keyPress === "J" ) {
    console.log(`Banter line #1`);
    connection.write("Say: Top of the mornin");
  }   
  if (keyPress === "k" || keyPress === "K" ) {
    console.log(`Banter line #2`);
    connection.write("Say: This one is mine");
  }   
  if (keyPress === "l" || keyPress === "L" ) {
    console.log(`Banter line #3`);
    connection.write("Say: Good Game!");
  }   

  if (keyPress === '\u0003') {
    process.exit();
  }  
};

module.exports = {
  setupInput
};