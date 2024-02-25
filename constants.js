//"constants.js A1 - refactor and applied lint rules"

const IP = "172.28.207.93";
const PORT = "50541";
const threeInitials = "CHR";
const stdin = process.stdin; //initially from input.js

const actions = {
  moveUp: {
    primary: "w",
    alt: "W",
    toServer: "Move: up",
    toPrint: "Snake moved up"
  },
  moveDown: {
    primary: "s",
    alt: "S",
    toServer: "Move: down",
    toPrint: "Snake moved down"
  },
  moveLeft: {
    primary: "a",
    alt: "A",
    toServer: "Move: left",
    toPrint: "Snake moved left"
  },
  moveRight: {
    primary: "d",
    alt: "D",
    toServer: "Move: right",
    toPrint: "Snake moved right"
  },
  msg1: {
    primary: "j",
    alt: "J",
    toServer: "Say: Top of the mornin",
  },
  msg2: {
    primary: "k",
    alt: "K",
    toServer: "Say: G'day mate",
  },
  msg3: {
    primary: "l",
    alt: "L",
    toServer: "Say: Good Game!",
  },
  exit: {
    primary: "\u0003",
    toPrint: "Exiting game via CTRL+C"
  }
};

const welcomeMessage = `\nSuccessfully connected to server!\n
Movement controls are set to:\n
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
${actions.moveUp.primary}: To move up\n
${actions.moveDown.primary}: To move down\n
${actions.moveLeft.primary}: To move left\n
${actions.moveRight.primary}: To move right\n                        
${actions.msg1.primary}: Announce message 1\n
${actions.msg2.primary}: Announce message 2\n
${actions.msg3.primary}: Announce message 3\n                      
Control + C: to exit game\n`;

module.exports = { //exports our consts and objects to communicate across modules
  IP,
  PORT,
  threeInitials,
  stdin,
  actions,
  welcomeMessage
};