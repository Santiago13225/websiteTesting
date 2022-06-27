const ListAvgPulse = require('./ListAvgPulse')

const pulses = [60, 110, 120, 125, 95, 112, 61, 60, 75, 110, 80, 72, 55, 62, 76];

test('properly gives an average of the pulses', () => {
    expect(ListAvgPulse(pulses)).toBe(84.86666666666667)
})