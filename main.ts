let piano = 0
let drum: midi.MidiController = null
input.onButtonPressed(Button.A, function () {
    midi.useRawSerial()
    piano = 0
    piano.pitchBend(input.acceleration(Dimension.X))
})
input.onButtonPressed(Button.B, function () {
    midi.useRawSerial()
    drum = midi.channel(10)
    midi.playDrum(DrumSound.HandClap)
})
basic.forever(function () {
	
})
