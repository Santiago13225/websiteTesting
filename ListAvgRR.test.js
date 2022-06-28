const ListAvgRR = require('./ListAvgRR')

const respirations = [13, 26, 30, 20, 16, 28, 14, 13, 22, 30, 15, 16, 16, 10, 15];

test('properly gives an average of the respiration rates', () => {
    expect(ListAvgRR(respirations)).toBe(18.9)
})