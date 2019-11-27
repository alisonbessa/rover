//Definine Rover Object
let rover = {
  direction: "N",
  x: 0,
  y: 0
};

//Turn Left Function
function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction){
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

//Turn Right Function
function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;     
  }
}

//Move Forward Function and show rover coordinates
function moveForward(){
   console.log("moveForward was called");
   switch (rover.direction){ 
    case "N":
      rover.y -= 1;
      break;
    case "E":
      rover.x += 1;
      break;
    case "S":
      rover.y += 1;
      break;
    case "W":
      rover.x -= 1;;
      break;     
  }
  console.log(`The rover X position is ${rover.x}, the Y position is ${rover.y} and it's pointing to ${rover.direction}`);
}


//Create a function that receives a list of commands
function commands(orders){
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l":
        turnLeft();
        break;
      case "r":
        turnRight();
        break;
      case "f":
        turnForward();
        break;
    }
  }
}
//Testing
commands("rffrfflfrff");
