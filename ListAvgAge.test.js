const ListAvgAge = require('./ListAvgAge')

const ages = [21, 61, 35, 43, 27, 28, 22, 24, 34, 73, 21, 36, 23, 21, 50];

test('properly gives an average of the ages', () => {
    expect(ListAvgAge(ages)).toBe(34.6)
})