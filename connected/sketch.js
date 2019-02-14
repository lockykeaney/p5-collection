let wave

function setup() {
    createCanvas(windowWidth - 100, windowHeight - 100);
    wave = new Wave()
    wave.createPoints()
}

function draw() {
    // wave.movement()
    background('grey')
    wave.plotPoints()
    wave.movement()
    // wave.connect()
}

function Wave() {
    this.sections = 6
    this.points = []
    this.x = 0
    this.y = 200
    this.beginX
    this.beginY
    this.endX
    this.endY
    this.section = 0


    this.createPoints = () => {
        this.points.push({ x: 0, y: random(height) })
        for (var x = 0; x < width; x += width / this.sections) {
            for (var y = 0; y < height; y += height) {

                const xPlot = random(x, (width / this.sections) + x)
                const yPlot = random(y, (height) + y)

                this.points.push({ x: xPlot, y: yPlot })
            }
        }
        this.points.push({ x: width, y: random(height) })

    }

    this.plotPoints = () => {
        this.points.forEach((item) => {
            fill('white')
            noStroke()
            ellipse(item.x, item.y, 10, 10)
        })
    }

    this.connect = () => {
        noFill()
        stroke(2)
        beginShape()
        curveVertex(this.points[0].x, this.points[0].y)

        this.points.forEach((item, index) => {
            curveVertex(item.x, item.y)
        })

        curveVertex(this.points[this.points.length - 1].x, this.points[this.points.length - 1].y)
        endShape()
        // noLoop()
    }

    this.movement = () => {

        if (this.x === 0) {
            this.endX = this.points[1].x
        }
        
        
        if (this.x < width) {
            this.x += 1
        }

        if (this.x === this.endX) {
            this.section += 1
        }
        console.log(this.section)

        this.particle()
    }

    this.particle = () => {
        fill('red')
        noStroke()
        ellipse(this.x, this.y, 10, 10)
    }
    
}


