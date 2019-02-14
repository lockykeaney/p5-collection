let cells = []
const cellCount = 100
let blueCount = 1
let redCount = 1

function setup() {
    createCanvas(windowWidth - 100, windowHeight -100)
    for (let i = 0; i < cellCount; i++) {
        cells.push(new Cell())
    }
}

function draw() {
    background('grey')
    cells.forEach((item, index) => {
        switch (index) {
            case 0:
                item.changeColor('blue')
                break
            case 1: 
                item.changeColor('red')
                break
        }
        item.show()
        item.move()

        cells.forEach((sub) => {
            if (item !== sub && item.touch(sub)) {
                redVsBlue(item, sub)
                // cells.splice(item, 1)
                // cells.splice(sub, 1)
                // item.merge()
                item.changeDirection()
                sub.changeDirection()
                // console.log(redCount + ' vs ' + blueCount)
            }
        })
    })
    const winCondition = cellCount / 2 + 1
    // console.log(winCondition)
    if (redCount >= winCondition || blueCount >= winCondition) {
        noLoop()
        console.log(redCount, blueCount)
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const redVsBlue = (item, sub) => {
    if (!sub.set) {
        if (item.c === 'red') {
            sub.changeColor('red')
            redCount++
        }
        if (item.c === 'blue') {
            sub.changeColor('blue')
            blueCount++
        }
    }
}