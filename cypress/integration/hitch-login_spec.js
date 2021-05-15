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

describe('User name input', () => {

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

  it('should be able to click \'next\' button and move to next page after completing all inputs', () => {

    cy.get('input').should('have.length', 4);
    cy.get('.register-form__header').contains('Name');

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('BillyBob33')
      .should('have.value', 'BillyBob33')
    cy.get('input').eq(2)
      .type('BillyBob33@gmail.com')
      .should('have.value', 'BillyBob33@gmail.com')
    cy.get('input').eq(3)
      .type('billyB')
      .should('have.value', 'billyB')

    cy.get('button').click();

    cy.get('input').should('have.length', 3);
    cy.get('.register-form__header').contains('Car Details');
  });
});

describe.only('User name input sad paths', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  it('should have an app title and form title', () => {
    cy.get('h1').contains('HITCH');
    cy.get('.register-form__header').contains('Name');
  });

  it('should not be able to click \'next\' button and move to next page if name input is missing', () => {

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(0).then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  });

  it('should not be able to click \'next\' button and move to next page if username input is missing', () => {

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(1).should('have.length', 1)
    cy.get('input').eq(1).then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  });

  it('should not be able to click \'next\' button and move to next page if email input is missing', () => {

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('BillyBob33')
      .should('have.value', 'BillyBob33')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(2).then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  });

  it('should not be able to click \'next\' button and move to next page if password input is missing', () => {

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('BillyBob33')
      .should('have.value', 'BillyBob33')
    cy.get('input').eq(2)
      .type('BillyBob33@gmail.com')
      .should('have.value', 'BillyBob33@gmail.com')

    cy.get('[type="submit"]').click()
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.get('input').eq(3).then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  });

  it('should only be able to input a properly formatted e-mail address', () => {
    cy.get('input').eq(2)
      .type('billy')
      .should('have.value', 'billy')
  });


});