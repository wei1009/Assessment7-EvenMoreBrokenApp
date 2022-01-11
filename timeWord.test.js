const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test("Not a valid hour",() => {
    expect(timeWord("123:00")).toEqual("Enter a valid time")
  })

  test("Not a valid minute",() => {
    expect(timeWord("12:61")).toEqual("Enter a valid time")
  })

  test("midnight",() => {
    expect(timeWord("00:00")).toEqual("midnight")
  })

  test("noon",() => {
    expect(timeWord("12:00")).toEqual("noon")
  })

  test("test o’clock",() => {
    expect(timeWord("01:00")).toEqual("one o’clock am")
  })

  test("if mintinues less than 10",() => {
    expect(timeWord("06:01")).toEqual("six oh one am")
  })

  test("half an hour",() => {
    expect(timeWord("06:30")).toEqual("six thirty am")
  })

  test("half an hour",() => {
    expect(timeWord("06:30")).toEqual("six thirty am")
  })

  test("Hour > 12",() => {
    expect(timeWord("23:23")).toEqual("eleven twenty three pm")
  })

});