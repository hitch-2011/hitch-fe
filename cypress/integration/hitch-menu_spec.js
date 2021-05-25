describe('The menu toggle functionality', () => {
  beforeEach(() => {
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: ''
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
        }
      }
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "POST",
      body: {
        user_id: '1',
        origin: '1138 Corona St, Denver, CO 80218, USA',
        destination: '1850 Table Mesa Dr, Boulder, CO 80305',
        departure_time: "09:03",
        days: ["monday", "tuesday"]
      }
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "GET",
      statusCode: 200,
      body: {
        data: {
          attributes: {
            bio: "I like driving.",
            email: "dominic@gmail.com",
            fullname: "fullname",
            matched_routes: [{ id: 1, user_id: 3, origin: "3956 Alcott St Denver, CO 80211, USA", destination: "1125 S Kalispell St, Aurora, CO 80017, USA", departure_time: "9:00am", ridedays: ["monday", "tuesday"] }]
          }
        }
      }
    })

    cy.visit('http://localhost:3000/register');
    cy.intercept("https://maps.googleapis.com/maps/api/place/js/*")

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

    cy.get('.registration__button').click();
    cy.wait(1000)

    cy.get('input').eq(0)
      .type('1138 Corona St, Denver, CO 80218')
      .get('span').eq(0)
      .click()
      .get('input').eq(0)
      .should('have.value', '1138 Corona St, Denver, CO 80218, USA')
    cy.get('input').eq(1)
      .type('1850 Table Mesa Dr, Boulder, CO 80305')
      .should('have.value', '1850 Table Mesa Dr, Boulder, CO 80305')

    cy.get('.registration__button').click();

    cy.get('[type="checkbox"]').eq(1).check({ force: true })
    cy.get('[type="checkbox"]').eq(5).check({ force: true })
    cy.get('[type="checkbox"]').eq(6).check({ force: true })
    cy.get('.registration__button').click()
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
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      method: "POST",
      body: "good"
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users', {
      status: 200,
      body: {
        data: {
          id: 1
        }
      }
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "POST",
      body: "good"
    })
    cy.intercept('https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides', {
      method: "GET",
      statusCode: 200,
      body: {
        data: {
          attributes: {
            bio: "I like driving.",
            email: "dominic@gmail.com",
            fullname: "fullname",
            matched_routes: [{ id: 1, user_id: 3, origin: "3956 Alcott St Denver, CO 80211, USA", destination: "1125 S Kalispell St, Aurora, CO 80017, USA", departure_time: "9:00am", ridedays: ["monday", "tuesday"] }]
          }
        }
      }
    })
    cy.visit('http://localhost:3000/register');
    cy.intercept("https://maps.googleapis.com/maps/api/place/js/*")

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
    cy.wait(1000)

    cy.get('input').eq(0)
      .type('1138 Corona St, Denver, CO 80218')
      .get('span').eq(0)
      .click()
      .get('input').eq(0)
      .should('have.value', '1138 Corona St, Denver, CO 80218, USA')
    cy.get('input').eq(1)
      .type('1850 Table Mesa Dr, Boulder, CO 80305')
      .should('have.value', '1850 Table Mesa Dr, Boulder, CO 80305')

    cy.get('button').eq(1).click();

    cy.get('[type="checkbox"]').eq(1).check({ force: true })
    cy.get('[type="checkbox"]').eq(5).check({ force: true })
    cy.get('[type="checkbox"]').eq(6).check({ force: true })
    cy.get('.registration__button').click();

    cy.get('.hamburger').wait(50).click()
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
})