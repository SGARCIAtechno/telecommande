input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("RECULER")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("DROITE")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("GAUCHE")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("STOPPER")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("AVANCER")
})
basic.forever(function () {
    radio.setGroup(1)
})
