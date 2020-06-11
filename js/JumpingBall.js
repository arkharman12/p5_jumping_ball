/*

    N220 Section 25750
    Harmanjot Singh
    Jumping Ball
    28 February 2020

*/

// object to store position values
const position = {
    x : 0,
    y : 0
};
// object to store result values
const result = {
    score : 0,
    misses : 0
};
// object to store the radius value
const radius = {
    r : 60
}
// object to store the colors
const colors = {
    red : "",
    green : "",
    blue : ""
}
// create the canvas
function setup() {
    createCanvas(900, 700);
}

// start drawing
function draw() {
    // black background
    background(0);
    noStroke();

    // draw the circle
    fill(colors.red, colors.green, colors.blue);
    ellipse(position.x, position.y, radius.r*2, radius.r*2);

    // display the score and misses
    textSize(24);
    text("Score: " + result.score, 10, 30);
    text("Misses: " + result.misses, 10, 60);

    textSize(36);
    // if the the user score reaches 10 or misses 3 times
    if (result.score >= 10 || result.misses >= 3) {
        // display the win message
        if(result.score >= 10) {
        background(0);
        text("You WIN", 350, 350);
        textSize(12);
        text("Refresh to restart", 380, 370);
        } else if(result.misses >= 3) { // display the lost message
        background(0);
        text("You LOST", 350, 350);
        textSize(12);
        text("Refresh to restart", 385, 370);
        }
    }
}

// when the user mouse clicks
function mouseClicked() {
    // check if the mouse is inside the circle
    let d = dist(mouseX, mouseY, position.x, position.y);

    // increase the score by 1
    if (d < radius.r) {
        newCircle();
        result.score++;
    } else if (d > radius.r) { // increase the misses by 1
        newCircle();
        result.misses++;
    }
}

//  make a new circle evertime this functin is called
function newCircle() {
    position.x = random(900);
    position.y = random(700);
    colors.red = random(255);
    colors.green = random(255);
    colors.blue = random(255);
}

// generate a new circle every 0.85 seconds
setInterval(newCircle, 850);
