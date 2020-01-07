// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

it('loads app', () => {
  cy.visit('app/index.html')
  cy.contains('greetings').should('be.visible')
})
