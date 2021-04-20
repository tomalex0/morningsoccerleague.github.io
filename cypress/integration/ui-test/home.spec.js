const url = Cypress.env("appUrl")

context(`Testing Home ${url}`, () => {
  before(() => {
    cy.visit(url)
  })

  it("Does not do much!", () => {
    expect(true).to.equal(true)
  })
})
