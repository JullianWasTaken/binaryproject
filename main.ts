function findPower () {
    while (Input > highestPower) {
        highestPower = highestPower * 2
    }
    if (highestPower >= Input) {
        highestPower = highestPower / 2
    }
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    Input += 1
    basic.showNumber(Input)
})
input.onButtonPressed(Button.AB, function () {
    findPower()
    while (Input > 1) {
        if (Input > highestPower) {
            Input = Input - highestPower
            led.plot(Input % 5, Input / 5)
            highestPower = highestPower / 2
        } else {
            highestPower = highestPower / 2
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Input += -1
    basic.showNumber(Input)
})
let highestPower = 0
let Input = 0
let plotPoint = 0
Input = 25
highestPower = 1
basic.forever(function () {
	
})
