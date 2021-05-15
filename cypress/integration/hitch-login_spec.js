describe('Login User Flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should have an app title', () => {
    cy.get('h1').contains('HITCH');
  });

  it('should have button to sign up', () => {
    cy.get('button').contains('Sign up now');
  });
})