//"play.js A3 - returning object from connection module and passed into input controller"
//this is the client side of snake

// const connect = require("./client.js");
// const input = require("./input.js");    //Refactored below


const { connect } = require("./client");
const { setupInput } = require("./input"); //
//Note: ^ This is called object destructuring assignment.
//Rather than importing the entire file contents, it only imports the specific elements from that module we exported
//Allows for directly calling the function --> setupInput(); instead of doing input.setupInput();

console.log("Connecting ...");

let conn = connect();
setupInput(conn);