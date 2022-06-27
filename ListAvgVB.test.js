const ListAvgVB = require('./ListAvgVB')

const vacBal = [12, 1, 5, 15, 11, 15, 12, 13, 1, 13, 8, 1, 7, 2, 1];

test('properly gives an average of the vacation balances', () => {
    expect(ListAvgVB(vacBal)).toBe(7.8)
})