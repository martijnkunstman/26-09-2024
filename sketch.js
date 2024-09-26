let squareXarray = []; //array voor de x positie van de square
let squareYarray = []; //array voor de y positie van de square
let squareiSzeArray = []; //array voor de grootte van de square

let squareCount = 100; //aantal squares

let start = true;

function createNewCirclesAndSquaresAndColors() {
  //maak arrays leeg
  squareXarray = [];
  squareYarray = [];
  squareiSzeArray = [];
  //for loop met variabele squareCount als aantal
  for (let i = 0; i < squareCount; i++) {
    //voeg de square toe aan de squaresArray
    squareXarray.push(random(800));
    squareYarray.push(random(600));
    squareiSzeArray.push(random(10, 100));
  }
}

function draw() {
  if (start) {
    createNewCirclesAndSquaresAndColors();
    start = false;
  }
  createCanvas(800, 600);
  background(100);
  fill("red");
  for (let i = 0; i < squareCount; i++) {
    let x = squareXarray[i];
    let y = squareYarray[i];
    let size = squareiSzeArray[i];
    square(x, y, size);
  }
}

function mousePressed() {
  createNewCirclesAndSquaresAndColors();
}
