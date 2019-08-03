context('About Page', () => {
    beforeEach(() => {
      cy.visit('/about')
    })
  
    it('has an image', () => {
      cy.get('img');
    })
    it('has a table', () => {
      cy.get('ul');
        })
    it('has a list', () => {
            cy.get('table');
            cy.wait(5000);
              })
      })
  