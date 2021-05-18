describe('The menu toggle functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');

    cy.get('input').should('have.length', 3);
    cy.get('.register-form__header').contains('Name');

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('BillyBob33@gmail.com')
      .should('have.value', 'BillyBob33@gmail.com')
    cy.get('input').eq(2)
      .type('billyB')
      .should('have.value', 'billyB')

    cy.get('button').eq(1).click();

    cy.get('input').eq(0)
      .type('Toyota')
      .should('have.value', 'Toyota')
    cy.get('input').eq(1)
      .type('Tacoma')
      .should('have.value', 'Tacoma')
    cy.get('input').eq(2)
      .type('2001')
      .should('have.value', '2001')

    cy.get('button').eq(1).click();

    cy.get('input').eq(0)
      .type('2199 S University Blvd, Denver, CO 80208')
      .should('have.value', '2199 S University Blvd, Denver, CO 80208')
    cy.get('input').eq(1)
      .type('1850 Table Mesa Dr, Boulder, CO 80305')
      .should('have.value', '1850 Table Mesa Dr, Boulder, CO 80305')

    cy.get('button').eq(1).click();
    cy.get('button').eq(1).click();
    cy.get('button').eq(1).click();
  });

  it('Should not be visible until clicked', () => {
    cy.get('.menu__bar').should('not.exist')
    cy.get('.hamburger').click()
    .get('.menu__bar').should('exist')
  });

  it('Should be able to close the menu by clicking anywhere', () => {
    cy.get('.hamburger').click()
      .get('.menu__bar').should('exist');
    cy.get('.menu').click()
      .get('.menu__bar').should('not.exist');
    cy.get('.hamburger').click()
      .get('.menu__bar').should('exist');
    cy.get('.menu-link').eq(1).click()
      .get('.menu__bar').should('not.exist');
  });
});

describe('The clickable links on the menu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');

    cy.get('input').should('have.length', 3);
    cy.get('.register-form__header').contains('Name');

    cy.get('input').eq(0)
      .type('Billy')
      .should('have.value', 'Billy')
    cy.get('input').eq(1)
      .type('BillyBob33@gmail.com')
      .should('have.value', 'BillyBob33@gmail.com')
    cy.get('input').eq(2)
      .type('billyB')
      .should('have.value', 'billyB')

    cy.get('button').eq(1).click();

    cy.get('input').eq(0)
      .type('Toyota')
      .should('have.value', 'Toyota')
    cy.get('input').eq(1)
      .type('Tacoma')
      .should('have.value', 'Tacoma')
    cy.get('input').eq(2)
      .type('2001')
      .should('have.value', '2001')

    cy.get('button').eq(1).click();

    cy.get('input').eq(0)
      .type('2199 S University Blvd, Denver, CO 80208')
      .should('have.value', '2199 S University Blvd, Denver, CO 80208')
    cy.get('input').eq(1)
      .type('1850 Table Mesa Dr, Boulder, CO 80305')
      .should('have.value', '1850 Table Mesa Dr, Boulder, CO 80305')

    cy.get('button').eq(1).click();
    cy.get('button').eq(1).click();
    cy.get('button').eq(1).click()
      .get('.hamburger').click()
  });

  it('Should be able to travel to profile', () => {
    cy.get('.profile-link').click()
      .url().should('include', '/profile');
  });

  it('Should be able to travel to requests', () => {
    cy.get('.menu-link').eq(0).click()
      .url().should('include', '/requests');
  });

  it('Should be able to travel to matched routes', () => {
    cy.get('.menu-link').eq(1).click()
      .url().should('include', '/matched-routes');
  });

  it('Should be able to travel to pending-routes', () => {
    cy.get('.menu-link').eq(2).click()
      .url().should('include', '/pending-routes');
  });

  it('Should be able to travel to messages', () => {
    cy.get('.menu-link').eq(3).click()
      .url().should('include', '/messages');
  });
})