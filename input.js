//input.js added - brought in functions from play.js here, module.exports setupInput function"


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
const handleUserInput = function(keyPress) {  
  if (keyPress === "a") {
    console.log(`test`);
  }   
  if (keyPress === '\u0003') {
    process.exit();
  }  
};

module.exports = {
  setupInput
};