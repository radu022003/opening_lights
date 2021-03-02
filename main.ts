function Display_neonlights () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(5000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(5000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(5000)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(5000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(5000)
}
function Shift_pixel (Color: number) {
    strip.clear()
    strip.setPixelColor(1, Color)
    strip.setPixelColor(0, Color)
    for (let index = 0; index < 30; index++) {
        strip.shift(2)
        strip.show()
        basic.pause(100)
    }
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 60, NeoPixelMode.RGB)
basic.forever(function () {
    Display_neonlights()
    Shift_pixel(neopixel.colors(NeoPixelColors.Blue))
    Shift_pixel(neopixel.colors(NeoPixelColors.Green))
    Shift_pixel(neopixel.colors(NeoPixelColors.Yellow))
    Shift_pixel(neopixel.colors(NeoPixelColors.Indigo))
    Shift_pixel(neopixel.colors(NeoPixelColors.Red))
})
