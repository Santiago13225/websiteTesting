const ListAvgBP = require('./ListAvgBP')

const pressures = [90, 139, 142, 143, 97, 141, 92, 97, 101, 120, 120, 135, 90, 90, 94];

test('properly gives an average of the pressures', () => {
    expect(ListAvgBP(pressures)).toBe(112.7)
})