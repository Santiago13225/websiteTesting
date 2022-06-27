const ListAvgExc = require('./ListAvgExc')

const hrsOfExercise = [7, 0, 7, 3, 3, 16, 4, 3, 20, 0, 8, 1, 21, 14, 10];

test('properly gives an average of the hours of exercise', () => {
    expect(ListAvgExc(hrsOfExercise)).toBe(7.8)
})