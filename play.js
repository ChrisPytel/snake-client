//"play.js A2 - import input module and changed to object destructuring assignment"
//this is the client side of snake, not the server side

// const connect = require("./client.js");
// const input = require("./input.js");    //Refactored below

const { connect } = require("./client.js");
const { input } = require("./input.js"); //
//Note: ^ This is called object destructuring assignment.
//Rather than importing the entire file contents, it only imports the specific elements from that module we exported
//Allows for directly calling the function --> setupInput(); instead of doing input.setupInput();

console.log("Connecting ...");
connect();
setupInput();
