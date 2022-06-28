const ListAvgWeight = require('./ListAvgWeight')

const weights = [120, 160, 180, 160, 160, 180, 124, 134, 210, 157, 170, 115, 160, 155, 180];

test('properly gives an average of the weights', () => {
    expect(ListAvgWeight(weights)).toBe(157.7)
})