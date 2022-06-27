const ListAvgHeight = require('./ListAvgHeight')

const heights = [64, 65, 74, 67, 63, 74, 62, 63, 79, 64, 69, 64, 72, 73, 71];

test('properly gives an average of the heights', () => {
    expect(ListAvgHeight(heights)).toBe(68.26666666666667)
})