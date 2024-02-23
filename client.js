//"client.js A1 - send connection message to server and username initials"

const net = require("net");
let threeInitials = "CHR";

// establishes a connection with the game server
const connectToServer = function () {
  const conn = net.createConnection({
    host: "172.28.207.93",    // IP address here,
    port: "50541"            // PORT number here,
  });
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to server");
    conn.write("Hello from client!");
    conn.write(`Name: ${threeInitials}`)
  });


  //return conn; //commented out the return call to see what happens
};


module.exports = { //exports our connect function to communicate to play.js
  connectToServer
}; 

console.log(connectToServer);