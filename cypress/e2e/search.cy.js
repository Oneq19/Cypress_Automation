describe('Search functionality ', () => {
    beforeEach(() => {
        // Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))
  
        cy.viewport(1280,720)
        cy.visit('https://www.daraz.com.bd/')
        
    })
    it('Check the search functionality', ()=> {
        
        cy.get('input[type="search"]').type("mobile").type('{enter}')
        cy.contains('mobile').should('exist')
  
    })
})