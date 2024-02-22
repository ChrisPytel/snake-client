//"play.js added - initial connection to snake server established"
//this is the client side of snake

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  // console.log(net.createConnection);
  const conn = net.createConnection({
    host: "172.28.207.93",    // IP address here,
    port: "50541"            // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();