function Cell(pos, radius, color) {
    if (this.pos) {
        this.pos = pos
    } else {
        this.pos = createVector(random(width - 50), random(height - 50))
    }

    // this.pos = pos || createVector(random(width - 50), random(height - 50))

    this.r = radius || 30
    this.c = color || 'white'
    this.set = false
    // this.c = 
    this.xDir = random(-1, 1)
    this.yDir = random(-1, 1)
    this.speed = random(1, 3)


    this.click = (x, y) => {
        const d = dist(this.pos.x, this.pos.y, x, y)
        if (d < this.r) {
            return true
        } else {
            return false
        }
    }


    this.touch = (other) => {
        const d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y)
        // const poiX = diff(other.pos.x, this.pos.x)

        if (d < this.r/2 + other.r/2) {
            // console.log('this: ', this.pos.x)
            // console.log('other: ', other.pos.x)   
            // console.log('diff ? ', diff(other.pos.x, this.pos.x))
            return true
        } else {
            return false
        }
    }

    this.changeColor = (color) => {
        if (color === 'red') {
            this.c = color
        }
        if (color === 'blue') {
            this.c = color
        }
        this.set = true
    }

    this.changeDirection = () => {
        if (this.xDir === 1) {
            this.xDir = -1
        } else {
            this.xDir = 1
        }

        if (this.yDir === 1) {
            this.yDir = -1
        } else {
            this.yDir = 1
        }
    }

    this.move = () => {
        this.pos.x = this.pos.x + this.speed * this.xDir
        this.pos.y = this.pos.y + this.speed * this.yDir
        
        if (this.pos.x > width - this.r/2 || this.pos.x < this.r/2) {
            this.xDir *= -1
        }
        
        if (this.pos.y > height - this.r/2 || this.pos.y < this.r/2) {
            this.yDir *= -1
        }
        this.show(this.pos.x , this.pos.y, this.r, this.r)
    }

    this.split = () => {
        return new Cell(this.pos, this.r/2, this.c)
    }

    this.merge = () => {
        // this.pos.x = 50
        // this.pos.y = 50
        this.r = this.r * 1.3
        return new Cell(this.pos, this.r, this.c)
    }

    this.show = () => {
        fill(this.c)
        noStroke()
        ellipse(this.pos.x, this.pos.y, this.r, this.r)
    }
}

const diff = (a, b) => {
    console.log('a: ', a)
    console.log('b: ', b)
    if ( a > b ) {
        return a - b
    } else if ( a < b ) {
        return b - a
    }
}