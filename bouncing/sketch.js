let cells = []
const cellCount = 100

function setup() {
    createCanvas(windowWidth - 100, windowHeight -100)
    for (let i = 0; i < cellCount; i++) {
        cells.push(new Cell())
    }
}

function draw() {
    background('grey')
    cells.forEach((item, index) => {
        item.show()
        item.move()

        cells.forEach((sub) => {
            if (item !== sub && item.touch(sub)) {
                // cells.splice(item, 1)
                // cells.splice(sub, 1)
                // item.merge()
                item.changeDirection()
                sub.changeDirection()
                // console.log(redCount + ' vs ' + blueCount)
            }
        })
    })
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
