function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('grey')

    mouseMoved()
}

function mouseMoved() {
    noStroke()
    ellipse(mouseX,mouseY,50,50)
}

