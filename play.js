//"play.js A4 - refactor and applied lint rules"

const { connect } = require("./client");
const { setupInput } = require("./input");

//Note: ^ This is called object destructuring assignment.
//Rather than importing the entire file contents, it only imports the specific elements from that module we exported
//Allows for directly calling the function directly --> setupInput(); instead of doing input.setupInput();

console.log("Connecting ...");
let connReturn = connect();
setupInput(connReturn);