//"client.js A4 - refactor and applied lint rules"

const net = require("net");
const { IP, PORT, threeInitials, welcomeMessage } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8"); //decodes our inputs into readable characters
  conn.on("connect", () => {
    console.log(welcomeMessage);
    conn.write(`Name: ${threeInitials}`);
  });
  //added to display timeout and serverside death messages
  conn.on("data", (data) => {
    console.log(data);
    process.exit(); //added a connection termination after a gameover message
  });
  return conn;
};

module.exports = { //exports our connect function to communicate across modules
  connect
};