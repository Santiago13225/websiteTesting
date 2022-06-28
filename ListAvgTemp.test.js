const ListAvgTemp = require('./ListAvgTemp')

const temps = [97, 98, 99, 100, 98, 99, 92, 94, 99, 96, 97, 98, 99, 94, 97];

test('properly gives an average of the temps', () => {
    expect(ListAvgTemp(temps)).toBe(97.13)
})