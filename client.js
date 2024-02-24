//"client.js A2 - add move commands"

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

    // conn.write("Move: up"); //sending the server the following strings act as movement commands
    // conn.write("Move: down"); //may not initially be noticable
    // conn.write("Move: left");
    // conn.write("Move: right");
  });


  //return conn; //commented out the return call to see what happens
};


module.exports = { //exports our connect function to communicate to play.js
  connectToServer
}; 

console.log(connectToServer);