describe('The menu toggle functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
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
    cy.visit('http://localhost:3000/')
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