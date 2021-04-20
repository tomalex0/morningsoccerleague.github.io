const { getSum } = require("../../../src/graphql/lib/utility")
const objectData = [
  { goal: 2, game: "one" },
  { goal: 3, game: "two" },
]
context("Utility.js", () => {
  it("2+3", () => {
    const sum = getSum(objectData, "goal")
    expect(sum).to.equal(5)
  })
})
