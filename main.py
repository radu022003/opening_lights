def Display_neonlights():
    strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    basic.pause(5000)
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    basic.pause(5000)
    strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    basic.pause(5000)
    strip.show_color(neopixel.colors(NeoPixelColors.INDIGO))
    basic.pause(5000)
    strip.show_color(neopixel.colors(NeoPixelColors.RED))
    basic.pause(5000)
def Shift_pixel(Color: number):
    strip.clear()
    strip.set_pixel_color(1, Color)
    strip.set_pixel_color(0, Color)
    for index in range(30):
        strip.shift(2)
        strip.show()
        basic.pause(100)
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P1, 60, NeoPixelMode.RGB)

def on_forever():
    Display_neonlights()
    Shift_pixel(neopixel.colors(NeoPixelColors.BLUE))
    Shift_pixel(neopixel.colors(NeoPixelColors.GREEN))
    Shift_pixel(neopixel.colors(NeoPixelColors.YELLOW))
    Shift_pixel(neopixel.colors(NeoPixelColors.INDIGO))
    Shift_pixel(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever)
