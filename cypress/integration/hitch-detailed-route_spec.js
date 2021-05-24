describe('Sign up user flow', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3000/profile', {
      method: "GET",
      body: "good"
    })
    cy.visit('http://localhost:3000/');
  });
  it('should have an app title', () => {
    cy.get('h1').contains('HITCH');
  });

  it('should have button to sign up', () => {
    cy.get('button').contains('Sign up');
  });

  it('should be able to click \'sign up now\' button', () => {
    cy.get('button').eq(0).click();
    cy.url().should('include', 'http://localhost:3000/register')
  });
});