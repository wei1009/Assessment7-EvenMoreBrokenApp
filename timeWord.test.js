const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test("given input 123:00, expect output Enter a valid time",() => {
    expect(timeWord("123:00")).toEqual("Enter a valid time")
  })

  test("given input 12:61, expect output Enter a valid time",() => {
    expect(timeWord("12:61")).toEqual("Enter a valid time")
  })

  test("given input 00:00, expect output midnight",() => {
    expect(timeWord("00:00")).toEqual("midnight")
  })

  test("given input 12:00, expect output noon",() => {
    expect(timeWord("12:00")).toEqual("noon")
  })

  test("given input 01:00, expect output one o’clock am",() => {
    expect(timeWord("01:00")).toEqual("one o’clock am")
  })

  test("if mintinues less than 10, expect return oh in time word",() => {
    expect(timeWord("06:01")).toEqual("six oh one am")
  })

  test("given input half an hour, expect return thirty in time word",() => {
    expect(timeWord("06:30")).toEqual("six thirty am")
  })

  test("if Hour > 12, expext return pm",() => {
    expect(timeWord("23:23")).toEqual("eleven twenty three pm")
  })

});