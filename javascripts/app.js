// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================
function turnLeft(rover) {
  console.log(rover.direction);
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
switch (rover.direction) {
  case "N":
    rover.direction = "E";
    break;
  case "W":
    rover.direction = "N";
    break;
  case "S":
    rover.drection = "W";
    break;
  case "E":
    rover.direction = "S";
}

}

function moveForward(rover) {

switch (rover.direction) {
  case "N":
    rover.y -= 1;
    break;
  case "W":
    rover.x += 1 ;
    break;
  case "S":
    rover.y += 1;
    break;
  case "E":
    rover.x -= 1;
    break;
  default: console.log("stop");

function commands (instrucciones){
  for (i=0; i < instrucciones.length; i++){
    switch (instrucciones[i]) {
      case "r":
        moveforward (rover);
        rover.travelLog.push({x : rover.x, y : rover.y});
        break;
      case "r":
        moveright(rover);
        rover.travelLog.push({x : rover.x, y : rover.y});
        break;
      case "l":
        moveleft(rover);
        rover.travelLog.push({x : rover.x, y : rover.y});
        break;
      default: console.log("stop");
        break;
    }
  }
}
comands("rffflrrlff");
console.log("rover");


//suma de todos los movimientos sobre (X,Y) por las instrucciones dadas

function travelLog (rover)
rover.travelLog.push((x : rover.x, y : rover,y})
}




function moveForward(rover) {
  console.log("moveForward was called");

}
