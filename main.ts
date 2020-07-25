let Agitacion = 0
let Acelx1 = 0
let Acelx2 = 0
let Temperatura = 0
function Agita () {
    Agitacion = 0
    while (Agitacion < 800) {
        Acelx1 = input.acceleration(Dimension.X)
        basic.pause(100)
        Acelx2 = input.acceleration(Dimension.X)
        Agitacion = Math.abs(Acelx1 - Acelx2)
    }
}
input.onButtonPressed(Button.A, function () {
    Temperatura = input.temperature()
    basic.showNumber(Temperatura)
    basic.pause(100)
})
function Dormido () {
    basic.showLeds(`
        # # . # #
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
}
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index <= 255; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            for (let index3 = 0; index3 <= 4; index3++) {
                led.plotBrightness(index2, index3, index)
                basic.pause(10)
            }
        }
    }
})
function Despierto () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
}
basic.forever(function () {
    Dormido()
    Agita()
    Despierto()
    basic.pause(2000)
})
