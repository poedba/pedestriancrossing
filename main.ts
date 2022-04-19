hummingbird.startHummingbird()
let PressurePlateLast = "up"
let PressurePlateCurrent = "up"
basic.forever(function () {
    PressurePlateLast = PressurePlateCurrent
    if (hummingbird.getSensor(SensorType.Other, ThreePort.One) == 0) {
        PressurePlateCurrent = "down"
        hummingbird.setLED(ThreePort.Three, 100)
    } else {
        PressurePlateCurrent = "up"
    }
    if (PressurePlateCurrent == "up" && PressurePlateLast == "down") {
        for (let index = 0; index < 10; index++) {
            hummingbird.setLED(ThreePort.Three, 100)
            basic.pause(500)
            hummingbird.setLED(ThreePort.Three, 0)
            basic.pause(500)
        }
    }
})
