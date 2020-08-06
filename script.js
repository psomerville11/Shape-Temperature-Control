/* global createCanvas, colorMode, HSB, background, ellipse, random, width, height,
rect, line, sqrt, text, round, rectMode, CENTER, mouseX, mouseY, backgroundColor, color */

let backgroundColor, spherePosition, rectPosition, distance1, mousePosition, distance2, category

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  rectMode(CENTER);
  //spherePosition = new SpherePosition(100, 100);
  // This variable contains a JSON object
  spherePosition = {
    "x": 100,
    "y": 100
  }
  
  // x = 130, y = 140
  rectPosition = {
    "x": 130,
    "y": 140
  }
  rect2Position ={
    "x": 160,
    "y": 200,
    
  }
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  rect(rectPosition.x, rectPosition.y, 20, 20);
  line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y);
  fill("green")
  rect(rect2Position.x, rect2Position.y, 20,20);
  line(rectPosition.x,rectPosition.y, rect2Position.x, rect2Position.y)
  
  distance1 = computeDistance(spherePosition, rectPosition);
  text(`The sphere and the rect are ${round(distance1)} units apart`, 20, 20);
  
  mousePosition = {
    "x": mouseX,
    "y": mouseY
  }
  
  distance2 = computeDistance(spherePosition, mousePosition);
  category = computeCategoryofDistance(spherePosition, mousePosition);
  text(`The sphere and the mouse are ${round(distance2)} units apart; you are ${category}`, 20, 40);
  
  distance3 = computeDistance(rectPosition, mousePosition);
  category = computeCategoryofDistance(spherePosition, mousePosition);
  text(`The rectangle and mouse are ${round(distance3)} units apart; you are ${category}`, 20,60);
  
  distance4 = computeDistance(rectPosition, rect2Position);
  category = computeCategoryofDistance(spherePosition, mousePosition);
  text(`The rect and rect 2 are ${round(distance4)} units apart; you are ${category}`, 20, 80)
  
}

function computeCategoryofDistance(point1, point2) {
  let distance = computeDistance(point1, point2);
  // >200 = "cold"
  // >50, <200 = "warm"
  // <50 = "hot"
  if (distance > 200) {
    backgroundColor = color(240, 10, 100);
    return "cold";
  } else if (distance > 50) {
    backgroundColor = color(120, 10, 100);
    return "warm";
  } else {
    backgroundColor = color(0, 10, 100);
    return "hot";
  }
}

function computeDistance(point1, point2) {
  // sqrt of (x2-x1)^2 + (y2-y1)^2
  // sqrt()
  // x ** 2
  let deltaX = point2.x - point1.x;
  let deltaY = point2.y - point1.y;
  let distance = sqrt((deltaX ** 2) + (deltaY ** 2))
  return distance;
}

function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}

/*
class SpherePosition {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
*/