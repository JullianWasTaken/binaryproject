function findPower () {
    while (Input > highestPower) {
        highestPower = highestPower * 2
        plotPoint += -1
    }
    if (highestPower >= Input) {
        highestPower = highestPower / 2
        plotPoint += 1
    }
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    Input += 1
    basic.showNumber(Input)
})
input.onButtonPressed(Button.AB, function () {
    findPower()
    while (Input > 0) {
        if (Input >= highestPower) {
            led.plot(plotPoint % 5, plotPoint / 5)
            Input = Input - highestPower
        }
        highestPower = highestPower / 2
        plotPoint += 1
    }
})
input.onButtonPressed(Button.B, function () {
    Input += -1
    basic.showNumber(Input)
})
let highestPower = 0
let Input = 0
let plotPoint = 0
plotPoint = 24
Input = 25
highestPower = 1
basic.forever(function () {
	
})
