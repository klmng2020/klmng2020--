input.onButtonPressed(Button.A, function () {
    عداد += 1
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Hand == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(عداد)
})
let Hand = 0
let عداد = 0
عداد = 0
