///refrences types="cypress" />

it('google test' , () => {
 // Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

	cy.visit('https://www.google.com/')
	cy.get('.gLFyf').type('automation step by step{enter}')
	cy.contains('videos').click()

})



