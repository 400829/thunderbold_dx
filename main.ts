let y = 0
let 亮度 = 0
let x = 2
let dx = 1
basic.forever(function () {
    亮度 = 250
    basic.clearScreen()
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index <= 4; index++) {
            led.plotBrightness(x - dx * index, y, 250 - index * 40)
        }
        y += 1
    }
    basic.pause(150)
})
