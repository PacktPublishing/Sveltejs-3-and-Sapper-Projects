describe('Kanban Motion routing test', () => {
  it('go to root', () => {
    cy.visit('/')
  })

  it('navigates to /board-1', () => {
    cy.get('a button')
      .contains('board-1')
      .click()
    cy.url().should('include', '/board-1')
  })

  it('navigate back to root', () => {
    cy.get('nav a')
      .contains('KM')
      .click()
    cy.url().should('not.include', 'board')
  })
})
