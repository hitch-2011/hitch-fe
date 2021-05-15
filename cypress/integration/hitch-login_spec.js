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

  it('should have a form title', () => {
    cy.get('.register-form__header').contains('Name');
  });

  it('should contain an input for name, username, email, and password', () => {
    cy.get('input').should('have.length', 4);
  });

  it('should allow users to select name input and type a name', () => {
    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
  });

  it('should allow users to select username input and type a username', () => {
    cy.get('input').eq(1)
      .type('BillyBob33')
      .should('have.value', 'BillyBob33')
  });

  it('should allow users to select email input and type a valid email address', () => {
    cy.get('input').eq(2)
      .type('BillyBob33@gmail.com')
      .should('have.value', 'BillyBob33@gmail.com')
  });

  it('should allow users to select password input and type a password', () => {
    cy.get('input').eq(3)
      .type('billyB')
      .should('have.value', 'billyB')
  });

  it('should have a next button to move to next login page', () => {
    cy.get('button').contains('Next');
  });

  it('should be able to click \'next\' button and move to next page', () => {
    cy.get('button').click();
  });

})