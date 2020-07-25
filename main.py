Agitacion = 0
Acelx1 = 0
Acelx2 = 0
Temperatura = 0
def Agita():
    global Agitacion, Acelx1, Acelx2
    Agitacion = 0
    while Agitacion < 800:
        Acelx1 = input.acceleration(Dimension.X)
        basic.pause(100)
        Acelx2 = input.acceleration(Dimension.X)
        Agitacion = abs(Acelx1 - Acelx2)

def on_button_pressed_a():
    global Temperatura
    Temperatura = input.temperature()
    basic.show_number(Temperatura)
    basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Dormido():
    basic.show_leds("""
        # # . # #
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        """)

def on_button_pressed_b():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    for index in range(256):
        for index2 in range(5):
            for index3 in range(5):
                led.plot_brightness(index2, index3, index)
                basic.pause(10)
input.on_button_pressed(Button.B, on_button_pressed_b)

def Despierto():
    basic.show_leds("""
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        """)

def on_forever():
    Dormido()
    Agita()
    Despierto()
    basic.pause(2000)
basic.forever(on_forever)
