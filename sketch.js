let squareXarray = []; //array voor de x positie van de square
let squareYarray = []; //array voor de y positie van de square
let squareSizeArray = []; //array voor de grootte van de square

let colorArray = [];

let colorArrayRed = [];
let colorArrayGreen = [];
let colorArrayBlue = [];

let drieHoekPunt1x = [];
let drieHoekPunt1y = [];
let drieHoekPunt2x = [];
let drieHoekPunt2y = [];
let drieHoekPunt3x = [];
let drieHoekPunt3y = [];

let squareCount = 100; //aantal squares

let start = true; //om te controleren of het de eerste keer is dat de pagina wordt geladen

//nog zelf toevoegen: circles, triangles, colors

function createNewCirclesAndSquaresAndColors() {
  //maak arrays leeg
  squareXarray = [];
  squareYarray = [];
  squareiSzeArray = [];
  colorArray = [];
  drieHoekPunt1x = [];
  drieHoekPunt1y = [];
  drieHoekPunt2x = [];
  drieHoekPunt2y = [];
  drieHoekPunt3x = [];
  drieHoekPunt3y = [];

  //for loop met variabele squareCount als aantal
  for (let i = 0; i < squareCount; i++) {
    //voeg de square toe aan de squaresArray
    squareXarray.push(random(800));
    squareYarray.push(random(600));
    squareSizeArray.push(random(10, 100));

    drieHoekPunt1x.push(random(200,400));
    drieHoekPunt1y.push(random(200,400));
    drieHoekPunt2x.push(random(100,200));
    drieHoekPunt2y.push(random(100,200));
    drieHoekPunt3x.push(random(200,500));
    drieHoekPunt3y.push(random(200,500));

    //voeg hier de kleur toe - object
    //let red = random(255);
    //let green = random(255);
    //let blue = random(255);
    //colorArray.push({ "red": red, "green": green, "blue": blue });

    //voeg hier de kleur toe - 3x array
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    colorArrayRed.push(red);
    colorArrayGreen.push(green);
    colorArrayBlue.push(blue);
  }
}

/*

er is GEEN setup functie zoals wordt gevraagd in de opdracht

function setup() {
}

*/

function draw() {
  if (start) {
    //als het de eerste keer is dat de pagina wordt geladen
    createNewCirclesAndSquaresAndColors();
    start = false; //zet start op false zodat dit niet meer wordt uitgevoerd
    createCanvas(800, 600);
  }
  background(100); //maak de achtergrond grijs
  //maak de kleur van de squares rood
  for (let i = 0; i < squareCount; i++) {
    let red = colorArrayRed[i];
    let green = colorArrayGreen[i];
    let blue = colorArrayBlue[i];
    fill(red, green, blue);

    let x = squareXarray[i];
    let y = squareYarray[i];
    let size = squareSizeArray[i];
    square(x, y, size);

    let p1x = drieHoekPunt1x[i];
    let p1y = drieHoekPunt1y[i];
    let p2x = drieHoekPunt2x[i];
    let p2y = drieHoekPunt2y[i];
    let p3x = drieHoekPunt3x[i];
    let p3y = drieHoekPunt3y[i];
    triangle(p1x,p1y,p2x,p2y,p3x,p3y);
  }

  
}

// dit moet nog worden omgeschreven naar een key event functie
function mousePressed() {
  createNewCirclesAndSquaresAndColors(); //maak nieuwe squares aan
}
