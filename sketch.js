let squareXarray = []; //array voor de x positie van de square
let squareYarray = []; //array voor de y positie van de square
let squareiSzeArray = []; //array voor de grootte van de square

let squareCount = 100; //aantal squares

let start = true; //om te controleren of het de eerste keer is dat de pagina wordt geladen

//nog zelf toevoegen: circles, triangles, colors


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

/*

er is GEEN setup functie zoals wordt gevraagd in de opdracht

function setup() {
}

*/

function draw() {
  if (start) { //als het de eerste keer is dat de pagina wordt geladen
    createNewCirclesAndSquaresAndColors();
    start = false; //zet start op false zodat dit niet meer wordt uitgevoerd
    createCanvas(800, 600);
  }
  background(100); //maak de achtergrond grijs
  fill("red"); //maak de kleur van de squares rood
  for (let i = 0; i < squareCount; i++) {
    let x = squareXarray[i];
    let y = squareYarray[i];
    let size = squareiSzeArray[i];
    square(x, y, size);
  }
}

// dit moet nog worden omgeschreven naar een key event functie
function mousePressed() {
  createNewCirclesAndSquaresAndColors(); //maak nieuwe squares aan
}
