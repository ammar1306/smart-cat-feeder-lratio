edubitIrBit.onIrSensorEvent(IrEventType.Fall, function () {
    music.stopMelody(MelodyStopOptions.All)
})
edubitMotors.setServoPosition(ServoChannel.S1, 90)
basic.showString("meow")
basic.forever(function () {
    let activate = 0
    if (activate == 1) {
        if (edubitIrBit.isIrSensorTriggered()) {
            basic.pause(500)
            edubitMotors.setServoPosition(ServoChannel.S1, 90)
            music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.ForeverInBackground)
            basic.showString("EAT")
            basic.pause(500)
            edubitMotors.setServoPosition(ServoChannel.S1, 90)
            basic.pause(1000)
            basic.showIcon(IconNames.No)
        }
    }
})
