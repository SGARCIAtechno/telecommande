def on_button_pressed_a():
    radio.send_string("AVANCER")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string("STOPPER")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    radio.send_string("RECULER")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    radio.set_group(0)
basic.forever(on_forever)
