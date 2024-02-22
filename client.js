//"client.js added - "

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.28.207.93",    // IP address here,
    port: "50541"            // PORT number here,
  });
  conn.setEncoding("utf8");
  return conn;
};


module.exports = connect; //exports our connect function to communicate to play.js

console.log();