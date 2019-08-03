context('Ex5', () => {
    beforeEach(() => {
      cy.visit('/stopwatch')
    })
  
    it('stopwatch', () => {
        cy.get('#startbutton').click();
        cy.get('.milliseconds').should('not.have.value', '00')
        cy.get('.light').should('have.css','color', 'rgb(255, 0, 0)');
      cy.wait(5000);
      cy.get('#startbutton').click();
      cy.wait(5000);

    })
   
      })
  
