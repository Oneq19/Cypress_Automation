
it('learning assertions', () =>{
 
  cy.visit('https://example.cypress.io')
  cy.contains('get').click()
  cy.get('#query-btn')
      .should('contain', 'Button')
      .should('have.class','query-btn')
      .should('be.visible')
      .should('be.enabled')


   cy.get('#query-btn') .invoke('attr','id')
    .should('equal','query-btn')

  
    
    let name = 'fatema'
    expect(name).to.be.equal('fatema')
    assert.equal(4, 4, 'not equal')
   
  

})
