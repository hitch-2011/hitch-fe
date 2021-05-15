describe('Sign up user flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should have an app title', () => {
    cy.get('h1').contains('HITCH');
  });

  it('should have button to sign up', () => {
    cy.get('button').contains('Sign up now');
  });

  it('should be able to click \'sign up now\' button', () => {
    cy.get('button').click();
    cy.url().should('include', 'http://localhost:3000/register')
  });
});

describe.only('User name input', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  it('should have an app title', () => {
    cy.get('h1').contains('HITCH');
  });

  it('should have a form title ', () => {
    cy.get('.register-form__header').contains('Name');
  });


})