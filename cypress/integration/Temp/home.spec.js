context('First', () => {
    beforeEach(() => {
      cy.visit('https://ragavendra2018-3.herokuapp.com/')
    })
  
    it('Home Button', () => {
      cy.get('[routerlink="/todos"]').should('contain.text','Todos');
    })
    it('Home Button', () => {
      cy.get('[routerlink="/stopwatch"]').should('contain.text','Stopwatch');
      cy.wait(5000);
    })
  
      })
  