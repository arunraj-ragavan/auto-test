context('Ex5', () => {
    beforeEach(() => {
      cy.visit('/about')
    })
  
    it('Add todo', () => {
        cy.get('[routerlink="/todos"]').click();
      cy.get('button').click();
      cy.wait(2000);
      cy.get('.ng-untouched').type('Arun');
      cy.get('.add-todo > :nth-child(3)').click();
      cy.wait(2000);
      cy.get('.add-todo > button').click();
      cy.wait(2000);
      cy.get('.ng-valid').type('Raj');
      cy.get('.add-todo > :nth-child(3)').click();
      cy.wait(2000);
      cy.get(':nth-child(3) > .delete-button').click();
      cy.wait(2000);
      cy.get(':nth-child(2) > span').click();
      cy.get('ul > :nth-child(2) > .ng-untouched').type('raj');
      cy.get('#save-button').click();
      cy.wait(5000);

    })
   
      })
  
