//constants.js added - stores a series of constant variables used across files


const IP = "172.28.207.93";
const PORT = "50541";
const threeInitials = "CHR";

const stdin = process.stdin; //from input.js initially
// const connReturn = connect(); // from play.js

const actions = {
  move_up: {
    primary: "w",
    alt: "W",
    toServer: "Move: up",
    toPrint: "Snake moved up"
  },
  move_down: {
    primary: "s",
    alt: "S",
    toServer: "Move: down",
    toPrint: "Snake moved down"
  },
  move_left: {
    primary: "a",
    alt: "A",
    toServer: "Move: left",
    toPrint: "Snake moved left"
  },
  move_right: {
    primary: "d",
    alt: "D",
    toServer: "Move: right",
    toPrint: "Snake moved right"
  },
  doubleSpeed: {
    primary: "shift",
    toServer: "Move: right",
    toPrint: "shift pressed"
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

}


module.exports = {
  IP,
  PORT,
  threeInitials,
  stdin,
  actions  
};