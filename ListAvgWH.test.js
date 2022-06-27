const ListAvgWH = require('./ListAvgWH')

const work = [46, 71, 40, 60, 46, 40, 43, 49, 38, 47, 28, 40, 40, 40, 84];

test('properly gives an average of the work hours', () => {
    expect(ListAvgWH(work)).toBe(47.46666666666667)
})