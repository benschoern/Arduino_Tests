input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(25)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.unplot(x, y)
            basic.pause(25)
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(y, x)
            basic.pause(25)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.unplot(y, x)
            basic.pause(25)
        }
    }
})
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.SmallHeart, 100)
    basic.setLedColor(0xff0000)
    basic.showIcon(IconNames.Heart, 100)
    basic.turnRgbLedOff()
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
